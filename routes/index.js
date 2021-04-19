var express = require("express");
var router = express.Router();

let landing = require("../controllers/landing");
let user = require("../controllers/user");
// let dashboard = require("../controllers/dashboard");

let { isLoggedIn, hasAuth } = require("../middleware/hasAuth.js");

router.get("/login", user.show_login);
router.get("/signup", user.show_signup);
router.post("/login", user.login);
router.post("/signup", user.signup);
router.post("/logout", user.logout);
router.get("/logout", user.logout);

/* GET home page. */
router.get("/", landing.index);
router.post("/", landing.submit_email);
router.get("/leads", hasAuth, landing.show_leads);
router.get("/lead/:lead_id", hasAuth, landing.show_lead);
router.get("/lead/:lead_id/edit", hasAuth, landing.show_edit_lead);
router.post("/lead/:lead_id/edit", hasAuth, landing.edit_lead);
router.post("/lead/:lead_id/delete", hasAuth, landing.delete_lead);
router.post("/lead/:lead_id/delete-json", hasAuth, landing.delete_lead_json);
router.get("/dashboard", landing.dashboard);
router.get("/dashboard2", landing.dashboard2);

router.post("/lead/:data/add-json", hasAuth, landing.add_lead_json);
// router.post("/", function (req, res) {
//   console.log("eiei");
//   redirect("/");
// });

module.exports = router;
