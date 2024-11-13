import React from 'react';

const Tab = ({ name, isActive, onClick }) => {
    const tabStyle = {
        padding: '12px 30px',
        cursor: 'pointer',
        backgroundColor: isActive ? '#4CAF50' : '#f4f4f4',
        color: isActive ? '#fff' : '#555',
        border: '1px solid #ddd',
        borderRadius: '30px',  // Rounded corners for modern look
        marginRight: '12px',  // Slightly larger gap between tabs
        fontWeight: 'bold',
        fontSize: '16px',  // Improved font size for readability
        transition: 'all 0.3s ease',  // Smooth transition for background and box-shadow
        boxShadow: isActive ? '0 4px 8px rgba(0, 123, 255, 0.2)' : 'none',
        display: 'inline-block',  // Makes sure tabs stay inline
        textAlign: 'center',
    };

    // Hover effect for better interaction
    const hoverStyle = {
        backgroundColor: isActive ? '#45a049' : '#e7e7e7',
        transform: 'scale(1.05)',
        boxShadow: isActive ? '0 6px 12px rgba(0, 123, 255, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div 
            style={{ ...tabStyle, ...hoverStyle }} 
            onClick={onClick}
            onMouseEnter={() => hoverStyle.backgroundColor = isActive ? '#45a049' : '#e0e0e0'}
            onMouseLeave={() => hoverStyle.backgroundColor = isActive ? '#4CAF50' : '#f4f4f4'}
        >
            {name}
        </div>
    );
};

export default Tab;
