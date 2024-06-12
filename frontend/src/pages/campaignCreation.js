import React, { useState } from "react";

const CampaignCreation = () => {
  const [audienceCriteria, setAudienceCriteria] = useState({});
  const [messageContent, setMessageContent] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAudienceCriteria({ ...audienceCriteria, [name]: value });
  };

  const handleMessageChange = (e) => {
    setMessageContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ audienceCriteria, messageContent }),
      });
      alert("Campaign created successfully!");
    } catch (error) {
      console.error("Error creating campaign:", error);
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Total Spends:
          <input
            type="number"
            name="total_spends"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Visit Count:
          <input
            type="number"
            name="visit_count"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message Content:
          <textarea
            name="message_content"
            onChange={handleMessageChange}
          ></textarea>
        </label>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CampaignCreation;
