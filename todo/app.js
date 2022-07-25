let form = document.querySelector('#form');
let list = document.querySelector('#list');
let text = document.querySelector('#text');

let position

form.addEventListener('submit',submit);
list.addEventListener('click',remove);
list.addEventListener('click',cross);

// retrieving from local storage
let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newli = document.createElement("li");

  newli.innerText = savedTodos[i].task;
  newli.dataset.position = savedTodos[i].position;
  
  if (savedTodos[i].crossed)  newli.classList.toggle('crossed');

  newBtn = document.createElement("button");
  newBtn.appendChild(document.createTextNode('X'));
  newli.appendChild(newBtn);

  list.appendChild(newli);
}

//function used to cross out items on list
function cross(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('crossed');

        if(savedTodos[e.target.dataset.position].crossed) savedTodos[e.target.dataset.position].crossed = false;
        else savedTodos[e.target.dataset.position].crossed = true;
        
        localStorage.setItem("todos", JSON.stringify(savedTodos));
}
}
//function used to remove items from list
function remove(e){
if(e.target.tagName === 'BUTTON'){

    let sibling

    savedTodos.splice(e.target.parentElement.dataset.position,1)

    if(e.target.parentElement.nextSibling){
        sibling = e.target.parentElement.nextSibling;
        for(i =e.target.parentElement.dataset.position;i<savedTodos.length;i++){
           
            sibling.dataset.position = sibling.dataset.position -1;
            sibling = sibling.nextSibling;

            if(savedTodos[i])savedTodos[i].position =savedTodos[i].position -1;

        }
        

    }
    
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    e.target.parentElement.remove();
};

}
//function to submit text inside input field
function submit(e){ 
    e.preventDefault();

    newli = document.createElement("li");
    newli.innerText = text.value;

    //saving to local storage
    if(savedTodos.length) position = savedTodos.length;
    else position = 0;


    savedTodos.push({ task: newli.innerText, crossed: false, position: position });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    newBtn = document.createElement("button");
    newBtn.appendChild(document.createTextNode('X'));
    newli.appendChild(newBtn);

    newli.dataset.position =  savedTodos.length -1 ;
    list.appendChild(newli);
    
    form.reset(); 


}

