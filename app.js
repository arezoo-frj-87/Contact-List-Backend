const express = require("express");
const app = express();
app.use(express.json());

//------------------------
const setCors = require("./middleware/security");
app.use(setCors);
const postController = require("./middleware/postController");
app.use(postController);
//------------------------
//indexRoute
const indexRoute = require("./Routes/indexRoute");
app.use("/", indexRoute);

//--cotactListRoute
const contactRoutes = require("./Routes/contactRoute");
app.use("/contacts", contactRoutes);

// //ErrorHandlong------
app.use((req, res, next) => {
  let error = new Error("contact does not found");
  error.status = 404;
  console.log(error.status);
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({ sucess: false, message: err.message });
});
//-----------------------

//------------------------
const PORT = 7070 || process.env.PORT;
app.listen(PORT, () => console.log("server is running on " + PORT + " port"));
