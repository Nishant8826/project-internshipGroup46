const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let internSchema = new mongoose.Schema(
  {
    name: { type: String, required: "Please Enter Name" },
    email: {
      type: String,
      unique: true,
      required: "Please enter email",
    },
    mobile: {
      type: Number,
      required: "Please enter mobile number",
      unique: true,
    },
    collegeId: {
      type: ObjectId,
      ref: "college",
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("intern", internSchema);
