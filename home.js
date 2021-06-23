function create(){
  var n=document.getElementById("name").value
  var e=document.getElementById("email").value
  var i=document.getElementById("id").value
  var t=document.getElementById("phone").value
  var p=document.getElementById("password").value

  if(name.value==''){
      alert('Name cannot be blank')
      name.focus()
  }
  if(email.value== ''){
    //show error
    alert('email cannot be blank');
    email.focus();
    document.getElementById('error').innerHTML = 'Error'
    return false;
  }
  if(id.value == ''){
    //show error
    alert('id cannot be blank');
    id.focus();
    return false;
  }
  if(phone.value == ''){
    //show error
    alert('phone cannot be blank');
    phone.focus();
    return false;
  }
  if(password.value.length <= 6){
    //show error
    alert('password cannot be less than 6 characters');
    password.focus();
    return false;
  }
  else{
      alert('Your message has been sent')
      return true;
  }
 }