const CommunicationsLog = require("../models/CommunicationsLog");
const Customer = require("../models/Customer");

exports.createCampaign = async (req, res) => {
  try {
    const { audienceCriteria, messageContent } = req.body;
    const audience = await Customer.find(audienceCriteria);
    const logs = audience.map((customer) => ({
      customer_id: customer._id,
      audience_criteria: JSON.stringify(audienceCriteria),
      message_content: messageContent,
      delivery_status: "PENDING",
      delivery_date: new Date(),
    }));
    await CommunicationsLog.insertMany(logs);
    res
      .status(201)
      .send({ message: "Campaign created and messages sent", logs });
  } catch (error) {
    res.status(400).send(error);
  }
};
