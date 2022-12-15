# OLX-clone-server

## Setup & Installation

1. Clone down the server repository by
    ```
    git clone --branch server https://github.com/mickeymaruf/OLX-clone.git olx-server
    ```
    and go inside the folder. You will need `node` and `npm` installed globally on your machine.

2. Create a `.env` file in root directory. This file holds MongoDB database information:
    ```shell
    DB_URL=mongodb+srv://ghost:passwd1122@cluster0.ld8a5ol.mongodb.net/?retryWrites=true&w=majority
    ```

3. Installation:

    `npm install`

    To Start Server:

    `npm start`  

    To Visit App:

    `localhost:5000`

    *(Totally optional)* Install nodemon package by `npm i nodemon` if you don't want to refresh the server for every changes. Then run `nodemon index.js`.