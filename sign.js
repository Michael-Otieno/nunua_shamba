let email2=document.getElementsByClassName("pdEmail2");
let password2=document.getElementsByClassName("pdPassword2");
let form=document.querySelector("forms")

function validateInput(){
  console.log("validate input");}

  // check for email
  if(email2.value===""){
    onError(email2,"email cannot be empty")
  }
  else{
    onSuccess(email2);
  }
  // check for password
  if(password2.value===""){
    onError(password2,"password cannot be empty")
  }
  else{onSuccess(password2);}
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
  