const express = require("express");
const router = express.Router();

const { Post } = require("../models");

// 全ての投稿を取得
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 特定の投稿を取得
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 新しい投稿を作成
router.post("/create", async (req, res) => {
  try {
    const post = await Post.create({
      userId: req.body.userId,
      content: req.body.content,
    });
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 投稿を更新
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    post.userId = post.userId;
    post.content = req.body.content;
    await post.save();
    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// 投稿を削除
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    return res.status(200).json("削除に成功しました");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
