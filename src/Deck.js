import React, { useState } from "react";

const Deck = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "Fieldtrip") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 px-3 py-2 mb-4 rounded-md"
            style={{ borderColor: "rgb(156, 163, 175)" }}
          />
          <button
            type="Submit"
            className="bg-white px-4 py-2 text-2xl"
            style={{ color: "rgb(156, 163, 175)" }}
          >
            ➡️
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <iframe
        title="Figma Prototype"
        width="80%"
        height="80%"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNKBZJKfo6jcR1WEzqE58S2%2FField-Pitch-Deck-(Embed)%3Fpage-id%3D0%253A1%26node-id%3D422-181%26viewport%3D-337%252C3896%252C0.4%26scaling%3Dcontain"
        frameBorder="0"
        allowFullScreen
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
        }}
      ></iframe>
    </div>
  );
};

export default Deck;