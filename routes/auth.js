const express = require("express");
const router = express.Router();

const { User, sync } = require("../models");

// 全てのユーザーを取得
router.get("/", (req, res) => {
  return res.send("auth");
});

module.exports = router;
