const express = require('express');
const app = express();
const DB = require('./database.js')


const port = process.argv.length >2? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));


// router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// apiRouter.get('/public', (_req, res) => {
//   res.send(public);
// });

//get progress
apiRouter.get('/public', async (_req, res) => {
  const public = await DB.getProgress();  
  res.send(public);
});
  
 5
// apiRouter.post('/public', (req, res) => {
//   public = updatePublic(req.body, public);
//   res.send(public);
// });

apiRouter.post('/public', async (req, res) => {
  DB.addProgress(req.body)
  const public = await DB.getProgress();
  res.send(public);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// ///////////////////
// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.


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

