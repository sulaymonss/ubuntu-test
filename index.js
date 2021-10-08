const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elTodoList = document.querySelector('#todo__list');

elForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    addToDo();
})

function addToDo(){
    const inputValue = input.value;
    
    if(inputValue){
        const todoItem = document.createElement('li');
        const closeBtn = document.createElement('button');
        
        todoItem.innerText = inputValue;
        closeBtn.setAttribute('type', 'button');
        closeBtn.setAttribute('class', 'fas fa-times');
        
        todoItem.addEventListener('click', () =>{
            todoItem.classList.toggle('completed');
        })
        
        closeBtn.addEventListener('click', () =>{
            todoItem.remove()
        })
        
        todoItem.appendChild(closeBtn)
        elTodoList.appendChild(todoItem);
        
        elInput.value = '';
    }
}
