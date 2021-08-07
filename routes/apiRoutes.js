const router = require('express').Router();

const fs = require('fs')

const { v4: uuidv4 } = require('uuid');

console.log("look here", uuidv4());
router.get("/notes", (req, res) => {
    console.log("here we are");
    let results = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(results);
});

router.post("/notes", (req, res) => {
    const newNote = req.body;
    req.body.id =uuidv4();
    
    let notesData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
    res.json(notesData);
})

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    let noteData = JSON.parse(
        fs.readFileSync( "./db/db.json", "utf8"));
    
    console.log('we got halfway', noteData)
    const newData =noteData.filter(note => note.id.toString() !== noteID);
    console.log('we got halfway', newData)
    fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    res.json(newData);
});
module.exports = router;