import userModel from "../models/usersModel.js";
const getAllController = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.status(200).json({message: "Got all users", data: allUsers});
    } catch (error) {
        res.status(404).json({ error: 404, message: "Route not found." });
    }
}
const getOneController = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        res.status(200).json({message: "Got the user", data: user});
    } catch (error) {
        res.status(404).json({ error: 404, message: "Route not found." });
    }
}
const postUserController = async (req, res) => {
    try {
        const obj = req.body;
        const user = new userModel(obj);
        await user.save();
        res.status(201).json({message: "User Created", data: user});
    } catch (error) {
        res.status(404).json({ error: 404, message: "Route not found."});
    }
}

const updateController = async (req, res) => {
    try {
        const userId = req.params.id;
        const detailsToUpdate = req.body;
        await userModel.findByIdAndUpdate(userId, detailsToUpdate);
        res.status(200).json({message: "User Updated successfully"});
    } catch (error) {
        res.status(404).json({ error: 404, message: "Route not found."});
    }
}
const deleteController = async (req, res) => {
    try {
        const userId = req.params.id;
        await userModel.findByIdAndDelete(userId);
        res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        res.status(404).json({ error: 404, message: "Route not found."});
    }
}

export {getAllController, getOneController, postUserController, updateController, deleteController};