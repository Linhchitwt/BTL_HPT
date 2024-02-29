import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import UserDao from "../DAO/user.dao.js";

const router = express.Router()

const tinhTuoi = (ngaySinh) => {
    var today = new Date();
    var birthDate = new Date(ngaySinh);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(birthDate);
    return age;
}

router.get("/allmembers", async (req, res) => {
    try {
        const users = await UserDao.getAllUsers();
        res.status(200).json(users);

    } catch (err) {
        return res.status(500).json(err);
    }
})

/* Adding book */
router.post("/adduser", async (req, res) => {
    // if (req.body.isAdmin) {
    // update for run anyway to demo api
    if (true) {
        try {
            /* Salting and Hashing the Password */
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(req.body.password, salt);
            /* Create a new user */
            const user = await UserDao.createUser({
                ...req.body,
                age: tinhTuoi(req.body.dob),
                password: hashedPass,
            });
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
        }
    }
    else {
        return res.status(403).json("You dont have permission to add a user!");
    }
})


router.get("/getuser/:id", async (req, res) => {
    try {
        const user = await UserDao.getUserById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    }
    catch (err) {
        return res.status(500).json(err);
    }
})


router.put("/updateuser/:id", async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
    // update for run anyway to demo api
    if (true) {
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await UserDao.updateUser(req.params.id, req.body);
            res.status(200).json("Account has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    else {
        return res.status(403).json("You can update only your account!");
    }
})



router.put("/:id/move-to-activetransactions", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const user = await User.findById(req.body.userId);
            await user.updateOne({ $push: { activeTransactions: req.params.id } });
            res.status(200).json("Added to Active Transaction");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Only Admin can add a transaction");
    }
})


router.put("/:id/move-to-prevtransactions", async (req, res) => {
    if (req.body.isAdmin) {
        try {
            const user = await User.findById(req.body.userId);
            await user.updateOne({ $pull: { activeTransactions: req.params.id } });
            await user.updateOne({ $push: { prevTransactions: req.params.id } });
            res.status(200).json("Added to previous transaction")
        } catch (err) {
            res.status(500).json(err);

        }
    } else {
        res.status(403).json("Only Admin can do this");
    }
});


router.delete("/deleteuser/id", async (req, res) => {
    // if (req.body.userId === req.params.id || req.body.isAdmin) {
    // update for run anyway to demo api
    if (true) {
        try {
            await UserDao.deleteUser(req.params.id);
            res.status(200).json("Account has been deleted");

        } catch (err) {
            return res.status(403).json("You can delete only your account!");

        }
    }
})


export default router;