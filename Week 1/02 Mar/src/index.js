import "../src/index.css";

import img from "../src/masai_logo.png"

const h1 = document.createElement('h1');
h1.textContent = "ToDo List";
h1.setAttribute('class', 'head');
const image = document.createElement('img');
image.setAttribute('class', 'img');
image.src = img;

document.getElementById('header').append(image, h1);

document.getElementById('enter').addEventListener('click', viewTable);

var arr = JSON.parse(localStorage.getItem('tableData')) || [];
appendData(arr);
function viewTable(){

    var obj = {
        date:date.value,
        scrum:scrum.value,
        dsa:dsa.value,
        code:code.value,
        skill:skill.value
    }

    arr.push(obj);
    localStorage.setItem('tableData', JSON.stringify(arr));
}

function appendData(arr){

    arr.map(function(e){

        var table_body = document.getElementById('table_body');

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        td1.textContent = e.date;

        var td2 = document.createElement('td');
        td2.textContent = e.scrum;

        var td3 = document.createElement('td');
        td3.textContent = e.dsa;

        var td4 = document.createElement('td');
        td4.textContent = e.code;

        var td5 = document.createElement('td');
        td5.textContent = e.skill;

        tr.append(td1, td2, td3, td4, td5);
        table_body.append(tr);
    })
}