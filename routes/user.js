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
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ユーザーを更新する
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    await user.save();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ユーザーを削除する
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    return res.status(200).json("削除に成功しました");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
