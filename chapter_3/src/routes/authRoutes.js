
import express from 'express';
import bcrypt from 'bcryptjs';// encrypter for passwords
import jwt from 'jsonwebtoken';// generates json token - secure alphanumeric passowrd we can assosicate with a user for when they login again
import db from '../db.js';


// configuring endpoints outside the original file
const router = express.Router();


router.post('/register', (req, res) => {});

router.post('/login', (req, res) => {});


export default router;
