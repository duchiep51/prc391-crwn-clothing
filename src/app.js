const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require("./connections/mongodb-atlas");
const configRoute = require("./apis/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

configRoute(app);

// app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is up in port + ${port} 🐳`);
});
