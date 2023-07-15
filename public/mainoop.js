//This is where you put the code that reaches out to the server to send information back and forth.
//Info can travel back and forth using using fetches.
class addEvent{
    constructor(target,callback){
        this.target = target;
        this.callback = callback;
    }
    addEvent(){
        if(this.target.length > 1){
            Array.from(this.target).forEach((el)=>{
                el.addEventListener('click', this.callback)
            })
        }else{
            this.target.addEventListener('click',this.callback);
        }
    }
}

class dashboardManagement{
    constructor(path,method,body){
        this.path = path;
        this.method = method;
        this.body = body;
    }
    async deleteData(){
        const dataId = this.dataset.id;
        try{
            const response = await fetch(`${this.path}`, {
                method: `${this.method}`,
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(this.body)
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
    editData(){

    }
}

const dashboard = {
    menuDiv: document.querySelector('#menuDiv'),
    userImg: document.querySelector('#userPicture'),
    delTodoBtn: document.querySelectorAll('.delTodoBtn'),
    todoManagement: new dashboardManagement('dashboard/deleteTodo','delete',{
        'todoIdFromJSFile': todoId
    }),
    hideOnClick: function(){
       if(dashboard.menuDiv.style.display!='none'){
        dashboard.menuDiv.style.display = 'none';
        }else {
            dashboard.menuDiv.style.display = 'block';
        } 
    },
    dashboardInit: function(){
        new addEvent(dashboard.userImg,dashboard.hideOnClick).addEvent();
        new addEvent(dashboard.delTodoBtn,dashboard.todoManagement.deleteData).addEvent();
    }
}
/* Dashboard.ejs */
dashboard.dashboardInit();


