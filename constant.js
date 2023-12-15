module.exports = Object.freeze({
  FORMAT_EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  FORMAT_NAME: /[a-zA-Z ]{1,30}$/,
  FORMAT_PASSWORD:
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/,
  SALT_WORK_FACTOR: 10,
  LOGIN_PRIVATE_KEY: 'jahsgdjhasd287561623$%#$#*^8767837GFDFKHJADs'
});
