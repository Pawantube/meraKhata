// Importing necessary modules and hooks
import React, { useEffect, useState } from "react"; 
// React: Core library for building the user interface
// useEffect: Hook for running side effects (e.g., fetching data)
// useState: Hook for managing component state
import { useParams } from "react-router-dom"; 
// useParams: Hook for accessing dynamic parameters from the route

import API from "../api"; 
// Importing the API module for making HTTP requests to the backend

// ViewFile Component: Displays details of a specific file
const ViewFile = () => {
  // Extract the `id` parameter from the route (e.g., "/view/:id")
  const { id } = useParams();

  // State to hold the file data retrieved from the API
  const [file, setFile] = useState(null);

  // useEffect to fetch file data when the component loads or when `id` changes
  useEffect(() => {
    // Fetch file data using the `id` from the route
    API.get(`/view/${id}`)
      .then((res) => setFile(res.data)) // Update the state with the fetched file data
      .catch((err) => console.error(err)); // Log errors to the console if the request fails
  }, [id]); // Dependency array ensures this effect runs whenever `id` changes

  // Display a loading message while the file data is being fetched
  if (!file) return <p>Loading...</p>;

  // Render the file details once the data is available
  return (
    <div>
      {/* Display the name of the file */}
      <h1>{file.name}</h1>
      {/* Display the file's description */}
      <p>{file.descriptions}</p>
    </div>
  );
};

// Exporting the ViewFile component to be used in other parts of the app
export default ViewFile;
