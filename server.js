const express = require("express");
const app = express();

// Middleware
const cors = require("cors");
const helmet = require("helmet");
app.use(cors);
app.use(helmet);
app.use(express.json());
require("dotenv").config();

// Running Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running On ${PORT}`));
