import React from "react";
import { useNavigate } from "react-router-dom";

const Invitation = () => {
const navigate = useNavigate()
    const pricepage = ()=>{
        navigate('/invite')
    }
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      background: "#f7f7f7",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      background: "#ffffff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "80%",
      maxWidth: "500px",
    },
    heading: {
      color: "#4A90E2",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#555555",
    },
    eventDetails: {
      margin: "20px 0",
    },
    eventHeading: {
      color: "#4A90E2",
      marginBottom: "10px",
    },
    eventParagraph: {
      color: "#777777",
    },
    note: {
      color: "#FF6F61",
      marginTop: "20px",
    },
    button: {
      backgroundColor: "#4A90E2",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
    },
    buttonHover: {
      backgroundColor: "#357ABD",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>You're Invited!</h1>
        <p style={styles.paragraph}>
          Join us for an unforgettable event filled with joy and memories!
        </p>
        <div style={styles.eventDetails}>
          <h2 style={styles.eventHeading}>Event Details</h2>
          <p style={styles.eventParagraph}>Date: December 12, 2024</p>
          <p style={styles.eventParagraph}>Time: 6:00 PM</p>
          <p style={styles.eventParagraph}>Venue: Grand Ballroom, XYZ Hotel</p>
        </div>
        <p style={styles.note}>Please click below to get the price details</p>
        <button style={styles.button} onClick={pricepage}>click here</button>
      </div>
    </div>
  );
};

export default Invitation;
