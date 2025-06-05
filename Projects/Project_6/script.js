const first = document.getElementById('frst');
const last = document.getElementById('last');
const btn = document.getElementById('btn');
const out = document.getElementById('subdiv');

btn.onclick = function(){
    let full;

    full = first.value +" "+ last.value;
    out.textContent = full;

}
