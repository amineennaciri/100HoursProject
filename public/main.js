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