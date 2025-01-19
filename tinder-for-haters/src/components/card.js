import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
// import "./Card.css"; // Import CSS styles for cards

const Card = ({ profile, onSwipe, isTop }) => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-20, 20]);

  const handleDragEnd = (event, info) => {
    if (info.point.x > 150) {
      onSwipe("like", profile); // Swiped right
    } else if (info.point.x < -150) {
      onSwipe("dislike", profile); // Swiped left
    }
  };

  return (
    <motion.div
      className="card"
      drag={isTop ? "x" : false} // Only allow dragging if it's the top card
      style={{
        x: motionValue,
        rotate: rotateValue,
        zIndex: isTop ? 1 : 0, // Ensure the top card is always on top
        opacity: isTop ? 1 : 0.9, // Slight opacity for cards underneath
      }}
      onDragEnd={isTop ? handleDragEnd : undefined}
    >
      <div className="card-content">
        <h2>
          {profile.name}, {profile.age}
        </h2>
        <p>
          <strong>Roast-Level Preference:</strong> {profile.roastLevel}
        </p>
        <p>
          <strong>Pet Peeves:</strong> {profile.petPeeves}
        </p>
        <p>
          <strong>Roast Me On:</strong> {profile.roastOn.join(", ")}
        </p>
        <p>
          <strong>Roast Alias:</strong> {profile.roastAlias}
        </p>
        <img src={profile.image} alt="Profile" className="profile-pic" />
      </div>
    </motion.div>
  );
};

export default Card;
