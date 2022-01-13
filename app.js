var student1 = {
    name: "Adeel",
    fatherName: "shakeel",
    rollNum: 01,
    contact: "0310 * * * * * * *",
    result: "Pass",
}


var student2 = {
    name: "mudassir ",
    fatherName: "malik",
    rollNum: 02,
    contact: "0330 * * * * * * *",
    result: "pass",
}

var student3 = {
    name: "moiz",
    fatherName: "annonymus",
    rollNum: 03,
    contact: "0300 * * * * * * *",
    result: "Fail",
}


var student4 = {
    name: "shakoor",
    fatherName: "annonymus",
    rollNum: 04,
    contact: "0330 * * * * * * *",
    result: "Fail",
}

var student5 = {
    name: "mursal",
    fatherName: "annonymus",
    rollNum: 05,
    contact: "0330 * * * * * * *",
    result: "Pass",
}





var table = document.getElementById("student")

var studentList = [student1,student2,student3,student4,student5]

for(var i=0; i < studentList.length;i++){
    var obj = studentList[i]

    table.innerHTML += '<tr><td>'+obj.name+'</td><td>'+obj.fatherName+'</td><td>'+obj.rollNum+'</td><td>'+obj.contact+'</td><td>'+obj.result+'</td></tr>'
}

function searchStd(){
    var inpVal = document.getElementById("inpVal")
    var stdname = document.getElementById("Name")
    var stdFatherName = document.getElementById("FatherName")
    var stdRollNum = document.getElementById("Rollnum")
    var stdContact = document.getElementById("Contact")
    var stdresult = document.getElementById("Result")

    for(var i = 0; i < studentList.length;i++){
        var std = studentList[i];
        if(inpVal.value == std.rollNum){
            console.log(std)
            stdname.innerHTML = std.name;
            stdFatherName.innerHTML = std.fatherName;
            stdRollNum.innerHTML = std.rollNum;
            stdContact.innerHTML = std.contact;
            stdresult.innerHTML = std.result
        }
    }
}
