import React, { useState } from "react";
import RightArrowButton from './RightArrowButton'; // Assuming the RightArrowButton component is in the same directory.

const Deck = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "welcomefield") {
      window.location.href = "https://pitchdeck.hypermatic.com/slides/lh32ny6302566/?token=ckdsUjlFMmhHald2QGI=";
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

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
          className="bg-white px-4 py-2"
        >
          <RightArrowButton />
        </button>
      </form>
    </div>
  );
};

export default Deck;