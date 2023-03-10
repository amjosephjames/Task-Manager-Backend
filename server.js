const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4232;

const connectDB = require("./utils/db");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

app.use("/api/task", require("./router/taskRouter"));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "welcome to my task api" });
});

// const start = async () => {
//   const lifeURI =
//     "mongodb+srv://joseph4231:Barca4231@cluster0.zrkxc.mongodb.net/taskManagerDb?retryWrites=true&w=majority";
//   try {
//     await connectDB(lifeURI);
//     console.log("database connected");
//     app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
connectDB();

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`));
