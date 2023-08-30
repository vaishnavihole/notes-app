const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");



function upadteStorage() {
   localStorage.setItem("notes", notesContainer.innerHTML)
}


createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        upadteStorage();
    }
    else if (e.target.tagName === "p"){
       notes = document.querySelectorAll(".input-box"); 
       notes.forEach(nt => {
        nt.onkeyup = function() {
         upadteStorage();
        }
       })
    }
})











// function Test()
// {
//     element = document.querySelector(".notes-container");
//     element.innerHTML =  `
//         <p contenteditable="true" class="input-box">
//             <img src="images/delete.png">
//         </p>`
// }