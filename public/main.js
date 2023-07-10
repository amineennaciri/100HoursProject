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
/* Todo.ejs */
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