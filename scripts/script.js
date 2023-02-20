$('#inputPhone').mask('(00)00000-0000');

var students = [];

function saveStudent(){
    

    var newStudent = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        course: document.getElementById("inputCourse").value,
        turn: document.getElementsByName("RadioDefault").value
    };

    
    students.push(newStudent);
    newRow(newStudent);
}


function newRow(students){

    var table = document.getElementById("table");
    let newRow = table.insertRow();


    var idNode = document.createTextNode(students.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(students.name);
    newRow.insertCell().appendChild(nameNode);
    
    var emailNode = document.createTextNode(students.email);
    newRow.insertCell().appendChild(emailNode);

    var phoneNode = document.createTextNode(students.phone);
    newRow.insertCell().appendChild(phoneNode);

    var courseNode = document.createTextNode(students.course);
    newRow.insertCell().appendChild(courseNode);

    var turnNode = document.createTextNode(students.turn);
    newRow.insertCell().appendChild(turnNode);

}