import User from "../models/User.js";

class UserDao {
    static async getAllUsers() {
        return await User.find({}).populate("activeTransactions").populate("prevTransactions").sort({ _id: -1 });
    }

    static async getUserById(id) {
        return await User.findById(id).populate("activeTransactions").populate("prevTransactions").populate("books")
    }

    static async createUser(userData) {
        const newUser = new User(userData);
        return await newUser.save();
    }

    static async updateUser(id, userData) {
        return await User.findByIdAndUpdate(id, {
            $set: userData,
        });
    }

    static async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default UserDao;