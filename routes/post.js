const express = require("express");
const router = express.Router();

const { Post, sync } = require("../models");

// 全てのユーザーを取得
router.get("/", (req, res) => {
  return res.send("posts");
});

module.exports = router;
