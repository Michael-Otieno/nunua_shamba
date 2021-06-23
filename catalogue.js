
// Form validation code will come here.
function validate() {
    var mail= document.getElementById('pmail');
    var uName= document.getElementById('pname');
    var idNo = document.getElementById('pid');
    var titledeed = document.getElementById('pdeed');
    var location= document.getElementById('location');

   if(mail.value.trim() == '' ) {
      alert( "Please provide your Email!" );
      mail.focus() ;
      return false;
   }
   if( uName.value.trim() == '' ) {
      alert( "Please provide your Name!" );
      uName.focus() ;
      return false;
   }
   if( idNo.value.trim() == '' ) {
      
      alert( "Please provide  National id!" );
      idNo.focus() ;
      return false;
   }
   if(titledeed.value.trim() == '' ) {
    alert( "Please provide your Title deed!" );
    titledeed.focus() ;
    return false;
    } 
   
 if(location.value.trim() == '' ) {
    alert( "Please provide Your location!" );
    location.focus();
    return false;
   }
   

   alert('Thank you'+ uName.value)
   return true;
   window.location.href="catalogue.html"
}


