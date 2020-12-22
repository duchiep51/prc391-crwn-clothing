const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require("./connections/mongodb-atlas");
const configRoute = require("./apis/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  exposedHeaders: ['Content-Range', 'X-Content-Range']
}

app.use(cors(corsOptions));

app.get("/*", (req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "Content-Range",
    "Content-Range": "1-2*",
    "X-Total-Count": "5",
  });
  next();
});

configRoute(app);

// app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is up in port + ${port} 🐳`);
});
