const {User} = require('../models/user');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {
    try{
    const userList = await User.find();

    if(!UserList) {
        res.status(500).json({
            success:false,
            message:'No users found'
        });
        res.send(userList);

    }
    }
    
});
module.exports = router;