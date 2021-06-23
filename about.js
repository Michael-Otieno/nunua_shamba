function validate(){
        var n=document.getElementById("n1").value;  
        var e=document.getElementById("e2").value;  
        var p=document.getElementById("y3").value;  
        var cp=document.getElementById("p4").value;
        var n=document.getElementById("m5").value;

        //validation required before submiting form
    if(n1==''||e2==''||y3==''||p4==''||m5==''){
        alert("please enter your details")
    }
    else{
        alert("Your message has been sent")
    }
}