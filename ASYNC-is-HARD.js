const router = require('express').Router();
const  notes = require("../db/db.json");
const fs = require('fs')
const path = require('path');
const { v4: uuidv4 } = require('uuid');

console.log("look here", uuidv4());
router.get("/notes", (req, res) => {
    console.log("here we are");
    let results = JSON.parse(fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw new Error(err);
        }
        return data
    }));
    res.json(results);
});

router.post("/notes", (req, res) => {
    const newNote = req.body;
    req.body.id =uuidv4();
    
    let notesData = JSON.parse(fs.readFile("../db/db.json", "utf8", (err, data) => {
        if (err) {
            throw new Error(err);
        }
        return data
    }));
    notesData.push(newNote);
    fs.writeFile('../db/db.json', JSON.stringify(notesData), (err, data) => {
        if (err) {
            throw new Error(err);
        }
        return data
    });
    res.json(notesData);
})

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id.toString();
    let noteData = JSON.parse(
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) =>{
        if (err) {
            throw new Error('here I am');
        }
        return data
    }));
    // let noteData= JSON.parse(data)
    console.log('we got halfway', noteData)
    const newData =noteData.filter(note => note.id.toString() !== noteID);
    console.log('we got halfway', newData)
    fs.writeFile(path.join(__dirname,'../db/db.json'), JSON.stringify(newData), (err, data) =>{
        if (err) {
            throw new Error(err);
        }
        res.json(newData);
    });
});
module.exports = router;