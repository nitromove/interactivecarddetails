const userNumber = document.getElementById("cardnumber");
const userName = document.getElementById("cardholdername");
const userCvc = document.getElementById("cvcnumber");
const defaultNumber = document.getElementById("number");
const defaultName = document.getElementById("name");
const defaultDate = document.getElementById("expirydate");
const defaultCvc = document.getElementById("cvcvalue");
const continueButton = document.getElementById("continue");
const formSection = document.querySelector(".form-section");
const successPage = document.querySelector("#success-page");
const year = document.getElementById("yy");
const month = document.getElementById("mm");
const expirycombined = document.getElementById("expirydate");

function redate() {
  const yearvalue = year.value;
  const monthvalue = month.value;
  if (monthvalue <=12) {
    const combination = `${monthvalue}/${yearvalue}`;
    expirycombined.innerText = combination;
  }else {
    const monthvalue = null;
    alert("Month value can't be more thab 12")
  }

}

userName.addEventListener('input', function() {
  defaultName.innerText = userName.value;
});

userNumber.addEventListener('input', function() {
  const value = userNumber.value;
  if (value.length <= 16) {
    defaultNumber.innerText = value;
  } else {
    userNumber.value = value.slice(0, 16);
  }
});

userCvc.addEventListener('input', function() {
  const value = userCvc.value;
  if (value.length <= 3) {
    defaultCvc.innerText = value;
  } else {
    userCvc.value = value.slice(0, 3);
  }
});

function validateForm() {
  const namePattern = /^[A-Za-z\s]+$/;
  const numberPattern = /^\d{16}$/;

  if (!namePattern.test(userName.value)) {
    alert("Please enter a valid name with only letters.");
    return false;
  }

  if (!numberPattern.test(userNumber.value)) {
    alert("Please enter a valid 16-digit card number.");
    return false;
  }

  formSection.style.display = "none";
  successPage.style.display = "block";
  return false; 
}

function reload() {
  location.reload();
}
