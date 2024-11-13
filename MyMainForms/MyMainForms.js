import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import BasicForm from './BasicForms';
import ControlledInput from './ControlledInput';
import UncontrolledInput from './UncontrolledInput';
import TabbedForm from './TabForm/TabbedForm';


const MyMainForms = () => {
    return (
        <div>
            <h1>React Forms App</h1>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <Link to="basic-form" style={linkStyle}>Registration Form</Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="controlled-input" style={linkStyle}>Controlled Input</Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="uncontrolled-input" style={linkStyle}>Uncontrolled Input</Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="tabbed-form" style={linkStyle}>Tabbed Form</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="basic-form" element={<BasicForm />} />
                <Route path="controlled-input" element={<ControlledInput />} />
                <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                <Route path="tabbed-form" element={<TabbedForm />} />
            </Routes>
        </div>
    );
};

// CSS-in-JS styles for navigation
const navStyle = {
    backgroundColor: '#4CAF50', // Green background
    padding: '10px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-around',
};

const liStyle = {
    display: 'inline-block',
};

const linkStyle = {
    color: '#fff', // White text color
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
};

linkStyle[':hover'] = {
    backgroundColor: '#45a049', // Darker green on hover
    color: '#fff',
};

export default MyMainForms;
