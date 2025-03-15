const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const output = document.querySelector('.output');
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.appendChild(deleteButton);
list.appendChild(li);
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {}
 });
 deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
    input.value ='';
 })
 