var student ={
   roll_no:100,
   name:"vinu",
   course:"BCA",
   total:150,

}
// console.log(student.name);
// console.log("gradekey" in student);
// student["grade"]="Bplus"
// console.log(student);
// student['total']+=50
// console.log(student);

for (let key in student){
    console.log(key);
    console.log(student[key]);//student[roll_no],student[name]
}