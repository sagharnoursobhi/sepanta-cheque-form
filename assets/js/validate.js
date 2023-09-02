const form = document.getElementById("form");
const nameProject = document.getElementById("name");
const start = document.getElementById("start");
const end = document.getElementById("end");
const bank = document.getElementById("bank");
const bail = document.getElementById("bail");
const cheque = document.getElementById("cheque");
const date = document.getElementById("return-date");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const nameValue = nameProject.value.trim();
  const startValue = start.value;
  const endValue = end.value.trim();
  const bailValue = bail.value.trim();
  const bankValue = bank.value.trim();
  const chequeValue = cheque.value.trim();
  const dateValue = date.value.trim();
//   const passwordValue = password.value.trim();
//   console.log(phoneValue);
  if (nameValue === "") {
    setError(nameProject, "نام پروژه را وارد نمایید");
  } else {
    setSuccess(nameProject);
  }

  if (startValue === "") {
    setError(start, "تاریخ شروع را وارد کنید");
  } else {
    setSuccess(start);
  }

  if (endValue === "") {
    setError(end, "تاریخ پایان را وارد کنید");
  } else {
    setSuccess(end);
  }
  if (dateValue === "") {
    setError(date, "تاریخ مقرر را وارد کنید");
  } else {
    setSuccess(date);
  }

  if (bankValue === "") {
    setError(bank, "بانک را انتخاب کنید");
  }
   else {
    setSuccess(bank);
  } 

  if (bailValue === "") {
    setError(bail, "نوع ضمانت را انتخاب کنید");
  }
   else {
    setSuccess(bail);
  }

  if (chequeValue === "") {
    setError(cheque, "شماره چک را وارد کنید");
  }
   else {
    setSuccess(cheque);
  }




//   if (passwordValue === "") {
//     setError(password, "رمز عبور    را وارد کنید");
//   }
//   else if(passwordValue.length<6){
//       setError(password,'طول رمز عبور حداقل 6 کاراکتر می باشد')
//   }
//    else {
//     setSuccess(password);
//   }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const span = formControl.nextElementSibling;
  span.classList.remove('d-none')
  span.innerHTML = message;
  formControl.classList.add('error');
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const span = formControl.nextElementSibling;
    span.classList.add('d-none')
    formControl.classList.add('success');
}

function isNameProject(nameProject) {
  const ar = nameProject.split(" ");
  if (ar.length > 1) {
    return true;
  }
}

const phonePattern = /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/;

function isPhone(phone) {
  return phonePattern.test(phone);
}

const emailPattern =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isEmail(email) {
  return emailPattern.test(email);
}
