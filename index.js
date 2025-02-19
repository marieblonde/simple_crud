const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bookRoute = require('./routes/bookRoute');

mongoose
  .connect("mongodb://localhost:27017/bookDB")
  .then(() => {
    const app = express();
    const PORT = 3000;

    app.use(cors());
    app.use(express.json());
    app.use('/api', bookRoute);

    app.get("/", (req, res) => {
      res.json({ message: "Hello World" });
    });
    
    app.use((req, res, next) => {
      return res.status(404).json({
        status: "NOT FOUND",
        status_code: 404,
        message: "Requested resource not found.",
        data: {
          protocol: req.protocol,
          method: req.method.toUpperCase(),
          url: req.originalUrl,
        },
      });
    });

    app.use((error, req, res, next) => {
      const status_code = error.status || 500;
      res.status(status_code).json({
        status: "ERROR",
        status_code: status_code,
        message: error.message,
        data: {
          error: error.stack,
          protocol: req.protocol,
          method: req.method.toUpperCase(),
          url: req.originalUrl,
        },
      });
    });
    
    app.listen(PORT, () => {
      console.log(`Server run on PORT ${PORT}...`);
    });
    
  })
  .catch((error) => {
    console.error("Error to connect at MongoDB :", error.message);
    process.exit(1); 
});

