import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

function EnterYourName() {
  const telegramUsername = 'codecraftiness'; 
  const message = encodeURIComponent('Hello, I have a question');
  const telegramLink = `https://t.me/${telegramUsername}?text=${message}`;

  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate(`/room/${input}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "2px solid #ccc",
          outline: "none",
          fontSize: "16px",
          marginRight: "10px",
          width: "200px",
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter Your Name.."
      />
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={submitHandler}
      >
        Join
      </button>

      <h2 style={{ marginTop: "5rem" }}>
        Jion Community For Meeting Link Will{" "}
        <span style={{ color: "blue" }}> Share</span> on this Community
      </h2>
      <div>
        <button className="whatsapp-button">
          <a
            rel="noreferrer"
            href="https://wa.me/9060215620/?text=Hello%2C%20I%20have%20a%20question"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
          </a>
        </button>
        <button className="telegram-button">
          <a href={telegramLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTelegram} /> Telegram
          </a>
        </button>
      </div>
    </div>
  );
}

export default EnterYourName;
