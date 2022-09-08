const express = require("express");
const router = express.Router();

const { User } = require("../models");

// 新規ユーザーを登録
router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
