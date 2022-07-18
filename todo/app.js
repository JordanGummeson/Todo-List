let form = document.querySelector('#form');
let list = document.querySelector('#list');
let string
form.addEventListener('keypress',submit);
list.addEventListener('click',remove);
list.addEventListener('click',cross);
list.innerHTML = JSON.parse(localStorage.getItem('savedList'));
//function used to cross out items on list
function cross(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('crossed');
        string = JSON.stringify(list.innerHTML);
localStorage.setItem('savedList',string);
}
}
//function used to remove items from list
function remove(e){
if(e.target.tagName === 'BUTTON'){
    e.target.parentElement.remove();
};
string = JSON.stringify(list.innerHTML);
localStorage.setItem('savedList',string);
}
//function to submit text inside input field with enter key
function submit(e){ 
if (e.key === 'Enter') {
    e.preventDefault();
    newli = document.createElement("li");
    let text = e.target.value;
    newli.appendChild(document.createTextNode(text));
    newBtn = document.createElement("button");
    newBtn.appendChild(document.createTextNode('X'));
    newli.appendChild(newBtn);
    list.appendChild(newli);
    e.target.value = '';
    string = JSON.stringify(list.innerHTML);
    localStorage.setItem('savedList',string);
};
}

