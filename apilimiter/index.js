const express = require("express");

const indexRouter = require("./route.js")

const rateLimit = require("express-rate-limit");

const app = express();

const port = 5000;

app.use(rateLimit(
    {
        windowMs: 12 * 60 * 60 * 100,
        max: 10,
        message: "your api limit exceed",
        Headers:true
    }
))

app.use("/posts", indexRouter);

app.listen(port, () => {
    console.log(`app is runnning on port ${port}`);
})