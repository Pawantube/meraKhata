// Importing necessary modules and hooks
import React, { useEffect, useState } from "react"; 
// React: Core library for building UI components
// useEffect: Hook for handling side effects, like data fetching
// useState: Hook for managing component state

import { useParams, useNavigate } from "react-router-dom"; 
// useParams: Hook for accessing route parameters (e.g., file ID)
// useNavigate: Hook for programmatic navigation after successful operations

import API from "../api"; 
// Importing the API utility for making HTTP requests to the backend

// UpdateFile Component: Provides a form to update file details
const UpdateFile = () => {
  // Extract the `id` parameter from the route (e.g., "/update/:id")
  const { id } = useParams();

  // State to manage the form data (name and descriptions)
  const [formData, setFormData] = useState({ name: "", descriptions: "" });

  // Hook for navigation after updating the file
  const navigate = useNavigate();

  // Fetch the current file data when the component is loaded
  useEffect(() => {
    API.get(`/view/${id}`) // Fetch the file details using the `id`
      .then((res) => setFormData(res.data)) // Populate the form with the fetched data
      .catch((err) => console.error(err)); // Log errors in case of failure
  }, [id]); // Dependency array ensures this effect runs when `id` changes

  // Handle form submission to update the file
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    API.put(`/update/${id}`, formData) // Send updated data to the backend
      .then(() => navigate("/")) // Navigate to the home page on success
      .catch((err) => console.error(err)); // Log errors in case of failure
  };

  return (
    <div>
      <h1>Update File</h1>
      {/* Form for updating file details */}
      <form onSubmit={handleSubmit}>
        {/* Input for updating the file name */}
        <input
          type="text"
          value={formData.name} // Bind the name value to the state
          onChange={(e) => 
            setFormData({ ...formData, name: e.target.value }) // Update name in state
          }
        />
        {/* Textarea for updating the file description */}
        <textarea
          value={formData.descriptions} // Bind the description value to the state
          onChange={(e) => 
            setFormData({ ...formData, descriptions: e.target.value }) // Update description in state
          }
        ></textarea>
        {/* Submit button for the form */}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

// Exporting the UpdateFile component to be used in the app
export default UpdateFile;
