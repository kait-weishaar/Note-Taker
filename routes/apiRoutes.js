const router = require('express').Router();
let db = require('../db/db.json')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


//Tutorial for writing to db.json https://www.youtube.com/watch?v=6iZiqQZBQJY
console.log("look here", uuidv4());
router.get("/notes", (req, res) => {
    console.log("here we are");
    // let results = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    res.json(db);
});

router.post("/notes", (req, res) => {
    
    req.body.id =uuidv4();
    const newNote = req.body;
    // let notesData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    db.push(newNote);
    // fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
    res.json(db);
})

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    // let noteData = JSON.parse(
    //     fs.readFileSync( "./db/db.json", "utf8"));
    
    
    const newData =db.filter(note => note.id != noteID);
    console.log('we got halfway', newData)
    // fs.writeFileSync('./db/db.json', JSON.stringify(newData));
    db = newData;
    res.json(db);
});
module.exports = router;