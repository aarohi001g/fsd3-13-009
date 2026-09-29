import express from "express";

const app = express();

//request goes here
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

const products = [
  { id: 1, name: "marker", qty: 100, price: 15 },
  { id: 2, name: "duster", qty: 50, price: 10 },
];

app.get("products", (req, res) => {
  res.status(200).send(products);
});

app.use((req, res) => {
  res.status(404).json("page not found");
});

//always listen at last
app.listen(3333, () => console.log("prg1 is running"));
