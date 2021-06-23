function validate(){
        var n=document.getElementById("n1").value;  
        var e=document.getElementById("e2").value;  
        var y=document.getElementById("y3").value;  
        var p=document.getElementById("p4").value;
        var m=document.getElementById("m5").value;

        //validation required before submiting form
    if(n1.value==''){
        alert("please enter your name");
        n1.focus();
        return false;
    }
    if(e2.value==''){
        alert("please enter your email");
        e2.focus();
        return false;
    }
    if(y3.value==''){
        alert("please enter your number")
        y3.focus();
        return false;
    }
    if(p4.value==''){
        alert("please enter your demo")
        p4.focus();
        return false;
    }
    if(m5.value==''){
        alert("please enter your Message")
        m5.focus();
        return false;
    }
    else{
        alert("Your message has been sent")
        return true;
    }
}