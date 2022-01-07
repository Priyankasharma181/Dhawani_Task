const express = require("express");
const app = express();
const router = require("./routes/routes");
const body_parser = require("body-parser")
Port = 5000
app.use(express.json());
app.use("/", router);


app.listen(Port, () => {
  console.log(`SERVER IS RUNNING AT PORT ${Port}`);
});
