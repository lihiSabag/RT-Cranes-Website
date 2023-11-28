const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Set EJS as templating engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// for parsing application to x-www-form-urlencoded
app.use(express.json());

app.listen(port, () => {
  console.log("server is up and running");
});

app.get("/", (req, res) => {
  res.render("pages/homePage");
});
app.get("/homePage", (req, res) => {
  res.render("pages/homePage");
});
app.get("/homePageEn", (req, res) => {
  res.render("pages/homePageEn");
});
app.get("/aboutUs", (req, res) => {
  res.render("pages/aboutUs");
});
app.get("/contactUs", (req, res) => {
  res.render("pages/contactUs");
});
app.get("/cranesCatalog", (req, res) => {
  res.render("pages/cranesCatalog");
});
app.get("/cranesRental", (req, res) => {
  res.render("pages/cranesRental");
});
app.get("/cranesSale", (req, res) => {
  res.render("pages/cranesSale");
});
app.get("/operators", (req, res) => {
  res.render("pages/operators");
});
app.get("/services", (req, res) => {
  res.render("pages/services");
});
app.get("/itemGRT8100", (req, res) => {
  res.render("pages/itemGRT8100");
});
app.get("/itemGRT770E", (req, res) => {
  res.render("pages/itemGRT770E");
});
app.get("/itemGRT530E-2", (req, res) => {
  res.render("pages/itemGRT530E-2");
});

app.get("/itemGRT8100En", (req, res) => {
  res.render("pages/itemGRT8100En");
});
app.get("/itemGRT770EEn", (req, res) => {
  res.render("pages/itemGRT770EEn");
});
app.get("/itemGRT530E-2En", (req, res) => {
  res.render("pages/itemGRT530E-2En");
});
app.get("/mobileHomePage", (req, res) => {
  res.render("pages/mobileHomePage");
});
app.get("/projects", (req, res) => {
  res.render("pages/projects");
});
app.get("/soon", (req, res) => {
  res.render("pages/soon");
});
app.get("/soonEn", (req, res) => {
  res.render("pages/soonEn");
});

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
  const { fullName, mobile, email, message } = req.body;
  const myEmail = process.env.EMAIL;
  const password = process.env.PASSWORD;
  console.log("Full Name:", fullName);
  console.log("Mobile:", mobile);
  console.log("Email:", email);
  console.log("Message:", message);
  
  // Create a transporter using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  const mailOptions = {
    from: myEmail,
    to: "roaslihi@gmail.com", 
    subject: "New Contact Form Submission",
    text: `Full Name: ${fullName}\nPhone: ${mobile}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
    
      res.status(200).send("Email sent successfully");
    }
  });
});
