const router = require('express').Router();
const { notes } = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/api/notes", (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = req.body;
    let notesData = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    notesData.push(newNote);
    fs.writeFileSync('./db./db.json', JSON.stringify(notesData));
    res.json(notesData);
})

router.delete("/api/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    let noteData = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    const newData = noteData.filter(note => note.id.toString() !== noteID);
    fs.writeFileSync('../db./db.json', JSON.stringify(newData));
    res.json(newData);
});
module.exports = router;