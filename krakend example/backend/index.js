// ─── Module ──────────────────────────────────────────────────────────────────
const express = require("express");
const cors = require("cors");
const uuid = require("uuid").v4;
const app = express();

// ─── Middleware ──────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Database ────────────────────────────────────────────────────────────────
const users = [
  { id: "94aea474-7e35-499f-af09-009f2cd841cf", email: "a@a.com" },
  { id: "30d20038-80b7-4593-b227-6678df327135", email: "b@b.com" },
  { id: "cf28a60d-0832-4513-bd0f-690c0f5641d6", email: "c@c.com" },
];

// ─── Routes ──────────────────────────────────────────────────────────────────
app
  .route("/users")
  .get((req, res) => {
    res.json({ list: users });
  })
  .post((req, res) => {
    const newUser = { id: uuid(), email: req.body.email };
    users.push(newUser);
    res.json({ created_user: newUser });
  });

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(3000, () => console.log("localhost:3000"));
