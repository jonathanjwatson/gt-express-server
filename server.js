const express = require("express");

const app = express();

const PORT = 8080;

// Creates a GET route
// Accepts path and a callback function
// The callback function accepts req and res.
app.get("/", (req, res) => {
  //   res.send("Hello world!");
  res.send(`<html>
                <body>
                    <h1>This is my first root route!</h1>
                </body>
            </html>`);
});

app.get("/portfolio", (req, res) => {
  res.send(`<html><body><h1>This is my portfolio</h1></body></html>`);
});

// Make this route more useful with path params
// A colon will indicate a path parameter.
app.get("/api/add/:numOne/:numTwo", (req, res) => {
  console.log(req.params);
  //   const numOne = 2;
  //   const numTwo = 2;
  const result = parseFloat(req.params.numOne) + parseFloat(req.params.numTwo);
  res.json(result);
});

const iceCreamFlavors = {
  vanilla: {
    name: "Vanilla Bean",
    price: "1.99",
  },
  chocolate: {
    name: "Chocolate Chunk",
    price: "2.49",
  },
  strawberry: {
    name: "Very Berry Strawberry",
    price: "2.99",
  },
};

app.get("/api/icecream", (req, res) => {
  res.json(iceCreamFlavors);
});

app.get("/api/icecream/:flavor", (req, res) => {
    console.log(req.params.flavor);
    console.log(iceCreamFlavors[req.params.flavor]);
    res.json(iceCreamFlavors[req.params.flavor]);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
