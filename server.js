const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());