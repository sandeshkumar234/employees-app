
function storeEmployeeInLocalStorage(employee) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const age = parseInt(form.age.value.trim(), 10);
  const country = form.country.value.trim();
  const contact = form.contact.value.trim();
  const designation = form.designation.value.trim();

  if (!name || !age || !country || !contact || !designation) {
    alert('Please fill in all fields.');
    return;
  }

  if (isNaN(age) || age <= 0) {
    alert('Please enter a valid age.');
    return;
  }

  if (isNaN(contact) || contact.length !== 11) {
    alert('Please enter a valid 11-digit contact number.');
    return;
  }

  const employee = {
    name,
    age,
    country,
    contact,
    designation,
  };

  console.log(employee);

  storeEmployeeInLocalStorage(employee);
  window.location.href = "index.html";
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);