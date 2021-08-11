"use strict";

// Install express server
const express = require("express");
const path = require("path");

const DISTRIBUTION_FOLDER = "build";

const app = express();

// Serve only the static files
app.use(express.static(path.join(__dirname, DISTRIBUTION_FOLDER)));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, DISTRIBUTION_FOLDER, "/index.html"));
});

// Start the app by listening on the default port
app.listen(process.env.PORT || 9000, function () {
    console.log(`app listening on ${(process.env.PORT || 9000)}`)
});