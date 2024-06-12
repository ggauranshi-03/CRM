const API_BASE_URL = "http://localhost:3000/api";

export const createAudience = async (audience) => {
  try {
    const response = await fetch(`${API_BASE_URL}/audiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(audience),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating audience", error);
    throw error;
  }
};

export const createCampaign = async (campaign) => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(campaign),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating campaign", error);
    throw error;
  }
};

export const getCampaigns = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching campaigns", error);
    throw error;
  }
};

export const getAudienceSize = async (filters) => {
  try {
    const response = await fetch(`${API_BASE_URL}/audiences/size`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filters),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch audience size");
    }

    const data = await response.json();
    return data.size;
  } catch (error) {
    console.error("Error fetching audience size", error);
    throw error;
  }
};
