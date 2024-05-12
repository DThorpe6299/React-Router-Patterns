import React from "react";
import { useParams, Navigate } from "react-router-dom";

const Color = ({ colorsList }) => {
    const {color} = useParams();
    const selectedColor = colorsList.find(c => c.toLowerCase() === color.toLowerCase())
    if (!selectedColor) {
        return <Navigate to="/colors" />;
    }
    return (
        <div style={{ backgroundColor: selectedColor, padding: '200px', margin: '20px', color: 'white' }}>
            <h1>This is the {selectedColor} page!!</h1>
        </div>
    );
};

export default Color;
