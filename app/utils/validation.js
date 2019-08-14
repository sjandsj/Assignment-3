export const emailValidation = fieldValue => {
  var email = /^[a-zA-Z0-9_.+-]+@[grepruby]+\.[a-zA-Z0-9-.]+$/;
  if (email.test(fieldValue)) {
    return true;
  } else {
    return false;
  }
};

export const passwordValidation = fieldValue => {
  return fieldValue === "" || fieldValue.length < 6;
};
