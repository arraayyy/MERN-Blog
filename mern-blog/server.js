const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// initialize Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {                                                          
  res.send("Hello World");
});

app.post("/", (req, res) => {
    res.send(`Hello ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});