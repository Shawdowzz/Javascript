let len;
let br;
let area
document.getElementById(`sub`).onclick= function(){
    len = document.getElementById(`length`).value;
    br =document.getElementById(`breadth`).value;
    area = len * br;
    document.getElementById(`area`).textContent = `The area of rectangle :${area}`;

}