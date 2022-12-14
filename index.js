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
        const ordersCollection = db.collection("orders");

        // products
        app.get('/products', async (req, res) => {
            const query = { status: { $ne: "sold" } };
            const products = await productsCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(products);
        })
        app.get('/products/:id', async (req, res) => {
            const query = { _id: ObjectId(req.params.id) };
            const product = await productsCollection.findOne(query);
            res.send(product);
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
        // orders
        app.get('/orders', async (req, res) => {
            const email = req.query.email;
            const query = { 'buyer.email': email }
            const result = await ordersCollection.find(query).sort({ createdAt: -1 }).toArray();
            res.send(result);
        })
        app.put('/orders', async (req, res) => {
            const order = req.body;
            const productId = order.productId;
            const orderAlreadyExist = await ordersCollection.findOne({ productId });
            if (orderAlreadyExist) {
                return res.send({});
            }
            const createdAt = moment().format();
            order.createdAt = createdAt;
            const orderUpdateDoc = {
                $set: order
            }
            const orderResult = await ordersCollection.updateOne({ productId }, orderUpdateDoc, { upsert: true });
            // 
            if (orderResult.upsertedCount > 0) {
                const query = { _id: ObjectId(productId) };
                const updateDoc = {
                    $set: {
                        status: 'sold'
                    }
                }
                const result = await productsCollection.updateOne(query, updateDoc);
            }
            res.send(orderResult);
        })
        // users
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
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