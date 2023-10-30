const formFirstF = document.forms.firstF;

//Name
const fName = formFirstF.elements.fName;
fName.addEventListener('blur', (eo) => fNameBlur(false));
function fNameBlur(focusError) {
  const fNameValue = fName.value;
  let errors = 0;
  if ((fNameValue.length > 40) || (fNameValue.length < 2)) {
    console.log(fNameValue)
    fName.placeholder = 'Enter a name';
    errors++;
    if (focusError)
      fName.focus();
  }
  return errors;
}

//phone
const phone = formFirstF.elements.phone;
phone.addEventListener('blur', (eo) => phoneBlur(false));
function phoneBlur(focusError) {
  const phoneValue = phone.value;
  const phoneValid = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  let errors = 0;
  if (!(isPhoneValid(phoneValue))) {
    phone.placeholder = 'Enter a correct phone';
    errors++;
    if (focusError)
      phone.focus();
  }
  function isPhoneValid(value) {
    return phoneValid.test(value);
  }
  return errors;
}

//email
const emailName = formFirstF.elements.email;
emailName.addEventListener('blur', (eo) => emailBlur(false));
function emailBlur(focusError) {
  const emailValue = emailName.value;
  const emValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  let errors = 0;
  if (!(isEmailValid(emailValue))) {
    emailName.placeholder = 'Enter a correct email';
    errors++;
    if (focusError)
      emailName.focus();
  }
  function isEmailValid(value) {
    return emValid.test(value);
  }
  return errors;
}

//Comment
const bigTextName = formFirstF.elements.bigText;
bigTextName.addEventListener('blur', (eo) => bigTextBlur(false));
function bigTextBlur(focusError) {
  const bigTextValue = bigTextName.value;
  let errors = 0;
  if ((bigTextValue.length > 200) || (bigTextValue.length < 5)) {
    bigTextName.placeholder = 'Enter a comment';
    errors++;
    if (focusError)
      bigTextName.focus();
  }
  return errors;
}

//Privacy
const checkedName = formFirstF.elements.answer;
const checkedRedBorder = document.querySelector('#redborder');
checkedName.addEventListener('change', (eo) => checkedChange(false));
function checkedChange(focusError) {
  let errors = 0;
  if (checkedName.checked == false) {
    checkedRedBorder.style.borderBottom = '2px solid #FF2828';
    errors++;
    if (focusError)
      checkedName.focus();
  }
  else {
    checkedRedBorder.style.borderBottom = '';
  }
  return errors;
}

//Submit
formFirstF.addEventListener('submit', validateFirstF, false);

function validateFirstF(eo) {
  let errorsAll = 0;
  errorsAll += fNameBlur(!errorsAll);
  errorsAll += phoneBlur(!errorsAll);
  errorsAll += emailBlur(!errorsAll);
  errorsAll += checkedChange(!errorsAll);
  errorsAll += bigTextBlur(!errorsAll);
  if (errorsAll) {
    eo.preventDefault();
  }
}