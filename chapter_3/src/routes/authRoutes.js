
import express from 'express';
import bcrypt from 'bcryptjs';// encrypter for passwords
import jwt from 'jsonwebtoken';// generates json token - secure alphanumeric passowrd we can assosicate with a user for when they login again
import db from '../db.js';


// configuring endpoints outside the original file
const router = express.Router();

// Register a new user endpoint /auth/register
router.post('/register', (req, res) => {
    const {username, password} = req.body;
    // seconds parameter is a salt length and that helps create the hash
    const hashedPassword = bcrypt.hashSync(password, 8);

    // save new user and hashed password to db
    try {
        const insertUser = db.prepare(``);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(503);
    }
});

router.post('/login', (req, res) => {
    // encryption algorithms are one way so cant be unencrypted
    // we need to encrypt the users log-in password with the same 
    // algorithm that encrypted the password when the account was made

});


export default router;
