const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Token = require('../models/token');

const router = express.Router();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const generateTokens = (user) => {
    const payload = {
        user: {
            id: user.id,
        },
    };

    const accessToken = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: '15m' });
    const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

    return { accessToken, refreshToken };
};

router.post('/register', async (req, res) => {
    const { firstName, lastName, phone, about, email, profilePic, socialMedia, password } = req.body;
    
    try {
        let user = await User.findOne({ email }); 
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        passwordHash = await bcrypt.hash("Huseyn123", salt);

        user = new User({
            firstName,
            lastName,
            phone,
            about,
            email,
            profilePic,
            socialMedia,
            passwordHash
        });

        await user.save();

        const { accessToken, refreshToken } = generateTokens(user);

        const token = new Token({
            userId: user.id,
            token: refreshToken,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        await token.save();

        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const { accessToken, refreshToken } = generateTokens(user);

        const token = new Token({
            userId: user.id,
            token: refreshToken,
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });
        await token.save();

        res.json({ accessToken, refreshToken });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server error');
    }
});

router.post('/refresh', async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);

        const existingToken = await Token.findOne({ token: refreshToken, userId: decoded.user.id });

        if (!existingToken) {
            return res.status(401).json({ msg: 'Invalid refresh token' });
        }

        const payload = {
            user: {
                id: decoded.user.id,
            },
        };

        const accessToken = jwt.sign(payload, ACCESS_TOKEN, { expiresIn: '15m' });

        res.json({ accessToken });
    } catch (err) {
        console.error(err.message);
        res.status(401).json({ msg: 'Token is not valid' });
    }
});

module.exports = router;
