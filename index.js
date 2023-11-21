let userForm = document.getElementById("user-form");
let userEntries = [];
const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndconditions =
    document.getElementById("acceptTerms").checked;
  const entry = { name, email, password, dob, acceptedTermsAndconditions };
  userEntries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));
};
userForm.addEventListener("submit", saveUserForm);
