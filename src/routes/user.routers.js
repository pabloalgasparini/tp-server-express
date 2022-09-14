const router = require("express").Router();

const {
    getUser,
    postUser,
    putUser,
    deleteUser} = require("../controllers/home_controllers");

    router.get("/user", getUser);
    
    router.post("/user", postUser);

    router.put("/user", putUser);

    router.delete("/user", deleteUser);

    module.exports = router;