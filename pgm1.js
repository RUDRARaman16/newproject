//OBJECTS
//KEY VALUE PAIRS
//{ braces}
var employee={
    id:1000,
    name:"ajay",
    exp:2,
    salary:26000,
    location:"kakkanad"


}
//keys =>id,name,exp,salary,location
//fetching values using corresponding keys
console.log(employee["name"]);
console.log(employee["salary"]);


console.log(employee.name);
console.log(employee.salary);

//checking for gender key

console.log("gender" in employee);

//adding new key value pair
employee["gender"]="male";
console.log(employee);

//to UPDATE EMPLOYEE SALARY AS 5000 RS MORE
employee["salary"]+=5000
console.log(employee);

