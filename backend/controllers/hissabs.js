//const User = require("../models/userModel");
const express=require("express")

// module.exports = {
//   // Fetch all hisaabs (Users)
//   hissabs: async (req, res) => {
//     try {
//       // Fetch all users from the database using the find() method
//       const result = await User.find().lean();
//       res.json(result); // Send the fetched users as a JSON response
//     } catch (err) {
//       // If an error occurs, send a 500 status code with the error message
//       res.status(500).send({ message: err.message });
//     }
//   },

//   // Add a new hisaab (Create a new user)
//   create: async (req, res) => {
// 	try {
// 		// Log the request body for debugging purposes
// 		console.log("Request Body:", req.body);
		
// 		// Extract 'name' and 'descriptions' from the request body
// 		const { name, descriptions } = req.body || {}; // Default to empty object if req.body is undefined
		
// 		// Check if 'name' is provided
// 		if (!name) {
// 		  return res.status(400).json({ message: 'Name is required' }); // If no name, return error
// 		}
	
// 		// Create a new user with the provided 'name' and 'descriptions' (default to 'default' if not provided)
// 		const user = new User({
// 		  name,
// 		  descriptions: descriptions || 'default',
// 		});
	
// 		// Save the new user to the database
// 		await user.save();
	
// 		// Send a success response with the created user
// 		res.json({
// 		  message: "User created successfully",
// 		  user,
// 		});
// 	  } catch (err) {
// 		// Catch any errors and respond with a 500 status code and the error message
// 		res.status(500).send({
// 		  message: err.message,
// 		});
// 	  }
//   },
  

//   // Fetch details for editing a specific hisaab (user)
//   edit: async (req, res) => {
//     try {
//       // Find a user by their ID passed in the request parameters
//       const user = await User.findById(req.params._id); // Use req.params._id to get the user ID from the URL
      
//       // Check if the user exists
//       if (!user) {
//         return res.status(404).send({ message: "User not found" }); // Send an error if the user is not found
//       }
      
//       console.log("edit called"); // Log a message for debugging purposes
      
//       // Send the user data as a JSON response to allow editing in the frontend
//       res.json(user);
//     } catch (err) {
//       // If an error occurs, send a 500 status code with the error message
//       res.status(500).send({ message: err.message });
//     }
//   },

//   // Fetch details of a specific hisaab and update it
//   hissabsId: async (req, res) => {
//     try {
//       // Find and update the user by ID. The new data comes from req.body
//       const updatedHisaab = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      
//       // Check if the user was updated successfully
//       if (!updatedHisaab) {
//         return res.status(404).send({ message: "User not found" }); // Send error if user not found
//       }

//       // Send a response with the updated user and a success message
//       res.json({ message: 'Hisaab updated', hisaabs: updatedHisaab });
//     } catch (err) {
//       // If an error occurs, send a 500 status code with the error message
//       res.status(500).send({ message: err.message });
//     }
//   },
// };


/*
Log in

Sign up
You said:*/
// const User = require("../models/userModel");
// function generateCurrentDatetime() {
//     return new Date().toLocaleString('en-US', { 
//         weekday: 'long', 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric', 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit' 
//     });
// }
// module.exports = {
//   // Fetch all hisaabs
//   hissabs: async (req, res) => {
//     try {
//       const result = await User.find().lean(); // Await the result of the query
//       res.json(result); // Send the result as a JSON response
//     } catch (err) {
//       res.status(500).send({ message: err.message }); // Handle any errors that occur
//     }
//   },



//   // Add a new hisaab
//   create: async (req, res) => {
//     try {
// 	const { name, descriptions } = req.body || {};
// 	console.log(req.body)
//       const user = new User({
//         name:name ||generateCurrentDatetime(),
//         descriptions:descriptions|| "Start editing your file",
		
//       });
// 	  console.log(name);	
//       await user.save(); // Await the save operation
//       res.json(user); // Send the saved user as a JSON response
//     } catch (err) {
//       res.status(500).send({ message: err.message }); // Handle any errors that occur
//     }
//   },

//   // Fetch details for editing a hisaab
//   edit:async (req, res) => {
// 	const user=await User.findById(req.params._id);
//     console.log("edit called");
//     res.json(user); // Placeholder response
//   },

//   // Fetch details of a specific hisaab
//   hissabsId: async (req, res) => {
//     const updatedHisaab = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json({ message: 'Hisaab updated', hisaabs: updatedHisaab });
//   },
// };

const User = require("../models/userModel");

// Utility function to generate the current datetime
function generateCurrentDatetime() {
    return new Date().toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
}

module.exports = {
    // Fetch all hisaabs
    hissabs: async (req, res) => {
        try {
            const result = await User.find().lean();
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    // Create a new hisaab
    create: async (req, res) => {
        try {
            const { name, descriptions } = req.body || {};
            const user = new User({
                name: name || generateCurrentDatetime(),
                descriptions: descriptions || "Start editing your file",
            });
            await user.save();
            res.status(201).json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    // Fetch a specific hisaab for editing
	target: async (req, res) => {
		try {
			// Use `findOne` to fetch by `_id`
			const user = await User.findOne({ _id: req.params.id });
	
			if (!user) {
				return res.status(404).json({ message: "File not found" });
			}
	
			// Return the found file data
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
	
    // Update a specific hisaab
    hissabsId: async (req, res) => {
        try {
            const updatedHisaab = await User.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedHisaab) {
                return res.status(404).json({ message: "Hisaab not found" });
            }
            res.status(200).json({ message: "Hisaab updated", hisaabs: updatedHisaab });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
};
