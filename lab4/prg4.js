import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/products", (req, res) => {
  res.json(products);
}); 



app.listen(5555, () => console.log("prg4 is running"));