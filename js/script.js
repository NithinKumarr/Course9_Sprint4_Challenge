let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote() {
    let textsave=document.querySelector("#textBox").value;
    if(textsave!="" || textsave!=null){
        let note={
            text:textsave
        };
        noteList.push(note);
        console.log(noteList);
        
        alert("Form submitted");
        document.querySelector("form").reset();
        return false;
    }
}   

function fetchNotes() {
    let div1=document.querySelectorAll("section")
    for(let i=0;i<div1.length;i++)
    {
        div1[i].remove();
    }
    noteList.forEach(element => {
        let div=document.createElement("section");
        div.style.border="2px solid black";
        div.style.width="300px";
        let myBody=document.querySelector("body");
        myBody.appendChild(div);
        let para=document.createElement("p");
        let mypara=document.createTextNode(element.text);
        
        para.appendChild(mypara);
        div.appendChild(para);
        let myBtn = document.createElement("button");
        let btnText = document.createTextNode("Delete User");
        myBtn.appendChild(btnText);
        myBtn.addEventListener('click', function(){
            deleteUser(element.text)
        })
        div.appendChild(myBtn);
    });
}
function deleteUser(text){
    noteList.splice(text, 1);
    fetchNotes();
console.log(noteList);
}


// function loadNoteData() {
    
// }

// function updateNoteData(note) {
    
// }

// function createNoteCard(note) {
    
// }

// function toggleView() {
    
// }