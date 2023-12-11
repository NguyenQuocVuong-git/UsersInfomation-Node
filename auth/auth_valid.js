/**Empty*/
function isEmpty(val) {
  if (val === true) return true;
  if (val === null || val === undefined || val === "" || val === false)
    return true;
  return false;
}

module.exports = {
  /**👉Rules email */
  checkEmail: function (email) {
    if (isEmpty(email)) return true;
    const format =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    ///^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    if (!format.test(email)) return false;
    return null;
  },

  /**👉Rules is empty */
  isEmpty: function (val) {
    if (val == null || val == undefined || val == "" || val == false)
      return true;
    return false;
  },
  checkName: function (name) {
    if (isEmpty(name)) return true;
    const format = /[a-zA-Z ]{1,30}$/.test(name);
    if (!format) return false;
    return null;
  },
  checkAge: function (age) {
    if (isEmpty(age) || age < 0 || age > 100 || !Number.isInteger(age))
      return true;
    return null;
  },
  checkPhone: function (phone) {
    if (isEmpty(phone)) return true;
    return null;
  },
};
