//This is where you put the code that reaches out to the server to send information back and forth.
//Info can travel back and forth using using fetches.

/* Dashboard.ejs */
const menuDiv = document.querySelector('#menuDiv');
const userImg = document.querySelector('#userPicture');
userImg.addEventListener('click', hideOnClick);
function hideOnClick(){
    if(menuDiv.style.display!='none'){
        menuDiv.style.display = 'none';
    }else {
        menuDiv.style.display = 'block';
    }
}
/* ************* */
/* Todo.ejs delete*/
const delTodoBtn = document.querySelectorAll('.delTodoBtn');

Array.from(delTodoBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

async function deleteTodo(){
    const todoId = this.dataset.id;
    try{
        const response = await fetch('dashboard/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
/* *********** */
/* Todo.ejs edit*/
const editTodoBtn = document.querySelectorAll('.editTodoBtn');
const parentNodeDiv = document.querySelector('.main-content');
Array.from(editTodoBtn).forEach((el)=>{
    el.addEventListener('click', modifyDashboard)
})

function modifyDashboard(){
    const todoId = this.dataset.id;
    // delete all todos from the UI
    while (parentNodeDiv.firstChild) {
        parentNodeDiv.removeChild(parentNodeDiv.firstChild);
    };
        let newElement = document.createElement("div");
        //newElement.classList.add("mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8");
        newElement.innerHTML = `
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <label for="price" class="block text-xl font-medium leading-6 text-gray-900 mb-4">Todo</label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input type="text" name="todo" id="todo" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Edit your task">
        </div>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <!-- Your content -->
            </div>
        </main>
        <label class="block text-xl font-medium leading-6 text-gray-900 mb-4">Edit the urgency of your task</label>
        <div class="flex items-center gap-x-3">
            <input id="urgency" name="urgency" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="Most Important Task" checked>
            <label for="urgency" class="block text-sm font-bold leading-6 text-gray-900 text-urgentTaskColor">Most Important Task</label>
            <p class="text-gray-500">This is the most important task you need to accomplish today.</p>
        </div>
        <div class="flex items-center gap-x-3">
            <input id="urgency" name="urgency" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="Primary Task">
            <label for="urgency" class="block text-sm font-bold leading-6 text-gray-900 text-primaryTaskColor">Primary Task</label>
            <p class="text-gray-500">These are the urgent / important tasks that you need to accomplish today.</p>
        </div>
        <div class="flex items-center gap-x-3">
            <input id="urgency" name="urgency" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="Secondary Task">
            <label for="urgency" class="block text-sm font-bold leading-6 text-gray-900 text-secondaryTaskColor">Secondary Task</label>
            <p class="text-gray-500">These tasks are potentially important / urgent for you to accomplish today.</p>
        </div>
        <div class="flex items-center gap-x-3">
            <input id="urgency" name="urgency" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" value="Reminders for Later">
            <label for="urgency" class="block text-sm font-bold leading-6 text-gray-900 text-reminderTaskColor">Reminders for Later</label>  
            <p class="text-gray-500">Set a reminder for a task that you did not finish which should be addressed    either tomorrow, on the weekend or next week.</p>  
        </div>  
        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900" id="cancelAddTodo">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 SaveBtn" id='${todoId}'>Save</button>
        </div>
    </div>
        `;

    // Step 4: Append the new element to the parent element
    parentNodeDiv.appendChild(newElement);
    const saveBtn = document.querySelector('.SaveBtn');
    saveBtn.addEventListener('click', editTodo);
    const cancelAddTodoBtn = document.querySelector('#cancelAddTodo');
    cancelAddTodoBtn.addEventListener('click',cancelAddTodoFunction);
}
async function editTodo(){
    const todoId = this.id;
    const todoInput = document.querySelector('#todo').value;
    const todoUrgency = document.querySelector('input[type="radio"]:checked').value;
    try{
        const response = await fetch('dashboard/updateTodo', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId,
                'todoInputFromJSFile': todoInput,
                'todoUrgencyFromJSFile': todoUrgency
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
/* *********** */
/*todo.ejs cancel button*/
const cancelAddTodoBtn = document.querySelector('#cancelAddTodo');
cancelAddTodoBtn.addEventListener('click',cancelAddTodoFunction);
function cancelAddTodoFunction(){
    document.querySelector('#todo').value = '';
    document.querySelectorAll('#urgency')[0].checked = 'true';
}