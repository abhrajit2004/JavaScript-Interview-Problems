function saveNoteToLocalStorage(note) {
    localStorage.setItem("note",note);
}

let note = localStorage.getItem("note");

if(note){
    document.querySelector(".note").innerHTML = "Your Note : " + note;
}

document.querySelector("button").addEventListener("click",()=>{
    let note = prompt("Enter your note");
    saveNoteToLocalStorage(note);
    document.querySelector(".note").innerHTML = "Your Note : " + note;
})