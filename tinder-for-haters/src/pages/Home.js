import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';

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

const Card = ({ image, color }) => {
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
    const opacityValue = useTransform(motionValue, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);
    const animControls = useAnimation();

    const style = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: color,
        boxShadow: '5px 10px 18px #888888',
        borderRadius: 10,
        height: 300,
    };

    return (
        <motion.div
            className="App"
            drag="x"
            style={{ x: motionValue, rotate: rotateValue, opacity: opacityValue, ...style }}
            dragConstraints={{ left: -1000, right: 1000 }}
            onDragEnd={(event, info) => {
                if (Math.abs(info.point.x) <= 150) {
                    animControls.start({ x: 0 });
                } else {
                    animControls.start({ x: info.point.x < 0 ? -200 : 200 });
                }
            }}
        />
    );
};

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
                <Card key={profile.name} image={profile.profilePic} color="#55ccff" />
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
