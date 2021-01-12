const router = require("express").Router();
const {
  getAllContact,
  getSingleContact,
  deleteContact,
  updateContact,
  addNewContact,
} = require("../Controllers/contactController");
//----------

router.get("/", getAllContact);
router.get("/:id", getSingleContact);
router.patch("/:id", updateContact);
router.delete("/:id", deleteContact);
router.post("/", addNewContact);
//---------
module.exports = router;
