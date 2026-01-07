//js validations
function validate() {
  //req data gathering logic
  let uname = document.getElementById("username").value;
  let pass = document.getElementById("passwod").value;
  let cnfpass = document.getElementById("cnfpwd");
  let mobi = document.getElementById("mob");
  let regexp = /[a-z][A-Z]{8,12}$/;
  let regexp1 = /[0-9]{10}$/;
  // form validation logic
  if (uname == "") {
    alert("boss please enter username");
    return false;
  }

  if (pass == "") {
    alert("pass is required");
    return false;
  }
  if (pass.length < 8 || pass.length > 12) {
    alert("password should be min 8 characters and max of 12");
    return false;
  }
  if (!regexp.test(pass)) {
    alert("pass comb");
    return false;
  }
  if (cnfpass.value == "") {
    alert("re-enter pass");
    return false;
  }
  if (cnfpass.value != pass) {
    alert("pwd no match");
    return false;
  }
  if (mobi.value == "") {
    alert("enter");
    return false;
  }
  if (!regexp1.test(mobi.value)) {
    alert("invalid");
    return false;
  }
  return true;
}
