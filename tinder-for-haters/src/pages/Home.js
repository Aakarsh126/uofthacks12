import React from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

const Card = ({ profile }) => {
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
  const animControls = useAnimation();

  return (
    <motion.div
      className="card"
      drag="x"
      style={{ x: motionValue, rotate: rotateValue, opacity: opacityValue }}
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={(event, info) => {
        if (Math.abs(info.point.x) <= 150) {
          animControls.start({ x: 0 });
        } else {
          animControls.start({ x: info.point.x < 0 ? -200 : 200 });
        }
      }}
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

const App = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 30,
      roastLevel: 'Mild Burn 🔥',
      petPeeves: 'Slow walkers',
      roastOn: ['My Profile Pic', 'My Weird Hobbies'],
      roastAlias: 'Burninator Bob',
      image: 'images/funny-pic2.png',
    },
    // Add more profiles as needed
  ];

  return (
    <div className="card-stack">
      {profiles.map((profile, index) => (
        <Card key={index} profile={profile} />
      ))}
    </div>
  );
};

export default App;