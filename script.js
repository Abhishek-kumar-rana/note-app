const notesContaoner = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContaoner.innerHTML = localStorage.getItem("Notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("Notes",notesContaoner.innerHTML);
    console.log(localStorage.getItem("Notes"));
}

function clearStorage(){
    notesContaoner.innerHTML = null;
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "delete.png";
    notesContaoner.appendChild(inputBox).appendChild(img);
})

notesContaoner.addEventListener("click",function(e){
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === "P"){

        notes = document.querySelectorAll(".input-box");
        
        notes.forEach(nt => {
            nt.onkeyup = function(){
                // console.log("hiii");
                updateStorage();
            }
        })
    }
})

// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })



