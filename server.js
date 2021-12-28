const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3003;
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./public/HTML/newsletter-edicao-42.html"));
});

app.listen(port, () => {
    console.log(`Running on port ${port}.`); 
});