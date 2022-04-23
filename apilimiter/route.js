
const express = require("express");

const router = express.Router();

const { json } = require("express");

// we are making dummy data and send

const data = [
  {
    id: 1,
    author: "elonmusk",
    title: "businessman",
    body: "post 1",
  },
  {
    id: 2,
    author: "elonmusk",
    title: "businessman",
    body: "post 2",
  },
  {
    id: 3,
    author: "elonmusk",
    title: "businessman",
    body: "post 3",
  },
  {
    id: 4,
    author: "elonmusk",
    title: "businessman",
    body: "post 4",
  },
];

router.get("/", function (req, res, next) {
  res.json(data);
});

module.exports = router;
