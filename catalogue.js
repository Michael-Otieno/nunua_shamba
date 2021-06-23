
// Form validation code will come here.
function validate() {
    var mail= document.getElementById('pmail');
    var uName= document.getElementById('pname');
    var idNo = document.getElementById('pid');
    var titledeed = document.getElementById('tdeed');
    var location= document.getElementById('location');

   if(mail== '' ) {
      alert( "Please provide your name!" );
      mail.focus() ;
      return false;
   }
   if( uName== '' ) {
      alert( "Please provide your Email!" );
      uName.focus() ;
      return false;
   }
   if( idNo == '' || ( document.myForm.ID.value ) ||
      document.myForm.ID.value.length != 5 ) {
      
      alert( "Please provide  National id" );
      idNo.focus() ;
      return false;
   }
   
   if( titledeed == '' ) {
    alert( "Please provide Title deed" );
    return false;
 }
 if( location== '' ) {
    alert( "Please provide Your location" );
    return false;
 }
   return( true );
}
