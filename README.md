# Note-Takr



## Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Deployment](#deployment)
* [Usage](#usage)
* [Built With](#built-with)
* [Future Development](#future-development)



## Description:
Note-Takr is a simple app designed to aid in the management of a to-do list. Users can save notes, delete notes, and view previously created notes. The front end content was provided by UW-Madison Extension Bootcamp. The app was built using Express.js for the backend framework (setting up the server), and stores and retrieves data via a JSON file.



## Technologies
The application was built with the express.js framework. It uses the npm UUID module for id creation for database management. It's deployed on Heroku.




## Deployment:
[Heroku Link](https://radiant-falls-74608.herokuapp.com/)




## Usage
The user can simply navigate to the deployed site and begin entering notes.
Demo video: 




![Demo Video](notetakr.gif)






## Built With
 - Javascript
 - Node.js
 - NPM UUID
 - Express.js
 - NPM fs



## Future Development
Using the fs module to store data in a JSON file was difficult to write asynchronously at first, and resulted in a small taste of 'callback hell'. An interesting improvement would be to try and implement node streaming, which while not neessary for a small and simple app like this one, could be vital for larger projects.
 

