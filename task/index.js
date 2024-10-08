const express = require('express');
const app = express()
const PORT = 3000;
const userModel=require('./model/user')
const cors = require('cors')
const mongoose= require('mongoose')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/user')
.then(()=>{
    console.log('mongodb connected succesfully');
    
})
.catch((error)=>{
    console.log(error);
    
})
// post request handler

app.post('/userpost',async (req,res) =>{
    try{
        const {name, email, age} = req.body;
        const newUser = await userModel.create({name, email, age }); //await the create method
        res.status(201).json(newUser); //send a response with the created user

} catch(error){
    res.status(400).json({error:error.message}); //handle errors
}
})
// update 
app.put('/userupdate/:id', async (req, res) => {
    try {
        const userId = req.params.id; // Get the user ID from the URL
        const updatedData = req.body; // Get the updated data from the request body

        // Find the user by ID and update it with new data
        const updatedUser = await userModel.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(updatedUser); // Send back the updated user
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors
    }
})
app.delete('/userdelete/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
﻿

// GET request handler
app.get('/userget', async (req,res) =>{
    try{
        const users = await userModel.find(); //fetch all users
        res.json(users); //send the list of users as a response
    } catch (error){
        res.status(500).json({error:error.message})
    }
})
app.get('/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, ()=>{
    console.log(`server is running on : ${PORT}`);
    
})
