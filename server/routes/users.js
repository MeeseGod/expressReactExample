const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json([
        {
            username: "user1",
            age: 26
        },
        {
            username: "user2",
            age: 32
        }
    ])
});


module.exports = router;