import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
            const response = await axios.post('http://localhost:3738/api/users/register', { email, password, profile });
            alert('Registration Successful!');
            navigate('/');
        } catch (error) {
            alert(error.response.data.message || 'Registration failed');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Occupation"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                />
                <select
                    value={relationshipStatus}
                    onChange={(e) => setRelationshipStatus(e.target.value)}
                >
                    <option value="">Select Relationship Status</option>
                    <option value="Single">Single</option>
                    <option value="In a Relationship">In a Relationship</option>
                    <option value="It's Complicated">It's Complicated</option>
                </select>
                <select
                    value={roastPreference}
                    onChange={(e) => setRoastPreference(e.target.value)}
                >
                    <option value="Light">Light</option>
                    <option value="Medium">Medium</option>
                    <option value="Extra Spicy">Extra Spicy</option>
                </select>
                <textarea
                    placeholder="What should we roast you about?"
                    value={roastAbout}
                    onChange={(e) => setRoastAbout(e.target.value)}
                ></textarea>
                <input
                    type="file"
                    onChange={handleFileUpload}
                />
                {profilePicture && <img src={profilePicture} alt="Profile Preview" width="100" />}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
