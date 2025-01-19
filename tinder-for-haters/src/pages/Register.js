import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Importing CSS

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [occupation, setOccupation] = useState('');
    const [school, setSchool] = useState('');
    const [relationshipStatus, setRelationshipStatus] = useState('');
    const [roastPreference, setRoastPreference] = useState('Medium');
    const [roastAbout, setRoastAbout] = useState('');
    const navigate = useNavigate();

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_cloudinary_preset'); // Replace with your Cloudinary preset
        try {
            const res = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData); // Replace with your Cloudinary URL
            setProfilePicture(res.data.secure_url);
        } catch (error) {
            alert('Failed to upload image');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const profile = { 
                fullName, 
                age, 
                profilePicture, 
                occupation, 
                school, 
                relationshipStatus, 
                roastPreference, 
                roastAbout 
            };
            const response = await axios.post('http://100.65.15.242:3738/api/users/register', { email, password, profile });
            alert('Registration Successful!');
            navigate('/');
        } catch (error) {
            alert(error.response.data.message || 'Registration failed');
        }
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleRegister} className="register-form">
                <input
                    className="register-input"
                    type="email"
                    placeholder="Your email (we promise not to spam!)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="register-input"
                    type="password"
                    placeholder="Password (make it stronger than your excuses!)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className="register-input"
                    type="text"
                    placeholder="Full Name (or your alter ego)"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    className="register-input"
                    type="number"
                    placeholder="Age (or how many times you've been told you look like a baby)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    className="register-input"
                    type="text"
                    placeholder="Occupation (what do you do when you're not busy being a legend?)"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
                <input
                    className="register-input"
                    type="text"
                    placeholder="School (where you learned to be fabulous... or just learned to nap)"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                />
                <select
                    className="register-select"
                    value={relationshipStatus}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                >
                    <option value="">Select Relationship Status</option>
                    <option value="Single">Single(In a Relationship with my couch and Netflix))</option>
                    <option value="In a Relationship">In a Relationship (with pizza)</option>
                    <option value="It's Complicated">It's Complicated (like your last date)</option>
                </select>
                <select
                    className="register-select"
                    value={roastPreference}
                    onChange={(e) => setRoastPreference(e.target.value)}
                >
                    <option value="Light">Mild Burn 🔥</option>
                    <option value="Medium">Smore level</option>
                    <option value="Extra Spicy">Nuclear Meltdown ☢️</option>
                </select>
                <textarea
                    className="register-textarea"
                    placeholder="What should we roast you about?(forgot that you didn't have an opinion"
                    value={roastAbout}
                    onChange={(e) => setRoastAbout(e.target.value)}
                ></textarea>
                <input
                    className="register-file-input"
                    type="file"
                    onChange={handleFileUpload}
                />
                {profilePicture && <img src={profilePicture} alt="Profile Preview" className="profile-preview" />}
                <button type="submit" className="register-button">Register</button>
            </form>
        </div>
    );
};

export default Register;    