const User = require("../models/User");
const validator = require("validator");
const bcrypt = require("bcrypt");

const failedLogin = ( req, res) => {
    return res.status(400).json({message: "Username Or Password Incorrect"});
}

module.exports = async (req, res, next) => {


    try {

        const { credential, password } = req.body;

        if(credential == undefined || password == undefined) {
            return res.status(400).json({
                error: '1 or more required fields are missing!'
            })
        }
        const 
        c = credential.trim().toLowerCase()
        query = {}, 
        field = validator.isEmail(c) ? 'email' : 'username'

        query[field] = c;

        const
        projection = {password: 1}, 
        user = 
            await User.findOne(
                query, 
                projection
            ); 

        if (user === null) {
            console.error(`\nLogin Failed: '${field}' Not In Use`);
            return failedLogin(req, res)    
        }

        const pass = req.body.password,
              passTest = 
                (pass === undefined || pass.trim() === '') 
                    ? false 
                    : await bcrypt.compare(pass, user.password);

        if (!passTest) {
            console.error('\nLogin Failed: Password Invalid ');
            return failedLogin(req, res)    
        }

        req.id = user._id;

        next() //if code execution reaches here, it is assumed the user has successfully logged in
        
    } catch (err) {
        res.status(500).json({
            message: err.message || err
        })
    }
}
