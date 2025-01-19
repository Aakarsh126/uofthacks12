import React, { useState } from 'react';
import Card from './card'; // Import the Card component

const CardStack = ({ profiles }) => {
  const [swipeResult, setSwipeResult] = useState("");

  const handleSwipe = (direction, profile) => {
    setSwipeResult(`${profile.name} was ${direction === "like" ? "liked" : "disliked"}.`);
  };

  return (
    <div className="card-stack">
      {profiles.map((profile, index) => (
        <Card key={index} profile={profile} onSwipe={handleSwipe} />
      ))}
      {swipeResult && <div className="swipe-feedback">{swipeResult}</div>}
    </div>
  );
};

export default CardStack;
