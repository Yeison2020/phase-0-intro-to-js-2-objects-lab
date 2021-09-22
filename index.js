// Write your solution in this file!
const employees = {
  name: "Yeison",
  streetAddress: "Juan de los palotes",
};

function updateEmployeeWithKeyAndValue(employees, key, value) {
  let newObj = { ...employees };
  newObj[key] = value;
  return newObj;
}
//===============================================

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return Object;
}
//=====================================================
function deleteFromEmployeeByKey(dataObject, key) {
  let newObj = { ...dataObject };
  let cleamVersion = delete newObj[key];
  return cleamVersion;
}
//========================================================
function destructivelyDeleteFromEmployeeByKey(object, key) {
  const clean = delete object[key];
  return clean;
}
