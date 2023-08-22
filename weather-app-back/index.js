const express = require("express");
const app = express();
const PORT = 5000;
const taskRoutes = require("./routes/weatherRoutes");
// const mongoose = require("mongoose");
const cors = require('cors')

// mongoose
//   .connect(
//     "mongodb+srv://Ofeksegal:Ofeksegal15@cluster0.1tityly.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Successfully connected to mongodb!"))
//   .catch((err) => console.log(err.message));

app.use(cors())

app.get("/", (req, res) => {
  res.json({ name: "or" });
});

app.use(express.json());
app.use("/weather", taskRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});