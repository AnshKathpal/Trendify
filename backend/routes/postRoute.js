const express = require("express")
const {postModel} = require("../models/postModel")
const postRoute = express.Router()


postRoute.post("/postshoes", async(req,res) => {

  try {
    
    const postShoes = new postModel(req.body)
    await postShoes.save()
    res.status(200).json({msg : "New Shoe has been added" , details : req.body})


  } catch (error) {
    res.status(400).json({err : err.message})
  }

})


postRoute.get("/shoes" , async(req,res) => {

  try {
    
    const shoes = await postModel.find()
    res.status(200).json(shoes)

  } catch (error) {
    
    res.status(404).json({error : error.message})

  }

})


module.exports = {
  postRoute
}