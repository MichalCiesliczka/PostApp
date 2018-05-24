import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <Link to="/logout">Log out</Link>
    <p>
      You are logged in. This is your dashboard.
    </p>
  </div>
);

export default Dashboard;
