const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use("/", router);

router.get("/", (req, res) => {
    res.send("working");
});

router.post("/send-email", (req, res) => {
    const { subject, recipient } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "9rishitha5gmail.com",
            pass: "Rksatish@0905"
        },
    });

    const mailOptions = {
        from: "satishuppala143@gmail.com",
        to: recipient,
        subject: subject,
        text: "Hello, my name is Satish",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("Email sent successfully");
        }
    });
});

// Start the server
app.listen(9000, () => {
    console.log(`Server is running at http://localhost:9000`);
});
