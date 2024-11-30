// Importing necessary modules
import React, { useState } from "react"; 
// React: Core library for building UI components
// useState: Hook for managing component state

import API from "../api"; 
// API utility for making HTTP requests to the backend

import { useNavigate } from "react-router-dom"; 
// useNavigate: React Router hook for programmatically navigating to different routes

// CreateFile Component: A form for creating a new file
const CreateFile = () => {
  // State to store form data (file name and description)
  const [formData, setFormData] = useState({ name: "", descriptions: "" });
  const navigate = useNavigate(); // Hook for navigating to a different route after successful form submission

  // handleSubmit function to be called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action (page reload)
    
    // API POST request to create a new file with the form data
    API.post("/create", formData)
      .then(() => {
        // On success, navigate to the home page (root route)
        navigate("/"); 
      })
      .catch((err) => console.error(err)); // Log any errors to the console
  };

  return (
    <div>
      <h1>Create File</h1>
      {/* Form to create a new file */}
      <form onSubmit={handleSubmit}>
        {/* Input field for the file name */}
        <input
          type="text"
          placeholder="Name" // Placeholder text for the name field
          value={formData.name} // Controlled input: the value is derived from formData
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value }) // Update the name in state when the user types
          }
        />
        
        {/* Textarea for the file description */}
        <textarea
          placeholder="Descriptions" // Placeholder text for the description field
          value={formData.descriptions} // Controlled input: the value is derived from formData
          onChange={(e) =>
            setFormData({ ...formData, descriptions: e.target.value }) // Update the description in state when the user types
          }
        ></textarea>

        {/* Submit button for the form */}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

// Export the CreateFile component to be used in other parts of the app
export default CreateFile;
