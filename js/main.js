var nameInput=document.getElementById("name")
var firstEmailInput=document.getElementById("email")
var firstpasswordInput=document.getElementById("password")
var emailInput=document.getElementById("Email")
var passwordInput=document.getElementById("Password")
let users=[]
function adduser(){
    var nameInputvalue=nameInput.value
    var emailInputvalue=firstEmailInput.value
    var passwordInputvalue=firstpasswordInput.value
    users.push(adduser)
    console.log(users)
}
adduser()