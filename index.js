import connectToMongo from './database/db.js';
import express from 'express';
import auth from './routes/auth.js';
import notes from './routes/notes.js'
import aarvik from './routes/aarvik.js'
import cors from 'cors'



    
connectToMongo();
const app = express()
const port = 4000
    

//middleware

app.use(express.json());
app.use(cors())

//* Available routes

app.get('/', (req, res) => {
    res.json("eNotebook Backend API")
});
app.use('/api/auth', auth)
app.use('/api/notes', notes)
app.use('/api/aarvik', aarvik)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
