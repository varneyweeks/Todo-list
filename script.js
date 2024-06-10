const inputbox= document.getElementById("input-field");
const listcontainer = document.getElementById("List-container");

function addTask(){
    if(inputbox.value===''){
        alert("Please enter a task");
    }else{
        const li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputbox.value= "";
    savedata()
}
listcontainer.addEventListener('click', e =>{
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        savedata()
        } 
        else if(e.target.tagName ==='LI') {
            e.target.classList.toggle("checked");
            savedata()
        }
}, false)

function savedata(){
    localStorage.setItem("data" , listcontainer.innerHTML)

}
function showtask(){
    listcontainer.innerHTML = localStorage.getItem("data");

}
showtask();