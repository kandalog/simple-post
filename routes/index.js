const express = require("express");
const router = express.Router();

// 全てのユーザーを取得
router.get("/", (req, res) => {
  return res.send("root");
});

module.exports = router;
