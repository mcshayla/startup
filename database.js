const config = require('./dbConfig.json');
//const { MongoClient } = require('mongodb')
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});



// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://mcmshayla:CS260Mongopw@cluster0.qcpi0za.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// const { MongoClient } = require('mongodb');

// const userName = 'holowaychuk';
// const password = 'express';
// const hostname = 'mongodb.com';

// const url = `mongodb+srv://${userName}:${password}@${hostname}`;

// const client = new MongoClient(url);

// const collection = client.db('rental').collection('house');

// const house = {
//   name: 'Beachfront views',
//   summary: 'From your bedroom to the beach, no shoes required',
//   property_type: 'Condo',
//   beds: 1,
// };
// await collection.insertOne(house);

// const cursor = collection.find();
// const rentals = await cursor.toArray();
// rentals.forEach((i) => console.log(i));