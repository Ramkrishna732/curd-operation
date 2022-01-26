const mongoose = require("mongoose");
var validator = require("email-validator");

var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required",
  },
  email: {
    type: String,
  },
  designation: {
    type: String,
  },
  mobile: {
    type: String,
    required: "Mobile No is required",
  },
  city: {
    type: String,
  },
  date: {
    type: String,
    required: "This field is required",
  },
});

employeeSchema.path("email").validate((val) => {
  return validator.validate(val);
}, "Invalid Email");

mongoose.model("Employee", employeeSchema);
