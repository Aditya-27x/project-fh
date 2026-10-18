const express = require('express');
const cors=require('cors');
const connectDb = require('./config/db');



const app = express();
const port =5000;

app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/user.route');
const projectRoutes = require('./routes/project.route');

// mongodb connect
connectDb();

app.get('',async(req,res)=>{
    res.send("server is ready")
});

app.use('/users',userRoutes);
app.use('/projects',projectRoutes);


app.listen(port, ()=>{
    console.log('server started on http://localhost:5000');
})