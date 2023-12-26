const User = require('../model/userModel')
const jwt = require('../utils/jwt')
const bcrypt = require('bcryptjs')


const authController = {
    async signup(req,res){

        try {
            const {name , email, phone,password,cpassword} = req.body;
            if(!name || !email || !phone || !password || !cpassword){
                return res.status(401).send({
                    success:false,
                    message: "all feilds are required"
                })
            }
            if(password !== cpassword){
                return res.status(200).send({
                    success:false,
                    message:"password does not match"
                })
            }
            const existingUser = await User.findOne({email})

            if(existingUser){
                return res.status(400).send({
                    success:false,
                    message:"This email already exist"
                })
            }
            // hash the password

            const salt = await bcrypt.genSalt(10)
            const hashPasswd = await bcrypt.hash(password,salt)

            // create new user

            const newUser =new User({
                name,
                email,phone,
                password:hashPasswd,
                cpassword
            })
            await newUser.save()
            return res.status(201).send({
                success:true,
                message:"user registered succesfully "
            })
            console.log("chal gaya ")
            
        } catch (error) {
            console.log(error)
            return res.status(401).send({
                success:false,
                message:"internal server error",
                error:error.message
            })
        }

    },
    
    async login(req,res){
        try {
            const {email,password} = req.body;
            const user = await User.findOne({email})
            console.log(user)

            if(!user){
                return res.status(400).send({
                    success:false,
                    message: "email does not exist",
                })

            }
            // compare passwordd 
        const isPassword = await bcrypt.compare(password, user.password);
        if(!isPassword){
            return res.status(400).send({
                success:false,
                message:"wrong password"
            })
        }
            const token = jwt.sign({userId: user._id , email: user.email})
            res.json({token, user})
        } catch (error) {
            return res.status(500).json({message:"internal server error",error:error.message})
        }
    }
}
module.exports = authController;