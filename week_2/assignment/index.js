// You need to create an express HTTP server in Node.js which will handle the logic of a todo list app
const express= require('express');
const bodyParser = require('body-parser');
const app =express();
app.use(bodyParser.json());
const port = 3006;

let todos = [{
    id:1,
    title:"buy grosseries",
    discription:"i should buy groceries",
    completed:false
},
{
    id:2,
    title:"finish homework",
    discription:"completed the maths assignment",
    completed:false
},
{
    id:3,
    title:"call mom",
    discription:"discussing the family problem",
    completed:false
}
];
//to print all todos
app.get("/todos",function(req,res){
    res.status(200).json(todos);
});
//to get some specific id todo list
app.get("/todos/:id",function(req,res){
    const ans= req.params.id;
    if(ans==1){
       res.json(todos[0])
    }
    else if (ans==2){
         res.json(todos[1]);
    }
    else if (ans==3){
        res.json(todos[2]);
    }
    else{
        res.status(404).send('404 Not Found');
    }
})

//to update the task

// app.use(express.json());


// // POST endpoint to add a new todo
// app.post('/todos', (req, res) => {
//     const newTodo = req.body; // Extract the todo data from the request body
//     todos.push(newTodo); // Add the new todo to the todos array
//     res.json({ message: 'Todo added successfully', todo: newTodo }); // Respond with a JSON message
// });



app.listen(port,function(){
    console.log(`server is running on port ${port}`)
})
