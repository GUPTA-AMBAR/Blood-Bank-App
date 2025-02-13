const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const connectDtatabase = require('./db/connectDataBase.js');
const path = require("path");
dotenv.config();

const app = express();

// Serve static frontend files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Middleware for logging requests
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    credentials: true,
}));

connectDtatabase();

const PORT = process.env.PORT || 8080;

app.use('/api/v1/auth', require("./routes/authRoutes.js"));
app.use('/api/v1/inventory', require("./routes/inventoryRoutes.js"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes.js"));
app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.DEV_MODE} on port ${process.env.PORT}`
        .bgBlue.white
    );

})