const db = require("../Model/db");

//------------allcontact
exports.getAllContact = (req, res) => {
  console.log("hi");
  let contacts = db.get("contacts").sortBy("id").value();
  console.log(db);
  console.log(contacts);
  res.json({ contacts: contacts });
};
//-----singlecontact
exports.getSingleContact = (req, res, next) => {
  let idParam = parseInt(req.params.id);
  let contact = db.get("contacts").find({ userId: idParam }).value();
  if (contact) {
    res.json({ success: true, message: contact });
  } else {
    let error = new Error("contact not found");
    error.status = 404;
    next(error);
  }
};
//----deletecontact
exports.deleteContact = (req, res) => {
  let idParam = parseInt(req.params.id);
  let contact = db.get("contacts").find({ userId: idParam }).value();
  if (contact) {
    db.get("contacts").remove({ userId: idParam }).write();
    res.json({ success: true, message: "contact deleted" });
  } else {
    let error = new Error("contact not found");
    error.status = 404;
    next(error);
  }
};
//---updatecontact
exports.updateContact = (req, res) => {
  let idParam = parseInt(req.params.id);
  let contact = db.get("contacts").find({ userId: idParam }).value();
  if (contact) {
    if (contact) {
      db.get("users").find({ userId: idParam }).assign(req.body).write();
      res.json({ success: true, message: "user updated" });
    } else {
      let error = new Error("contact not found");
      error.status = 404;
      next(error);
    }
  }
};
//----addcontact
const { v4: uuidv4 } = require("uuid");

exports.addNewContact = (req, res) => {
  req.body.userId = uuidv4();
  db.get("contacts").push(req.body).write();
  res.json({
    success: true,
    message: "contact added succefully",
    contact: req.body,
  });
};
