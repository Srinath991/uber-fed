import React, { useEffect } from 'react';
import { useNavigate } from 'react-router'; 

const CaptainProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/captain/login');
        }
    }, [token, navigate]); // Dependencies ensure this runs when token or navigate changes.

    return (
        <div>
            {token && children} {/* Render children only if token exists */}
        </div>
    );
};

export default CaptainProtectedWrapper;
