const models = require("../models");
const datas = require("../models/moc_data");

var dataobj = { test: "asdasd" };

exports.index = (req, res, next) => {
  res.render("landing", { title: "Express", user: req.user });
};

exports.submit_email = (req, res) => {
  //console.log("email :", req.body.lead_email);

  return models.Lead.create({
    email: req.body.lead_email,
  }).then((lead) => {
    console.log("lead :", lead);
    res.redirect("/leads");
  });
  // res.redirect("/");
};

exports.show_leads = (req, res, next) => {
  return models.Lead.findAll().then((leads) => {
    res.render("lead/leads", { title: "Express", leads: leads });
  });
  // res.render("landing", { title: "Express" });
};

exports.show_lead = (req, res, next) => {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id,
    },
  }).then((lead) => {
    res.render("lead/lead", { lead: lead });
  });
};

exports.show_edit_lead = (req, res, next) => {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id,
    },
  }).then((lead) => {
    res.render("lead/edit_lead", { lead: lead });
  });
};

exports.edit_lead = (req, res, next) => {
  req.params.lead_id;
  req.body.lead_email;

  return models.Lead.update(
    {
      email: req.body.lead_email,
    },
    {
      where: {
        id: req.params.lead_id,
      },
    }
  ).then((result) => {
    console.log("result :", result);
    res.redirect("/lead/" + req.params.lead_id);
  });
};

exports.delete_lead = (req, res, next) => {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id,
    },
  }).then((result) => {
    res.redirect("/leads");
  });
};

exports.delete_lead_json = (req, res, next) => {
  return models.Lead.findAll()({
    where: {
      id: req.params.lead_id,
    },
  }).then((result) => {
    res.send({ msg: "Success" });
  });
};

exports.add_lead_json = (req, res, next) => {
  return models.Lead.build({
    data: req.params.data,
  }).then((result) => {
    res.redirect("/leads");
    // res.send({ msg: "Success" });
  });
};

exports.dashboard = (req, res, next) => {
  // return
  // return models.Lead.findAll().then((leads) => {
  // return res.render("dashboard/chart", {
  //   title: "Express",
  //   models: models.moc_data,
  // });
  // });

  return models.moc_data
    .findAll({
      limit: 1,
      order: [["id", "DESC"]],
    })
    .then((datas) => {
      console.log("in dash3 datas = ", datas[0].dataValues);
      res.render("dashboard/chart", {
        title: "Express",
        datas: datas[0].dataValues,
      });
    });
};

exports.dashboard2 = (req, res, next) => {
  return models.moc_data
    .findAll({
      limit: 1,
      order: [["id", "DESC"]],
    })
    .then((datas) => {
      console.log("in dash2 datas = ", datas);
    });
  // return models.Lead.findAll().then((leads) => {
  //   res.render("lead/leads", { title: "Express", leads: leads });
  // });
};
