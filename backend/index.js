const mongoose = require("mongoose");
const { connection } = require("./db");
const cors = require("cors");
const express = require("express")



const app = express();

const {postRoute} = require("./routes/postRoute")

app.use(cors());
require("dotenv").config();
app.use(express.json());


app.use("/post",postRoute)

const connect = async () => {
  try {
    await connection;
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log(`listening to port ${process.env.PORT}`);
});
