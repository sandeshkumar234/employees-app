const employeesList = document.querySelector(".employees-list");

function getEmployeesFromLocalStorage(key) {
  const jsonStr = localStorage.getItem(key);
  return jsonStr ? JSON.parse(jsonStr) : null;
}

function createEmployeeCard(employee) {
  const div = document.createElement("div");
  div.classList.add("employee-card");
  div.innerHTML = `
    <h3 class="name">Name: ${employee.name}</h3>
    <p class="country">Country : ${employee.country}</p>
    <p class="age">Age: ${employee.age}</p>
    <p class="contact">Number: ${employee.contact}</p>
    <p class="designation">Designation: ${employee.designation}</p>
  `;
  return div;
}

window.addEventListener("load", (e) => {
  const employees = getEmployeesFromLocalStorage("employees");

  if (employees && employees.length > 0) {
    employees.forEach((employee) => {
      const card = createEmployeeCard(employee);
      employeesList.appendChild(card);
    });
  } else {
    employeesList.textContent = "No employees to show";
  }
});