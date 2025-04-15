// import express from 'express';
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";


// const app = express();

// app.use(cors());
// app.use(express.json());

// dotenv.config();
// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// try {
//   mongoose.connect(URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//   });
//   console.log("Connected to mongoDB");
// } catch (error) {
//   console.log("Error: ", error);
// }

// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// })



// import express from 'express';
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// dotenv.config(); 

// const app = express();
// const PORT = process.env.PORT || 4005;
// const URI = process.env.MongoDBURI;

// app.use(cors());
// app.use(express.json());

// mongoose.connect(URI)
//   .then(() => console.log("Connected to mongoDB"))
//   .catch((error) => console.log("MongoDB connection error:", error));

// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });




import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

// 👉 Load environment variables from /config/.env
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(cors());
app.use(express.json());

mongoose.connect(URI)
  .then(() => console.log("Connected to mongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
