import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storageTutor, databaseTutor } from "./FireBaseConfig1"; // Ensure this path is correct
import { ref as dbRef, push, set } from "firebase/database";
import "./TutorForm.css";

const TutorForm = () => {
    const [data, setData] = useState({
        fullName: "",
        gender: "",
        address: "",
        email: "",
        cnic: "",
        contactNumber: "",
        qualification: "",
        experience: "",
        classesToTeach: "",
        subjectToTeach: "",
        currentCity: "",
        file: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleFileChange = (e) => {
        setData({ ...data, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { fullName, gender, address, email, cnic, contactNumber, qualification, experience, classesToTeach, subjectToTeach, currentCity, file } = data;
        if (fullName && gender && address && email && cnic && contactNumber && qualification && experience && classesToTeach && subjectToTeach && currentCity && file) {
            try {
                // Upload file to Firebase Storage
                const storageRef = ref(storageTutor, `tutorFiles/${encodeURIComponent(file.name)}`);
                await uploadBytes(storageRef, file);
                const fileURL = await getDownloadURL(storageRef);

                // Save data to Firebase Realtime Database
                const newTutorRef = push(dbRef(databaseTutor, 'Tutors'));
                await set(newTutorRef, {
                    fullName,
                    gender,
                    address,
                    email,
                    cnic,
                    contactNumber,
                    qualification,
                    experience,
                    classesToTeach,
                    subjectToTeach,
                    currentCity,
                    fileURL
                });

                // Clear the form
                setData({
                    fullName: "",
                    gender: "",
                    address: "",
                    email: "",
                    cnic: "",
                    contactNumber: "",
                    qualification: "",
                    experience: "",
                    classesToTeach: "",
                    subjectToTeach: "",
                    currentCity: "",
                    file: null
                });
                alert("Data stored successfully");
            } catch (error) {
                console.error('Error uploading file or saving data:', error);
                alert("An error occurred. Please try again.");
            }
        } else {
            alert("Please fill all the data");
        }
    };
    const copyNumber = () => {
        navigator.clipboard.writeText("03136064985");
        alert("Number Copied please paste it in your dialer to call us"); 
    }
    return (
        <div className="container">
            <div className="text-section">
                <h1>Are You An Experienced Tutor? <br /> Join Now <span> Expert Tutor</span></h1>
                <hr />
                <p className="Team">A Team of Highly Experienced Tutors</p>
                <p className="Success">No Registration Fee!</p>
                <button className="CallNow" onClick={copyNumber}>Call Now For More Info</button>
            </div>
            <div className="form-section">
                <h2>Tutor Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={data.fullName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        value={data.gender}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Complete Address"
                        value={data.address}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="cnic"
                        placeholder="CNIC No"
                        value={data.cnic}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={data.contactNumber}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="qualification"
                        placeholder="Qualification"
                        value={data.qualification}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="experience"
                        placeholder="Experience"
                        value={data.experience}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="classesToTeach"
                        placeholder="Classes to Teach"
                        value={data.classesToTeach}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="subjectToTeach"
                        placeholder="Subject to Teach"
                        value={data.subjectToTeach}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="currentCity"
                        placeholder="Current City"
                        value={data.currentCity}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default TutorForm;
