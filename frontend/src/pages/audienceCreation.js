import React, { useState } from "react";

const AudienceCreation = () => {
  const [criteria, setCriteria] = useState({});
  const [audienceSize, setAudienceSize] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handlePreview = async () => {
    try {
      const response = await fetch("/api/audiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ criteria }),
      });
      const data = await response.json();
      setAudienceSize(data.size);
    } catch (error) {
      console.error("Error fetching audience:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/audiences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ criteria }),
      });
      alert("Audience created successfully!");
    } catch (error) {
      console.error("Error creating audience:", error);
    }
  };

  return (
    <div>
      <h2>Create Audience</h2>
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
        <button type="button" onClick={handlePreview}>
          Preview Audience Size
        </button>
        {audienceSize !== null && <p>Audience Size: {audienceSize}</p>}
        <button type="submit">Create Audience</button>
      </form>
    </div>
  );
};

export default AudienceCreation;
