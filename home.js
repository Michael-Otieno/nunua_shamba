  let userName=document.getElementById("pdUserName");
  let email=document.getElementsByClassName("pdEmail");
  let identification=document.getElementById("pdID");
  let phone=document.getElementById("pdPhone");
  let password=document.getElementsByClassName("pdPassword");
  let form=document.querySelector("form");
  
function validateInput(){
   console.log("validate input");
  // check for username
  if(userName.value===""){
    onError(userName,"Name cannot be empty")
  }
  else{
    onSuccess(userName);
  }
  // check for email
  if(email.value.trim()===""){
    onError(email,"email cannot be empty")
  }
  else{
    onSuccess(email);
  }
  // check for id
  if(identification.value.trim()===""){
    onError(id,"id cannot be empty")
  }
  else{
    onSuccess(id);
  }
  // check for phone
  if(phone.value.trim()===""){
    onError(phone,"phome cannot be empty")
  }
  else{
    onSuccess(phone);
  }
  // check for password
  if(password.value.trim()===""){
    onError(password,"password cannot be empty")
  }
  else{onSuccess(password);}
}
document.querySelector("button")
.addEventListener("click",(event)=>{
  event.preventDefault();
  validateInput();
});

function onSuccess(input,input){
 let parent=input.parentElement;
 let messagesEle=parent.querySelector("small");
 messagesEle.style.visibility="hidden";
 messagesEle.innerText="";
 parent.classList.add("success");
 parent.classList.remove("error");
}
function onError(input,message){
  let parent=input.parentElement;
  let messagesEle=parent.querySelector("small");
  messagesEle.style.visibility="visible";
  messagesEle.innerText=message;
  parent.classList.add("error");
  parent.classList.remove("success");
}
