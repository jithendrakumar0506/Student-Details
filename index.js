let students = [
    {name: "Kiran", age:21},
    {name: "Uday", age:20},
    {name: "Shree", age:19},
    {name: "Surya",age:23}
];
function displayStudents(){
    const list = document.getElementById("studentList");
     list.innerHTML = "";

students.forEach((student, index) =>{
    let li= document.createElement("li");
    li.textContent = `${index + 1} | ${student.name} - Age: ${student.age}`;
    list.appendChild(li);
});
} 
function sortByName(){
    students.sort((a,b) => a.name.localeCompare(b.name));
    displayStudents();
}
function sortByAge(){
    students.sort((a,b) => a.age - b.age);
    displayStudents();
}