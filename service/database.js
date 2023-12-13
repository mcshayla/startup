const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');


//const { MongoClient, ServerApiVersion } = require('mongodb');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const publicCollection = db.collection('progress');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({email: email});
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token});
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

// async function addProgress(public) {
//   // let found = false;

// //   for (const [i, prevEntry] of public.entries()) {
// //     if (newEntry.name === prevEntry.name && newEntry.habit === prevEntry.habit) {
// //       prevEntry.ratio += 1
// //       found = true;
// //       break;
// //     }
// //   }

// //   if (!found) {
// //     const result = await publicCollection.insertOne(newEntry);
// //     return result;
// //   }
// // }

//   const result = await publicCollection.insertOne(public);
//   return result;
//}
async function addProgress(newEntry) {
  const existingEntry = await publicCollection.findOne({
    name: newEntry.name,
    habit: newEntry.habit
  });

  if (existingEntry) {
    await publicCollection.updateOne(
      { habit: existingEntry.habit },
      { $inc: { ratio: 1 } }   
    );
  } else {
    const result = await publicCollection.insertOne(newEntry);
    return result;
  }
}

function getProgress() {
  const query = {ratio: {$gt: 0}}
  const options = {
    sort: {score: -1},

    
  };
  const cursor = publicCollection.find(query, options);
  return cursor.toArray();

}

module.exports = { 
  getUser,
  getUserByToken,
  createUser,
  addProgress, 
  getProgress, 
};

// let public = [];
// function updatePublic(newEntry, public) {
//   let found = false;
//   for (const [i, prevEntry] of public.entries()) {
//       if (newEntry.name === prevEntry.name && newEntry.habit === prevEntry.habit) {
//         prevEntry.ratio += 1;
//         found = true;
//         break;
//       }
//   }

//   if (!found) {
//     public.push(newEntry);
//   }

//   return public;
// }