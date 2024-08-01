import express from "express"

const app = express()
app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile('/localstorage-sessionstorage.html');
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})