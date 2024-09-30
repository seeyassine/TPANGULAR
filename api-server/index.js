const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let cart = [];


app.get("/api/products", (req, res) => {
  let products = [
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      prouctPrice: "2334 DH",
    },
    {
      productID: "EFRRR",
      productTitle: "IPhone 14",
      productImage: "iphone-14.png",
      category: "phone",
      prouctPrice: "11000 DH",
    },
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      prouctPrice: "2334 DH",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      prouctPrice: "8000 DH",
    },
    {
      productID: "RTVVV",
      productTitle: "IPhone 14",
      productImage: "iphone-14.png",
      category: "phone",
      prouctPrice: "11000 DH",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      prouctPrice: "8000 DH"
    },
    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      prouctPrice: "2334 DH",
    },
    {
      productID: "SQZEE",
      productTitle: "Smart TV 48 Pouce",
      productImage: "tv-samsung-48.png",
      category: "smarttv",
      prouctPrice: "8000 DH"
    },

    {
      productID: "REFAZER",
      productTitle: "Tablette SAM 12 Pouce",
      productImage: "samsung-tab-12.png",
      category: "tablet",
      prouctPrice: "2334 DH",
    },
  ];
  res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

const users = {
  "m.kouissi@uae.ac.ma": {
    firstName: "Mohamed",
    lastName: "Kouissi",
    email: "m.kouissi@uae.ac.ma",
    password: "test",
  }
};

app.post("/api/signin", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

const port = 3000;

app.listen(port, () => console.log(`API Server listening on port ${port}`));


