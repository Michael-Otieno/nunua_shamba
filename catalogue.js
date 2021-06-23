
// Form validation code will come here.
function validate() {
    var mail= document.getElementById('pmail');
    var uName= document.getElementById('pname');
    var idNo = document.getElementById('pid');
    var titledeed = document.getElementById('tdeed');
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
   if( idNo.value.trim() == '' || ( document.myForm.ID.value ) ||
      document.myForm.ID.value.length (x) || x < 1 || x > 10 ) {
      
      alert( "Please provide  National id!" );
      idNo.focus() ;
      return false;
   }
   
   if( titledeed.valu.trim() == '' ) {
    alert( "Please provide Title deed!" );
    titledeed.focus();
    return false;
 }
 if( location.value.trim() == '' ) {
    alert( "Please provide Your location!" );
    location.focus();
    return false;
 }
   return( true );
}
