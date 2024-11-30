const mongoose=require("mongoose");
const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name must not exceed 50 characters"],
    trim: true, // Removes leading/trailing whitespaces
    //match: [/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces"], // Regex validation
  },
  descriptions: {
    type: String,
    required: [true, "Description is required"],
    minlength: [3, "Description must be at least 3 characters"],
    maxlength: [200, "Description must not exceed 200 characters"],
    trim: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});
module.exports=mongoose.model("User",userModel);