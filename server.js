const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.static("dist"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
//install vite and express and three js