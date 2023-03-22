var p=1;
window.onload=function(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            var x="b"+i.toString()+j.toString();
            fun(x);
        }
    }
}


function fun(x){
document.getElementById(x).onclick=function(){
var e=document.getElementById(x).innerHTML;
if(e==""){
if(p==1){
    document.getElementById (x).innerHTML="X";
    p=0;
    check();
}
else{
    document.getElementById (x).innerHTML ="O";
    p=1;
    check();
}
function check(){
    /*row*/
    for(var i=0;i<3;i++){
 var c0=document.getElementById("b"+i.toString() +"0").innerHTML;
 var c1=document.getElementById("b"+i.toString() +"1").innerHTML;
 var c2=document.getElementById("b"+i.toString() +"2").innerHTML;
              
    if (c0=="X"&&c1=="X"&&c2=="X")
    alert ("X WON THE GAME");
    if (c0=="O"&&c1=="O"&&c2=="O")
    alert ("0 WON THE GAME");
    }

    
    /*column*/
    for(var j=0;j<3;j++){
            var c0=document.getElementById("b0"+j.toString()).innerHTML ;
             var c1=document.getElementById("b1"+j.toString()).innerHTML;
              var c2=document.getElementById("b2"+j.toString()).innerHTML;
              
    if (c0=="X"&&c1=="X"&&c2=="X")
    alert ("X WON THE GAME");
    if (c0=="O"&&c1=="O"&&c2=="O")
    alert ("0 WON THE GAME");
    }
    
    /*diag*/
  var c0=document.getElementById("b00").innerHTML ;
  var c1=document.getElementById("b11").innerHTML ;
  var c2=document.getElementById("b22").innerHTML ;
    if (c0=="X"&&c1=="X"&&c2=="X")
    alert ("X WON THE GAME");
    if (c0=="O"&&c1=="O"&&c2=="O")
    alert ("0 WON THE GAME");
    }
    
    
    /*pdiag*/
    
   var c0=document.getElementById("b02").innerHTML ;
   var c1=document.getElementById("b11").innerHTML;
   var c2=document.getElementById("b20").innerHTML ;
    if (c0=="X"&&c1=="X"&&c2=="X")
    alert ("X WON THE GAME");
    if (c0=="O"&&c1=="O"&&c2=="O")
    alert ("0 WON THE GAME");
    }
}
}

