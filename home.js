
  let userName=document.getElementById("name")
  let email=document.getElementById("email")
  let id=document.getElementById("id")
  let phone=document.getElementById("phone")
  let password=document.getElementById("password")
function validateInput(){
  // check for username
  if(userName.value===""){
    onError(userName, "Name cannot be empty")
  }
  else{
    onSuccess(name);
  }
  // check for email
  if(email.value===""){
    onError(email, "email cannot be empty")
  }
  else{
    onSuccess(email);
  }
  // check for id
  if(id.value===""){
    onError(id, "id cannot be empty")
  }
  else{
    onSuccess(id);
  }
  // check for phone
  if(phone.value===""){
    onError(phone, "phome cannot be empty")
  }
  else{
    onSuccess(phone);
  }
  // check for password
  if(password.value===""){
    onError(password, "password cannot be empty")
  }
  else{onSuccess(password);}
}
document.querySelector("button")
.addEventListener("click",(event)=>{
  event.preventDefault();
  validateInput();
}
