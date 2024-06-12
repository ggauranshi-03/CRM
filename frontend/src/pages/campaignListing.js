import React, { useEffect, useState } from "react";

const CampaignListing = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("/api/campaigns");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign._id}>
            <p>{campaign.message_content}</p>
            <p>Audience Size: {campaign.audience_size}</p>
            <p>Sent: {campaign.sent_count}</p>
            <p>Failed: {campaign.failed_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignListing;
