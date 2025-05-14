let x="Hello"
document.getElementById(`fd`).innerHTML=x;

let yourName ="Darshan";
document.getElementById(`w`).textContent=`your name is ${yourName}`;
let airplane=3;
airplane**=2;
document.getElementById(`w`).textContent =`${airplane}`;

let age;
age = window.prompt(`what is your age`);
document.getElementById(`e`).textContent =`${age}`;

let fav;
document.getElementById('sub').onclick = function(){
    fav =document.getElementById('input').value;
    document.getElementById('op').textContent =`${fav}`;
};
let Yourname = window.prompt(`your name is ?`);
Yourname = Number(Yourname);
Yourname+=1;
Yourname=Boolean(Yourname);
console.log(Yourname);

const place = 20;
place =23;
console.log(place);