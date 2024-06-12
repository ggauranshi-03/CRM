import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AudienceCreation from "./pages/audienceCreation";
import CampaignCreation from "./pages/campaignCreation";
import CampaignListing from "./pages/campaignListing";

const Homepage = () => {
  return (
    <div>
      <h2>Mini CRM Application</h2>
      <nav>
        <ul>
          <li>
            <Link to="/audiences/create">Create Audience</Link>
          </li>
          <li>
            <Link to="/campaigns/create">Create Campaign</Link>
          </li>
          <li>
            <Link to="/campaigns">Campaign Listing</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="/audiences/create" component={AudienceCreation} />
        <Route path="/campaigns/create" component={CampaignCreation} />
        <Route path="/campaigns" component={CampaignListing} />
      </Routes>
    </Router>
  );
};

export default App;
