const express = require("express");
const bodyParser = require("body-parser");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const audienceRoutes = require("./routes/audienceRoutes");
const campaignRoutes = require("./routes/campaignRoutes");
const db = require("./db");

const app = express();

app.use(bodyParser.json());
app.use("/api", customerRoutes);
app.use("/api", orderRoutes);
app.use("/api", audienceRoutes);
app.use("/api", campaignRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
