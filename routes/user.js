const express = require("express");
const router = express.Router();

const { User } = require("../models");

// 全てのユーザーを取得
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 特定のユーザーを取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
