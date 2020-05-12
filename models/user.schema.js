const mong = require("mongoose");

const userSchema = new mong.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mong.model('Users',userSchema);
module.exports = User;