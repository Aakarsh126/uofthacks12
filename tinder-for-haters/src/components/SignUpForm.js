import React, { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [roastInfo, setRoastInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && roastInfo) {
            onSubmit({ username, roastInfo });
            setUsername('');
            setRoastInfo('');
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up to Get Roasted</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label>What should we roast you for?</label>
                    <textarea
                        value={roastInfo}
                        onChange={(e) => setRoastInfo(e.target.value)}
                        placeholder="e.g., I listen to Nickelback unironically"
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
