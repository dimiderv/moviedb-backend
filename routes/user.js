const express = require('express')
const router = express.Router();

const userController= require('../controllers/userController');
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT);

router.route('/')
    .get(userController.getUserDetails)
    .put(userController.updateUserPassword)
    .patch(userController.updateUserDetails)




module.exports= router;