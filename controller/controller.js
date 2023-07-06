const User = require('../models/model')

exports.home = (req, res) => {
    res.send('Hello World!');
}

// Creating new user
exports.createuser = async (req, res) => {
    try {
        const {
            name,
            email,
            hk
        } = req.body

        if (name == "" || email == "") {
            throw new Error("Please provide all the details");
        }

        //    const userExist = User.findOne({email})
        //    if(userExist){
        //     throw new Error('Email Already Exist')
        //    }

        const userData = await User.create({
            name,
            email,
            hk
        })
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            userData
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.massage
        })
    }
}

// Reading Data
exports.getUsers = async (req, res) => {
    try {
        const allData = await User.find({})
        res.status(200).json({
            success: true,
            message: 'Getting All DATA',
            allData
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.massage
        })
    }
}

// Updating User Data
exports.userEdit = async (req, res) => {
    try {
        const userEdit = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success: true,
            massage: "Update Successfully",
            userEdit
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.massage
        })
    }
}

// Deleting Data
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const deleteUser = await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            massage: "Delete successfully",
            deleteUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.massage
        })
    }

}
