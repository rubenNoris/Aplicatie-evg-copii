const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pentru parsarea body-ului JSON
app.use(bodyParser.json());

// Conectare la MongoDB
mongoose.connect("mongodb://localhost:27017/mongodbVSCodePlaygroundDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema și model pentru colecția 'sales'
const saleSchema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  date: Date,
});

const Sale = mongoose.model("Sale", saleSchema);

// API pentru adăugarea unui sale nou
app.post("/sales", async (req, res) => {
  const sale = new Sale(req.body);
  try {
    await sale.save();
    res.status(201).send(sale);
  } catch (error) {
    res.status(400).send(error);
  }
});

// API pentru a prelua toate sales
app.get("/sales", async (req, res) => {
  try {
    const sales = await Sale.find({});
    res.status(200).send(sales);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
