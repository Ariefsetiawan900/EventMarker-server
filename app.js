const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv =require("dotenv")
const PORT = 4006
const app = express()
const cors = require('cors')
const itemRouter=require("./router/Item")

dotenv.config();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb is Connected!");
  })
  .catch((err) => console.log(err));

  mongoose.set("useFindAndModify", false);

app.use("/api/v1", itemRouter);
// app.use("/api/pins", pinRoute);

app.listen(PORT, () => {
  console.log(`Server is Running! on ${PORT} `);
});