// Importing necessary modules and components
import React from "react"; // React core library for building user interfaces
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
// BrowserRouter: Wraps the app to enable routing
// Routes: A container for all the Route components
// Route: Defines individual routes in the app

// Importing components to render for specific routes
import FileList from "./components/FileList"; // Displays a list of files
import CreateFile from "./components/CreateFile"; // Form for creating a new file
import ViewFile from "./components/ViewFile"; // View details of a specific file
import UpdateFile from "./components/UpdateFile"; // Form for updating an existing file

// App component serves as the main entry point for the React app
const App = () => {
  return (
    // Router wraps the application, enabling routing functionality
    <Router>
      {/* Routes container holds all the defined Route components */}
      <Routes>
        {/* Define each route with a specific path and associated component */}

        {/* Displays the FileList component when the user visits the home page ("/") */}
        <Route path="/" element={<FileList />} />

        {/* Displays the CreateFile component for creating a new file at "/create" */}
        <Route path="/create" element={<CreateFile />} />

        {/* Displays the ViewFile component to view details of a file based on its ID */}
        {/* ":id" is a route parameter used to pass the file ID dynamically */}
        <Route path="/view/:id" element={<ViewFile />} />

        {/* Displays the UpdateFile component for updating an existing file by its ID */}
        <Route path="/update/:id" element={<UpdateFile />} />
      </Routes>
    </Router>
  );
};

// Exporting the App component as the default export
export default App;
