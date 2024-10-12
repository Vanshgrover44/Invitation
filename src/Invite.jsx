import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link, useNavigate } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const Invite = () => {
  const [invites, setInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, Settotal] = useState(0);

  const pieData = {
    labels: ["No. of Invites", "Duration of Event (hours)", "Price (₹)"],
    datasets: [
      {
        label: "Event Data Breakdown",
        data: [invites, duration, price],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
        hoverOffset: 3,
      },
    ],
  };

  const totalvalue = () => {
    const totalval = invites * price;
    Settotal(totalval);
  };

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };

  return (
    <>
      <header>
        <button onClick={navigation}>Go To dashboard Section</button>
      </header>

      <section>
        <div className="event-pie-chart">
          <h2>Event price calculator</h2>

          <div className="input-group">
            <label>No. of Invites :</label>
            <input
              type="number"
              value={invites}
              onChange={(e) => setInvites(Number(e.target.value))}
              placeholder="Enter no. of invites"
            />
            <input
              type="range"
              min="1"
              max="100000"
              step="1"
              className="range"
              value={invites}
              onChange={(e) => setInvites(Number(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label>Duration of Event (Hours):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              placeholder="Enter event duration in hours"
            />
            <input
              type="range"
              min="1"
              max="1000"
              step="0.1"
              className="range"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Price (₹):</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Enter price in ₹"
            />
            <input
              type="range"
              min="20"
              max="1000"
              step="5"
              className="range"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <button
              onClick={totalvalue}
              className="Calculate-btn"
              type="button"
            >
              calculate
            </button>
            <br />
            <br />
            <label>Total Amount (₹) As Per Invitation: {total}</label>
          </div>

          <div className="chart-container">
            <Pie data={pieData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Invite;
