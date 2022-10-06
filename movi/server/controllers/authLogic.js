import User from "../models/user.js";
import CryptoJS from "crypto-js";

/**
 * Registers a new user to the database and encrypts their password
 */
export const registerUser = ("/register", async(req,res) =>{
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: CryptoJS.AES.encrypt(req.body.passwordHash, process.env.PASS).toString()
    });

    try{
        const user = newUser.save();
        res.status(201).res.json(user);
    }catch(err){

    }
});
