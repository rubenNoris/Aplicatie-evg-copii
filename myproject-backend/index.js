var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
const { error } = require("console");
var cors = require("cors");
const { response } = require("express");
const { request } = require("http");
const multer = require("multer");
var app = Express();
app.use(cors());

var CONNECTION_STRING =
  "mongodb+srv://noris:D0ar!u2004@aplicatie-copii.4w4lx8i.mongodb.net/?retryWrites=true&w=majority&appName=Aplicatie-Copii";

var DATABASENAME = "appevgcopii";
var database;

app.listen(5038, () => {
  Mongoclient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DATABASENAME);
    console.log("Mongo DB Conection Succesuful");
  });
});

app.get("/api/appevgcopii/GetNotes", (request, response) => {
  database
    .collection("articles")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.post("/api/appevgcopii/AddNotes", multer().none(), (request, response) => {
  database.collection("articles").count({}, function (error, numOfDocs) {
    database.collection("articles").insertOne({
      id: (numOfDocs + 1).toString(),
      description: request.body.newNotes,
    });
    response.json("Added Succesufuly");
  });
});

app.delete("/api/appevgcopii/DeleteNotes", (request, response) => {
  database.collection("articles").deleteOne({
    _id: request.query.id,
  });
  response.json("Delete Successfully");
});
