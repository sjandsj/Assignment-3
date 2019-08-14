export const validation = (field, fieldValue) => {
  if (field === "Email") {
    var email = /^[a-zA-Z0-9_.+-]+@[grepruby]+\.[a-zA-Z0-9-.]+$/;
    if (email.test(fieldValue)) {
      return true;
    } else {
      return false;
    }
  } else if (field === "password") {
    return fieldValue === "" || fieldValue.length < 6;
  }
};
