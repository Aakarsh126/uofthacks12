import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import { animated } from '@react-spring/web';

const profiles = [
    {
        name: 'John Doe',
        roastLevel: 'Mild Burn 🔥',
        petPeeves: 'Slow walkers',
        roastOn: ['My Profile Pic', 'My Weird Hobbies'],
        roastAlias: 'Burninator Bob',
        profilePic: 'images/funny-pic1.png',
    },
    {
        name: 'Jane Smith',
        roastLevel: 'Sassy Clapback 💅',
        petPeeves: 'People who text "K"',
        roastOn: ['My Taste in Music/Movies'],
        roastAlias: 'The Roastmaster',
        profilePic: 'images/funny-pic2.png',
    },
    // Add more profiles as needed
];

function Home() {
    const [likedProfiles, setLikedProfiles] = useState([]);
    const [rejectedProfiles, setRejectedProfiles] = useState([]);

    const onSwipe = (direction, profile) => {
        if (direction === 'right') {
            setLikedProfiles([...likedProfiles, profile]);
        } else if (direction === 'left') {
            setRejectedProfiles([...rejectedProfiles, profile]);
        }
    };

    return (
        <div className="swipe-container">
            {profiles.map((profile) => (
                <TinderCard
                    key={profile.name}
                    onSwipe={(dir) => onSwipe(dir, profile)}
                >
                    <div className="card">
                        <img src={profile.profilePic} alt={`${profile.name}'s profile`} />
                        <h3>{profile.name}</h3>
                        <p>Roast Level: {profile.roastLevel}</p>
                        <p>Pet Peeves: {profile.petPeeves}</p>
                        <p>Roast Me On: {profile.roastOn.join(', ')}</p>
                        <p>Alias: {profile.roastAlias}</p>
                    </div>
                </TinderCard>
            ))}
            <div className="results">
                <h4>Liked Profiles:</h4>
                {likedProfiles.map((profile) => (
                    <p key={profile.name}>{profile.name}</p>
                ))}
                <h4>Rejected Profiles:</h4>
                {rejectedProfiles.map((profile) => (
                    <p key={profile.name}>{profile.name}</p>
                ))}
            </div>
        </div>
    );
}

export default Home;
