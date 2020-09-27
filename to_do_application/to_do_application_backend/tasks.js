const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todo"
})

app.get("/tasks", function(req, res) {

  const query = "SELECT * FROM tasks;"

  connection.query(query, function(error, data) {
    if(error) {
      console.log("Error fetching tasks", error);
      res.status(500).json({
        error: error
      })
    } else {
      res.status(200).json({
        tasks: data
      })
    }
  });

});


app.delete("/tasks/:taskId", function(req, res) {

  const query = "DELETE FROM tasks WHERE taskId = ?";

  connection.query(query, [req.params.taskId], function(error){
    if (error){
      console.log("Error deleting task", error);
      res.status(500).json({
        error: error
      });
    } else {
      res.sendStatus(201)
    }
  });
});


app.post("/tasks", function(req, res) {

  const query = "INSERT INTO tasks (complete, text, date, deleteTask, userId) VALUES (?, ?, ?, ?, ?);";

  connection.query(query, [req.body.complete, req.body.text, req.body.date, req.body.deleteTask, req.body.userId], function(error, data) {
    if(error) {
      console.log("Error creating task", error);
      res.status(500).json({
        error: error
      })
    } else {
      res.status(201).json ({
        data: data
      })
    }
  });

});


app.put("/tasks/:taskId", function(req, res) {

  const query = "UPDATE tasks SET complete = ?, text = ?, date = ?, deleteTask = ?, userId = ? WHERE taskId = ?;"

  connection.query(query,[req.body.complete, req.body.text, req.body.date, req.body.deleteTask, req.body.userId, req.params.taskId], function (error){
    if (error){
      console.log("Error updating task", error);
      res.status(500).json({
        error: error
      });
    }
    else {
      res.sendStatus(200);
    }
  });

});

module.exports.tasks = serverless(app);