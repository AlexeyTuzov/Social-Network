const {Router} = require('express');
const User = require('../models/User.model');
const router = Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

// /api/user/register
router.post('/register',
    body('email').isEmail(),
    body('firstName').exists(),
    body('password').isLength({min: 6}),
    async (req, res) => {
        try {
            const {email, firstName, lastName, password} = req.body;

            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: "Such e-mail already have been used"});
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Validation failed!"});
            }

            const hashedPassword = await bcrypt.hash(password, 6);

            const user = new User({email, firstName, lastName, password: hashedPassword});
            await user.save();
            res.status(201).json({message: 'User have been created successfully!'});

        } catch (e) {
            res.status(500).json({message: "Something's wrong at server side!!!"});
        }
    });

// /api/user/get
router.get('/get', async (req, res) => {
    try {
        const usersArray = await User.find({});

        let filteredUsers = await usersArray.map(item => ({
            firstName: item.firstName,
            lastName: item.lastName,
            id: item._id
        }));

        return res.json(filteredUsers);

    } catch (e) {
        res.status(500).json({message: "Something's wrong at server side..."});
    }
});

module.exports = router;