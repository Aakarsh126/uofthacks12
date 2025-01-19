import React from 'react';
import CardStack from '../components/cardstack'; // Import the CardStack component

const App = () => {
  const profiles = [
    {
      name: 'Arnav Jhajharia',
      age: 18,
      roastLevel: 'Mild Burn 🔥',
      petPeeves: 'Slow walkers',
      roastOn: ['My Robotics Skill', 'My Weird Hobbies'],
      image: 'images/funny-pic1.png',
    },
    {
      name: 'Aditya Dutta',
      age: 19,
      roastLevel: 'Nuclear Meltdown 💅',
      petPeeves: 'People who text "K"',
      roastOn: ['My Taste in Music and Movies'],
      image: 'images/funny-pic2.png',
    },
  ];

  return <CardStack profiles={profiles} />;
};

export default App;
