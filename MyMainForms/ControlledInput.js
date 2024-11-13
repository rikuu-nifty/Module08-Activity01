import React, {useState} from 'react';

const ControlledInput = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
        console.log("Current Email:", e.target.value);
    }

    return(
        <div>
         <p> Your Email is: {email}</p>
        <input 
        type="email"
        value = {email}
        onChange={handleChange}
        placeholder="Enter Your Email"
        />    
        </div>
    );
};


export default ControlledInput;