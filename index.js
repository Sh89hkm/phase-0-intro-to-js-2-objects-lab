// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
      ...employee,
      [key]: value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

console.log("Original Employee:", employee);

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "John");
console.log("Updated Employee (non-destructive):", updatedEmployee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log("Updated Employee (destructive):", employee);

let employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
console.log("Employee without Name (non-destructive):", employeeWithoutName);

destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without Street Address (destructive):", employee);
