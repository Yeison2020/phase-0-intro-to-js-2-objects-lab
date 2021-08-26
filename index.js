// Write your solution in this file!
const employees = {
    name: 'Yeison', 
    streetAddress: 'Juan de los palotes'
}

function updateEmployeeWithKeyAndValue(employee,key, value){
const newObject = {...employee,[key]:value}

return newObject;

}



function destructivelyUpdateEmployeeWithKeyAndValue(Object,key,value){
    Object[key ]= value;

    return Object;
}



function deleteFromEmployeeByKey(Object,key){
    const newObj = [...Object];
    const cleamVersion = delete newObj[key];
    return cleamVersion;
}

function destructivelyDeleteFromEmployeeByKey(Object,key){
    const clean = delete Object[key];
    return clean;
}