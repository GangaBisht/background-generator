var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.querySelector(".gradient");
var button=document.querySelector(".random")



 function setGradient()
{
body.style.background="linear-gradient(to right, " + color1.value+" , "+ color2.value+")";

css.textContent=body.style.background;
}
color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
 
function random(){
    var hexcolor1="#" + Math.random().toString(16).slice(2, 8)    ;
    var hexcolor2="#" + Math.random().toString(16).slice(2, 8)    ;
    
    color1.value=hexcolor1;
    color2.value=hexcolor2;

    setGradient();
    
}

button.addEventListener("click",random);