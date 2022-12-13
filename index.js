const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const moment = require('moment/moment');


// middlewares
app.use(cors())
app.use(express.json())


const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        const db = client.db("olx-clone");
        const productsCollection = db.collection("products");
        const usersCollection = db.collection("users");

        // products
        app.get('/products', async (req, res) => {
            const query = {};
            const products = await productsCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(products);
        })
        app.post('/products', async (req, res) => {
            const product = req.body;
            // adding date & time
            const createdAt = moment().format();
            product.createdAt = createdAt;
            const result = await productsCollection.insertOne(product);
            res.send(result);
        })
        app.get('/myproducts', async (req, res) => {
            const email = req.query.email;
            const query = { 'seller.email': email }
            const result = await productsCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result);
        })
        // is user exist
        app.get('/isUserExist', async (req, res) => {
            const query = { email: req.query.email };
            const user = await usersCollection.findOne(query);
            const isExist = user ? true : false;
            res.send({ isExist });
        })
    } finally {
        // 
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send({
        status: 'success',
        message: `OLX Clone app server is running on port ${port}`
    })
})

app.listen(port, () => {
    console.log(`OLX Clone app listening on port ${port}`)
})