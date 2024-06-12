const Customer = require("../models/Customer");

exports.createAudience = async (req, res) => {
  try {
    const criteria = req.body.criteria;
    const audience = await Customer.find(criteria);
    res.status(200).send({ size: audience.length, audience });
  } catch (error) {
    res.status(400).send(error);
  }
};
