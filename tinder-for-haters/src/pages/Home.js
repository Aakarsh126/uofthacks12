import React from 'react';
import CardStack from '../components/cardstack'; // Import the CardStack component

const App = () => {
  const profiles = [
    {
      name: 'John Doe',
      age: 30,
      roastLevel: 'Mild Burn 🔥',
      petPeeves: 'Slow walkers',
      roastOn: ['My Profile Pic', 'My Weird Hobbies'],
      roastAlias: 'Burninator Bob',
      image: 'images/funny-pic1.png',
    },
    {
      name: 'Jane Smith',
      age: 28,
      roastLevel: 'Sassy Clapback 💅',
      petPeeves: 'People who text "K"',
      roastOn: ['My Taste in Music/Movies'],
      roastAlias: 'The Roastmaster',
      image: 'images/funny-pic2.png',
    },
  ];

  return <CardStack profiles={profiles} />;
};

export default App;
