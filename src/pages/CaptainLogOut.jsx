import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'; // Ensure you're using 'react-router-dom'

const CaptainLogOut = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                // Make the logout request with proper headers
                const response = await axios.post(
                    `${apiUrl}/captain/logout`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Check response status
                if (response.status === 200) {
                    // Remove token from localStorage
                    localStorage.removeItem('token');
                    // Navigate to login page
                    navigate('/captain/login');
                }
            } catch (err) {
                // Optionally navigate or show an error message if the request fails
                navigate('/captain/login'); // Redirect to login even if an error occurs
            }
        };

        logout(); // Call the logout function
    }, [apiUrl, token, navigate]); // Add dependencies

    return <div></div>;
};

export default CaptainLogOut;
