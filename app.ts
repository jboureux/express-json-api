import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.port || 3333;
const dataFolder = "data";

app.get("/hello", (req, res) => {
    res.send("Hello from the server");
});

app.get("/getJson", (req, res) => {
    if (req.query.file == undefined) {
        res.send("Erreur, le paramètre file n'est pas défini");
    }
    fs.readFile(
        path.join(process.cwd(), `${dataFolder}/${req.query.file}.json`),
        { encoding: "utf-8" },
        (err, data) => {
            if (!err) {
                res.status(200)
                    .setHeader("Content-Type", "application/json")
                    .send(data);
            } else {
                res.send(err);
            }
        }
    );
});
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
