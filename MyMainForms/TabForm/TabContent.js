import React from "react";

const TabContent = ({ activeTab, formData, onChange, errors }) => {
    return (
        <div style={{ padding: "20px" }}>
            {activeTab === "personal" && (
                <div>
                    <h2>Personal Information</h2>
                    <label>
                        First Name:
                        <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => onChange("firstName", e.target.value)}
                            placeholder="Enter Your First Name"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Last Name:
                        <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => onChange("lastName", e.target.value)}
                            placeholder="Enter Your Last Name"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            value={formData.dob}
                            onChange={(e) => onChange("dob", e.target.value)}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Gender:
                        <select
                            value={formData.gender}
                            onChange={(e) => onChange("gender", e.target.value)}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>
            )}

            {activeTab === "contact" && (
                <div>
                    <h2>Contact Information</h2>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => onChange("email", e.target.value)}
                            placeholder="Enter Your Email"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Phone Number:
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => onChange("phone", e.target.value)}
                            placeholder="Enter Your Phone Number"
                        />
                    </label>
                    <br />

                    <label>
                        Address:
                        <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => onChange("address", e.target.value)}
                            placeholder="Enter Your Address"
                        />
                    </label>
                    <br />

                    <label>
                        City:
                        <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => onChange("city", e.target.value)}
                            placeholder="Enter Your City"
                        />
                    </label>
                    <br />
                </div>
            )}

            {activeTab === "academic" && (
                <div>
                    <h2>Academic Information</h2>
                    <label>
                        Student ID:
                        <input
                            type="text"
                            value={formData.studentId}
                            onChange={(e) => onChange("studentId", e.target.value)}
                            placeholder="Enter Your Student ID"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Program:
                        <input
                            type="text"
                            value={formData.program}
                            onChange={(e) => onChange("program", e.target.value)}
                            placeholder="Enter Your Program"
                        />
                    </label>
                    <br />

                    <label>
                        Year Level:
                        <input
                            type="number"
                            value={formData.yearLevel}
                            onChange={(e) => onChange("yearLevel", e.target.value)}
                            placeholder="Enter Your Year Level"
                        />
                    </label>
                    <br />

                    <label>
                        GPA:
                        <input
                            type="number"
                            value={formData.gpa}
                            onChange={(e) => onChange("gpa", e.target.value)}
                            placeholder="Enter Your GPA"
                            step="0.01"
                        />
                    </label>
                    <br />
                </div>
            )}

            {activeTab === "additional" && (
                <div>
                    <h2>Additional Details</h2>
                    <label>
                        Hobbies:
                        <input
                            type="text"
                            value={formData.hobbies}
                            onChange={(e) => onChange("hobbies", e.target.value)}
                            placeholder="Enter Your Hobbies"
                        />
                    </label>
                    <br />

                    <label>
                        Skills:
                        <input
                            type="text"
                            value={formData.skills}
                            onChange={(e) => onChange("skills", e.target.value)}
                            placeholder="Enter Your Skills"
                        />
                    </label>
                    <br />

                    <label>
                        Other Notes:
                        <textarea
                            value={formData.notes}
                            onChange={(e) => onChange("notes", e.target.value)}
                            placeholder="Enter Any Additional Notes"
                        />
                    </label>
                    <br />
                </div>
            )}
        </div>
    );
};

export default TabContent;
