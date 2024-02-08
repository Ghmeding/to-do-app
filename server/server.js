const PORT = process.env.PORT ?? 8000; //accesses a secret varialbe (from kinsta), if not it takes 8000
const express = require('express'); //get express
const cors = require('cors');
const app = express(); 
const pool = require('./db'); //our database

const userEmail = 'gusm@itu.dk'

app.use(cors());

//get all todos
app.get('/todos/:userEmail', async (req, res) => { 
    const  { userEmail } = req.params;
    try {
        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
        res.send(todos.rows);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));// listen for changes on the port







