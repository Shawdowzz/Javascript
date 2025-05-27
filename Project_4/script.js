document.getElementById("btn").onclick = function(){
  let name = document.getElementById("username").value;
  let full = "Hello"+" " +name+" "+"!!";
  document.getElementById('box').textContent= full;
}