const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const {getClansFromApi} = require("./utils/getClansFromApi.js");
const cors = require("cors");

const clans = [
    {tag: "Q8PGCRPV"},
    {tag: "YC08PPVC"}
];

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
const TOKEN = process.env.TOKEN;

app.use(
  cors({
    origin: "https://clashroyalemafiadipatriota-production.up.railway.app",
    credentials: true
  })
);

fetch("https://api.ipify.org")
  .then(res => res.text())
  .then(ip => console.log("Server IP:", ip));

app.get("/get_clans", async (req, res) => {
  const data = await Promise.all(clans.map(clan => (
    getClansFromApi(clan.tag, TOKEN)
)));

console.log(data)

  res.json(data);
});


const _dirnameFull = path.resolve();
console.log("dirname full:", __dirname);
//const clientPath = path.join(_dirnameFull, '../frontend', 'dist');
const clientPath = path.join(process.cwd(), 'frontend/dist');


app.use(express.json());
app.use(express.static(clientPath));


/*app.use((req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});*/

app.get("*", (req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

//module.exports = app;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})