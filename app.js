const express = require('express');
const {MongoClient} = require('mongodb');
const path = require('path');
const cors = require("cors");
const app = express();
const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect();
const db = client.db("MyDbb");
const collection = db.collection("products");
const PORT = 3023;
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

collection.insertOne({
    name: 'SHOES',
    price: '100$'
});

app.get('/', async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public" ,"index.html"));
});

app.get('/products', async (req, res) => {
    res.send(await collection.find().toArray());
});

// app.post('/products', async (req, res) => {
//     const body = req.body;
//     await collection.insertOne(body);
//     res.status(200).send("product created!!!");
// });

app.listen(PORT, () => {
    console.log(`Server listen on PORT: ${PORT}`);
});