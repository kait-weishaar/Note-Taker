const express = require('express');
// const fs = require('fs');
// const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// require('./routes/apiRoutes')(router);
// require('./routes/htmlRoutes')(router);

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});