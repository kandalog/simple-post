const express = require("express");
const cors = require("cors");
const session = require("express-session");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

// sessionの設定
const session_opt = {
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  cookie: { masAge: 60 * 60 * 1000 },
};

const app = express();
app.use(session(session_opt));
app.use(express.json());
app.use(cors());

app.use("/", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(3000, console.log("サーバーを開始します。"));
