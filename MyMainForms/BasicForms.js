import React, { useState } from 'react';

const BasicForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
                placeholder="Enter Your Name"
            />
            <button type="submit">Submit</button>
            {name && <p>Your name is: {name}</p>}
        </form>
    );
}

export default BasicForm;
