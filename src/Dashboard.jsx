import React from "react";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  
  const invitation = ()=>{
    navigate("/invitation")
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-buttons">
          <button>Create course</button>
          <button>Preview home page</button>
          <button onClick={invitation}>Invitation page </button>
          {/* <button onClick={handleInviteClick}>Inviation price calculator</button> */}
        </div>
      </header>
      <main className="dashboard-main">
        <section className="stats">
          <div className="stat-item">
            <h2>All users</h2>
            <p>1</p>
          </div>
          <div className="stat-item">
            <h2>Conversions</h2>
            <p>0%</p>
          </div>
          <div className="stat-item">
            <h2>30 days sales</h2>
            <p>0</p>
          </div>
          <div className="stat-item">
            <h2>Avg time</h2>
            <p>0 min</p>
          </div>
          <div className="stat-item">
            <h2>Courses</h2>
            <p>0</p>
          </div>
          <div className="stat-item">
            <h2>Course categories</h2>
            <p>0</p>
          </div>
        </section>
        <section className="graph">
          <h2>New signups</h2>
          <div className="graph-container">
            <p>Graph of new signups over the last 7 days</p>
          </div>
        </section>
        <section className="new-users">
          <h2>New users</h2>
          <div className="user-item">
            <p>Vansh Grover</p>
            <p>24 minutes</p>
          </div>
        </section>
        <section className="blog">
          <h2>How to sell courses blog</h2>
          <ul>
            <li>
              Blended Learning: What It Is, Why It Matters & How to Apply - 7
              days ago
            </li>
            <li>
              Join the Course Sales Bootcamp [Free Live Workshops] - 12 days ago
            </li>
            <li>
              12 Steps to Creating Awesome Live Classes in 2021 - 20 days ago
            </li>
            <li>
              Guy Kawasaki on the Future of Business in the Midst of a Pandemic
              - 22 days ago
            </li>
            <li>
              What is Educational Marketing & How to Use it to Grow with
              Examples - 23 days ago
            </li>
          </ul>
        </section>
        <section className="events-log">
          <h2>Events Log</h2>
          <div className="event-item">
            <p>Vansh</p>
            <p>Logged in</p>
            <a href="#">more info</a>
          </div>
        </section>
        <section className="trial-period">
          <h2>Trial period</h2>
          <p>30 DAYS LEFT</p>
          <button>Upgrade now!</button>
        </section>
        <section className="online-users">
          <h2>Online users (1)</h2>
          <div className="user-item">
            <p>vansh Grover</p>
            <button>contact</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
