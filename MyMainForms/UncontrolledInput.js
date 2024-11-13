import React, { useRef } from 'react';

const UncontrolledInput = () => {
    const phoneRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Phone Number: ${phoneRef.current.value}`);
        console.log(`Phone Number: ${phoneRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <label>Phone Number:</label>
            <input
                type="text"
                ref={phoneRef}
                placeholder="Enter Your Phone Number"
                style={{ marginTop: '4px' }}
            />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
    </form>
    );
};

export default UncontrolledInput;
