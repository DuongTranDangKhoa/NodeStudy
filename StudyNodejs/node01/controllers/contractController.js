const express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");
const { getAllAccounts } = require('../models/contactMode');

const getContact = asyncHandler (async (req, res, next) => {
    try {
        const accounts = await getAllAccounts();
        res.status(200).json(accounts);
    } catch (error) {
        next(error);
    }
   
});
const createContact = asyncHandler ( async (req, res) => {
    console.log("The request body is :",  req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    res.status(200).json({message: "Create contacts" })
});
const getByIdContact = asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Get contacts for ${req.params.id}` })
});
const updateContact =  asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Update contacts for ${req.params.id}`});
});
const deleteContact =  asyncHandler ( async (req, res) => {
    res.status(200).json({ message: `delete contacts for ${req.params.id}` })
  });
module.exports= {
    getContact,
    createContact,
    getByIdContact,
    updateContact,
    deleteContact
};