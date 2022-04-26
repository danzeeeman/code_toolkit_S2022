## Week 13 - Special Topics

* Special Topics in Coding

Prerequisites
- Install [Postman](https://www.postman.com) to make the API calls.
- [Set up a MongoDB database](cloud.mongodb.com/) on [mongodb](cloud.mongodb.com/).

### Step 1

Create a folder named ```my_game_server```

From the terminal run ```npm init``` in the project folder and 
````npm install express body-parser mongodb –save```` to install dependencies

The ```Player``` object will have two attributes: ```username``` & ```score```
```  
let player = {“username” : “string”, “score” : integer}
```

The leaderboard API schematic should provide routes to:
- Create a new player
- Update a player’s score
- Remove a player
- Fetch a list (leaderboard) of top players (ranked by score)

### Step 1: Connecting our Node.js backend to the MongoDB database on mLab
Now, we need to connect to the database we created in mLab (in this case sweetgame), and make a collection called players that will contain records of all our players.
```Index.js```
```
// Import necessary packages
const express = require(“express”);
const bodyParser = require(“body-parser”);

// create and configure the express app
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

// Database Connection Info
const MongoClient = require(“mongodb”).MongoClient;

// the URL we copied from earlier. Replace username and password with what you created in the initial steps
const url = “mongodb://sweetgame:sweetgame1@ds135156.mlab.com:35156/sweetgame”;
let db;

// The index route
app.get(“/”, function(req, res) {
   res.send(“Sweet Game Leaderboard API!”);
});

// Connect to the database with [url]
(async () => {
   let client = await MongoClient.connect(
       url,
       { useNewUrlParser: true }
   );

   db = client.db(“Players”);

   app.listen(PORT, async function() {
       console.log(`Listening on Port ${PORT}`);
       if (db) {
           console.log(“Database is Connected!”);
       }
   });
})();
```
Note: In production, you are going to want those keys in an external .env file 
Run the server now with `node index.js`

### Step 2: Creating a route to create a new player
This route involves ```creating``` a new player object. As such, we will use the ```POST``` HTTP method. We will use MongoDB’s ```findOne``` function to find an object and the ```insertOne``` function to create a new object. Refer to MongoDB’s API Docs to see more useful and helpful functions.


```
// Route to create new player
app.post(“/players”, async function(req, res) {
   // get information of player from POST body data
   let { username, score } = req.body;

   // check if the username already exists
   const alreadyExisting = await db
       .collection(“players”)
       .findOne({ username: username });

   if (alreadyExisting) {
       res.send({ status: false, msg: “player username already exists” });
   } else {
       // create the new player
       await db.collection(“players”).insertOne({ username, score });
       console.log(`Created Player ${username}`);
       res.send({ status: true, msg: “player created” });
   }
});
// Connect to the database with the url
```
### Restart the server and open up Postman. 
In Postman, make a POST request to ```localhost:3000/players``` with body data: ```{“username”: “charles”, “score”: 0}```


### Step 2: Creating a route to update player scores
This route involves ```updating``` the player scores with a new value. As such, we shall use the ```PUT``` HTTP Method.
```
app.put(“/players”, async function(req, res) {
   let { username, score } = req.body;
   // check if the username already exists
   const alreadyExisting = await db
       .collection(“players”)
       .findOne({ username: username });
   if (alreadyExisting) {
       // Update player object with the username
       await db
           .collection(“players”)
           .updateOne({ username }, { $set: { username, score } });
       console.log(`Player ${username} score updated to ${score}`);
       res.send({ status: true, msg: “player score updated” });
   } else {
       res.send({ status: false, msg: “player username not found” });
   }
});
```
Restart the server, head into Postman, and update the score of the player you created above to 10:

Check with mLab to see the result:

Step 3: Creating a route to remove a player
This route involves ```deleting``` the player object. As such, we shall use the ```DELETE``` HTTP Method.
```
// delete player
app.delete(“/players”, async function(req, res) {
   let { username, score } = req.body;
   // check if the username already exists
   const alreadyExisting = await db
       .collection(“players”)
       .findOne({ username: username });

   if (alreadyExisting) {
       await db.collection(“players”).deleteOne({ username });
       console.log(`Player ${username} deleted`);
       res.send({ status: true, msg: “player deleted” });
   } else {
       res.send({ status: false, msg: “username not found” });
   }
});
```
Restart the server, and in Postman, make a DELETE request to ```localhost:3000/players``` with body data: ```{username: “charles”}```

Checkup with mLab to see results 

### step 4: Route to get the leaderboard
Before we create the route for the leaderboard, go ahead and create a few more players with varying scores using the POST request in Postman (like in Step 2).

Now, the client (the game) should be able to use this route to request a specified number of top players. Since this route involves `retrieving/getting` data, we will use the `GET` HTTP method.

The `GET` route differs from other routes in that you do not carry data with that request. Instead, data is passed using ‘query strings’ in the URL.

For example, to get the leaderboard, the client will make requests like so: ```localhost:3000/players?lim=2``` where lim=the number of top players to show.
```
// Access the leaderboard
app.get(“/players”, async function(req, res) {
   // retrieve ‘lim’ from the query string info
   let { lim } = req.query;
   db.collection(“players”)
       .find()
       // -1 is for descending and 1 is for ascending
       .sort({ score: -1 })
       // Show only [lim] players
       .limit(lim)
       .toArray(function(err, result) {
           if (err)
               res.send({ status: false, msg: “failed to retrieve players” });
           console.log(Array.from(result));
           res.send({ status: true, msg: result });
       });
});
```


* Final Project Check Point - Gut Check 
