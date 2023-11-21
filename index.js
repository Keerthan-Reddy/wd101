let userForm = document.getElementById("user-form");
let userEntries = [];

window.addEventListener("load", () => {
  const storedEntries = localStorage.getItem("user-entries");
  if (storedEntries) {
    userEntries = JSON.parse(storedEntries);
    updateTable();
  }
});

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndconditions =
    document.getElementById("acceptTerms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptedTermsAndconditions,
  };
  userEntries.push(entry);

  updateTable();
  localStorage.setItem("user-entries", JSON.stringify(userEntries));

  userForm.reset();
};

userForm.addEventListener("submit", saveUserForm);

const updateTable = () => {
  const tableBody = document.getElementById("user-entries-table-body");
  tableBody.innerHTML = ""; // Clear existing entries

  userEntries.forEach((entry) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">${entry.name}</td>
    <td class="px-6 py-4 whitespace-nowrap">${entry.email}</td>
    <td class="px-6 py-4 whitespace-nowrap">${entry.password}</td>
    <td class="px-6 py-4 whitespace-nowrap">${entry.dob}</td>
    <td class="px-6 py-4 whitespace-nowrap">${
      entry.acceptedTermsAndconditions ? "Yes" : "No"
    }</td>
  `;
    tableBody.appendChild(row);
  });
};
