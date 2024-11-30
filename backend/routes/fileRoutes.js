const express=require('express');
const Router = express.Router();
const {hissabs,hissabsId,target,create}=require("../controllers/hissabs")
Router.get("/",hissabs);
Router.get("/view/:id",target);
Router.put("/update/:id",hissabsId);//target the user and show his notes
Router.post("/create",create);
module.exports=Router;