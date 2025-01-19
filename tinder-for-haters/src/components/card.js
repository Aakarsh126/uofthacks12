import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Card = ({ profile, onSwipe }) => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-20, 20]);

    //   const handleDragEnd = (event, info) => {
    //     if (info.point.x > 150) {
    //       onSwipe("like", profile);
    //     } else if (info.point.x < -150) {
    //       onSwipe("dislike", profile);
    //     }
    //   };


    const handleDragEnd = (event, info) => {
        if (info.offset.x > 150) {
            console.log("Swiped Right: Like");
            onSwipe("like", profile);
        } else if (info.offset.x < -150) {
            console.log("Swiped Left: Dislike");
            onSwipe("dislike", profile);
        } else {
            console.log("Not enough drag distance");
        }
    };


    return (
        <motion.div
            className="card"
            drag="x"
            style={{
                x: motionValue,
                rotate: rotateValue,
            }}
            onDragEnd={handleDragEnd}
        >
            <div className="card-content">
                <h2>{profile.name}, {profile.age}</h2>
                <p><strong>Roast-Level Preference:</strong> {profile.roastLevel}</p>
                <p><strong>Pet Peeves:</strong> {profile.petPeeves}</p>
                <p><strong>Roast Me On:</strong> {profile.roastOn.join(', ')}</p>
                <p><strong>Roast Alias:</strong> {profile.roastAlias}</p>
                <img src={profile.image} alt="Profile" className="profile-pic" />
            </div>
        </motion.div>
    );
};

export default Card;


