const express = require('express');
const router = express.Router();

const {
  getContact,
  createContact,
  getByIdContact,
  updateContact,
  deleteContact
} = require("../controllers/contractController");

// Sử dụng cùng một route cho nhiều phương thức khác nhau
router.route("/")
  .get(getContact)
  .post(createContact);

// Sử dụng route có tham số :id cho các phương thức GET, PUT, DELETE
router.route("/:id")
  .get(getByIdContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
