import express from "express";

const app = express();
app.use(express.json());

const port = process.env.port || 3333;

app.get("/hello", (req, res) => {
    res.send("Hello from the server");
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
