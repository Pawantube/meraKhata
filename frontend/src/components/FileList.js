// Importing necessary modules
import React, { useEffect, useState } from "react"; 
// React: Core library for building UI components
// useEffect: Hook for handling side effects, like fetching data
// useState: Hook for managing component state

import API from "../api"; 
// API utility for making HTTP requests to the backend

import { Link } from "react-router-dom"; 
// Link: Component from react-router-dom used to create navigation links without reloading the page

// FileList Component: Displays a list of files with options to view or edit
const FileList = () => {
  // State to hold the list of files fetched from the backend
  const [files, setFiles] = useState([]);

  // useEffect hook to fetch files from the backend when the component mounts
  useEffect(() => {
    API.get("/") // Make a GET request to fetch all files from the backend
      .then((res) => setFiles(res.data)) // On success, update the state with the fetched data
      .catch((err) => console.error(err)); // Log any errors to the console
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>File List</h1>
      {/* Link to navigate to the "Create New File" page */}
      <Link to="/create">Create New File</Link>

      {/* Unordered list to display files */}
      <ul>
        {files.map((file) => (
          // Iterate through the files array and display each file
          <li key={file._id}>
            {/* Link to view a specific file by its ID */}
            <Link to={`/view/${file._id}`}>{file.name}</Link> | 
            {/* Link to edit a specific file by its ID */}
            <Link to={`/update/${file._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the FileList component to be used in other parts of the app
export default FileList;
