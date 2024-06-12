import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>CRM Application</h1>
      <nav>
        <ul>
          <li>
            <Link to="/create-audience">Create Audience</Link>
          </li>
          <li>
            <Link to="/create-campaign">Create Campaign</Link>
          </li>
          <li>
            <Link to="/campaigns">View Campaigns</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
