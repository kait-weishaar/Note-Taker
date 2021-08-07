const router = require('express').Router();
const  notes = require("../db/db.json");
console.log("look here", notes);
router.get("/notes", (req, res) => {
    console.log("here we are");
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    const newNote = req.body;
    // let notesData = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    notes.push(newNote);
    // fs.writeFileSync('./db./db.json', JSON.stringify(notesData));
    res.json(notes);
})

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    let noteData = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
    const newData = noteData.filter(note => note.id.toString() !== noteID);
    fs.writeFileSync('../db./db.json', JSON.stringify(newData));
    res.json(newData);
});
module.exports = router;