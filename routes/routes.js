const express = require("express");
const router = express.Router();
const {users,createUsers,Userlogin,userLogout} = require("../controllers/users");
const  { state, createState } = require("../controllers/state");
const { district, createDistrict } = require("../controllers/District")
const { child, createChild } = require("../controllers/child")

// For ragistraion
router.get("/api/users", users);
router.post("/api/createUser", createUsers);
router.post("/api/Userlogin", Userlogin);
router.get("/api/userLogout", userLogout);


// for state
router.get("/api/state",state)
router.post("/api/createState",createState)

// for district
router.get("/api/District",district)
router.post("/api/createdistrict",createDistrict)

// for Child
router.get("/api/child",child)
router.post("/api/createchild",createChild)
module.exports = router;
