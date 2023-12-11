/**Empty*/
const { FORMAT_EMAIL,FORMAT_NAME } = require("../constant");

function isEmpty(val) {
  return val == null || val === "" || val == false;
}

module.exports = {
  checkEmail: function (email) {
    if (isEmpty(email) || !FORMAT_EMAIL.test(email)) return true;
    return false;
  },
  isEmpty: function (val) {
    return val == null || val === "" || val == false;
  },
  checkName: function (name) {
    if (isEmpty(name) || !FORMAT_NAME.test(name)) return true;
    return false;
  },
  checkAge: function (age) {
    if (isEmpty(age) || age < 0 || age > 100 || !Number.isInteger(age))
      return true;
    return false;
  },
  checkPhone: function (phone) {
    if (isEmpty(phone)) return true;
    return false;
  },
};
