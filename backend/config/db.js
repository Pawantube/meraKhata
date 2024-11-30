const mongoose=require("mongoose");
require('dotenv').config({ path: '../.env' });

const connectDB=async ()=>{
	try{
	const connect=	await mongoose.connect(process.env.MONGO_URI,{})

			console.log('✅ MongoDB connected successfully!');
		
	}
	catch(err){
		console.error(' Error connecting to MongoDB:', err.message);
		process.exit(1);
	}
	
}
module.exports=connectDB;
