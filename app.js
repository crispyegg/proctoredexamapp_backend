const express = require("express");
require("./dbconfig/dbconfig");

const app = express();
const port = 5000;
const cors = require("cors");
const attemptRouting = require("./routing/attemptRoutes");
const logRouting = require("./routing/logRoutes");

app.use(express.json());
app.use(cors());



app.use('/', attemptRouting);

app.use('/', logRouting)





app.listen(port, () => {
  console.log(`server is started at port ${port}`);
});
