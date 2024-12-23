const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;

// app.use((req, res, next) => {
//   fs.appendFile("log.txt", `${Date.now()}:${req.method}}`),
//     (err, data) => {
//       next();
//     };
// });

app.get("/", (req, res) => {
    
  res.send({
    users: [
      {
        id: 1,
        name: "Amit Sharma",
        email: "amit.sharma@example.com",
        role: "admin",
      },
      {
        id: 2,
        name: "Riya Kapoor",
        email: "riya.kapoor@example.com",
        role: "user",
      },
      {
        id: 3,
        name: "Sanjay Gupta",
        email: "sanjay.gupta@example.com",
        role: "user",
      },
    ],
    products: [
      {
        id: 101,
        name: "Smartphone",
        price: 29999,
        inStock: true,
      },
      {
        id: 102,
        name: "Laptop",
        price: 69999,
        inStock: false,
      },
      {
        id: 103,
        name: "Headphones",
        price: 2499,
        inStock: true,
      },
    ],
    orders: [
      {
        orderId: "ORD001",
        userId: 2,
        productId: 101,
        quantity: 1,
        orderDate: "2024-12-23",
      },
      {
        orderId: "ORD002",
        userId: 3,
        productId: 103,
        quantity: 2,
        orderDate: "2024-12-22",
      },
    ],
  });
});

app.get('/user',(req,res)=>{
    res.setHeader("my-Name","cheepa")
    return res.json({msg:"meena kl"})
})


app.listen(PORT, (req, res) => {
  console.log("server is at ", PORT);
});
