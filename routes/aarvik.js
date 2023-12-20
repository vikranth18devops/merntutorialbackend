import express from 'express';
import fetchUser from '../middleware/fetchUser.js';
import Aarvik from '../models/Aarvik.js';
const router = express.Router();

//* ROUTE 1: Get All the Notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/aarvikallnotes', fetchUser, async (req, res) => {
    try {
        const aarvik = await Aarvik.find({ user: req.userId });
        res.json(aarvik);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})


//* ROUTE 2: Add new Note using: POST "/api/notes/addnote". Login required
router.post('/aarvikaddnote', fetchUser, async (req, res) => {
    try {
        //* data comimg from body(frontend)
        const { title, description, tag, remarks } = req.body

        //* validation 
        if (!title || !description || !tag) {
            return res.status(400).json({ error: "All fields are required" });
        }

        //* Notes
        const aarvik = new Aarvik({ title, description, tag, remarks, user: req.userId });

        //* saving notes
        const savedAarvik = await aarvik.save();
        res.json(savedAarvik);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})

export default router