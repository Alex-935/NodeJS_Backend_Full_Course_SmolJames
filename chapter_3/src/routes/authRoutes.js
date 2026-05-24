
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
        // the user db columns as id is automatically asigned
        // prepare a sql query to insrt the data
        //specify the columns and the values, leaving values blank
        // then run the commands, with real values to add to the db
        const insertUser = db.prepare(`
            INSERT INTO users (username, password)
            VALUES (?,?)
            `);
            const result = insertUser.run(username, hashedPassword);
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
