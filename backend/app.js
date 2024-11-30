require('dotenv').config({ path: '../.env' });
const express=require("express");
const app=express();
const fileRoutes=require("./routes/fileRoutes");
const connectDB=require("./config/db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/file",fileRoutes);
connectDB();

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("Listening on port", process.env.PORT || 5000);
  }
});
