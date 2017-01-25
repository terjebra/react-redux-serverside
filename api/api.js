'use strict'

const express = require('express');
const cors = require('cors')
const app = express();

const port = 3012;

const tasks = [
  {id:1, name:"Task 1"},
  {id:2, name:"Task 2"},
  {id:3, name:"Task 3"},
  {id:4, name:"Task 4"},
  {id:5, name:"Task 5"},
];

app.use(cors());

app.get('/tasks', (req, res) => {
  res.json(tasks)
});

app.get('/tasks/:id', (req, res) => {
  let filteredTasks = tasks.filter( (task ) =>{
   return task.id == req.params.id
  });

  if(filteredTasks.length == 0){
    res.sendStatus(404);
  }
  else{
    res.json(filteredTasks[0])
  }
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("API running on port %s", port)
  }
});

