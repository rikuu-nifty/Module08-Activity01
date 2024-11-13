import React, { useState } from 'react';
import Tab from './Tab';
import TabContent from './TabContent';
import './style.css';

const TabbedForm = () => {
    const [activeTab, setActiveTab] = useState("personal");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        studentId: "",
        program: "",
        yearLevel: "",
        gpa: "",
        hobbies: "",
        skills: "",
        notes: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.studentId) newErrors.studentId = "Student ID is required";
    
        setErrors(newErrors);
    
        // Check which field is missing and show an alert with a specific message
        if (!formData.firstName) {
            alert("First Name is required.");
            setActiveTab("personal");  // Go back to the Personal tab
            return false;
        }
        if (!formData.email) {
            alert("Email is required.");
            setActiveTab("contact");  // Go back to the Contact tab
            return false;
        }
        if (!formData.studentId) {
            alert("Student ID is required.");
            setActiveTab("academic");  // Go back to the Academic tab
            return false;
        }
    
        return true;
    };
    
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const submittedData = JSON.stringify(formData, null, 2);
        alert("Submitted Data: \n" + submittedData);
        console.log(submittedData);
    };

    const handleNext = () => {
        // Navigation logic for "Next" button
        if (activeTab === "personal") setActiveTab("contact");
        if (activeTab === "contact") setActiveTab("academic");
        if (activeTab === "academic") setActiveTab("additional"); // Move to "Additional Details" tab
    };

    const handlePrevious = () => {
        // Navigation logic for "Previous" button
        if (activeTab === "additional") setActiveTab("academic");
        if (activeTab === "academic") setActiveTab("contact");
        if (activeTab === "contact") setActiveTab("personal");
    };

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <Tab name="Personal Information" isActive={activeTab === "personal"} onClick={() => setActiveTab("personal")} />
                <Tab name="Contact Information" isActive={activeTab === "contact"} onClick={() => setActiveTab("contact")} />
                <Tab name="Academic Information" isActive={activeTab === "academic"} onClick={() => setActiveTab("academic")} />
                <Tab name="Additional Details" isActive={activeTab === "additional"} onClick={() => setActiveTab("additional")} />
            </div>

            <form onSubmit={handleSubmit}>
                <TabContent
                    activeTab={activeTab}
                    formData={formData}
                    onChange={handleChange}
                    errors={errors}
                />

                <div style={{ marginTop: "20px" }}>
                    {activeTab !== "personal" && (
                        <button type="button" onClick={handlePrevious}>Previous</button>
                    )}
                    

                    {/* Show "Next" button in all tabs except "Additional Details" */}
                    {activeTab !== "additional" ? (
                        <button type="button" onClick={handleNext}>Next</button>  // "Next" moves to "Additional Details"
                    ) : (
                        // Show "Submit" button only in the "Additional Details" tab
                        <button type="submit">Submit</button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default TabbedForm;
