// import React, { useState } from "react";
// import Card from "./card"; // Import the Card component
// import "./cardstack.css"; // Import CSS styles

// const CardStack = ({ profiles }) => {
//   const [cardStack, setCardStack] = useState(profiles); // Store the stack of cards

//   const handleSwipe = (direction, profile) => {
//     // Remove the top card
//     setCardStack((prevStack) => prevStack.slice(1));
//     // Log swipe result
//     console.log(`${profile.name} was ${direction === "like" ? "liked" : "disliked"}.`);
//   };

//   return (
//     <div className="card-stack">
//       {cardStack.map((profile, index) => (
//         <Card
//           key={profile.name} // Unique key
//           profile={profile}
//           onSwipe={handleSwipe}
//           isTop={index === 0} // Only the top card is draggable
//         />
//       ))}
//     </div>
//   );
// };

// export default CardStack;

import React, { useState } from "react";
import Card from "./card"; // Import the Card component
import "./cardstack.css"; // Import CSS styles

const CardStack = ({ profiles }) => {
  const [cardStack, setCardStack] = useState(profiles); // Store the stack of cards
  const [swipeFeedback, setSwipeFeedback] = useState(""); // Store swipe feedback

  const handleSwipe = (direction, profile) => {
    // Remove the top card

    setSwipeFeedback(`${profile.name} was ${direction === "like" ? "liked" : "disliked"}.`);
    // setCardStack((prevStack) => prevStack.slice(1));
    // Update swipe feedback
    // Clear the feedback after a short delay
    setTimeout(() => { setSwipeFeedback(""); setCardStack((prevStack) => prevStack.slice(0)); }, 2000);
  };

  return (
    <div className="card-stack">
      {cardStack.map((profile, index) => (
        <Card
          key={profile.name} // Unique key
          profile={profile}
          onSwipe={handleSwipe}
          isTop={index === 0} // Only the top card is draggable
        />
      ))}
      {swipeFeedback && <div className="swipe-feedback">{swipeFeedback}</div>}
    </div>
  );
};

export default CardStack;

