
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function ()
    {
       var inht=this.innerHTML;
       makeSound(inht);
        
    });
}
document.addEventListener("keydown",function(event){ makeSound(event.key)});
function makeSound(key)
{
    switch (key) {
        case "w":
            var a=new Audio('sounds/crash.mp3');
            a.play();
        break;
        case "a":
            var ab=new Audio('sounds/kick-bass.mp3');
            ab.play();
        break;
        case "s":
            var a=new Audio('sounds/snare.mp3');
            a.play();
        break;
        case "d":
            var a=new Audio('sounds/tom-1.mp3');
            a.play();
        break;
        case "j":
            var a=new Audio('sounds/tom-2.mp3');
            a.play();
        break;
        case "k":
            var a=new Audio('sounds/tom-3.mp3');
            a.play();
        break;
        case "l":
            var a=new Audio('sounds/tom-4.mp3');
            a.play();
        break;
            
        default:
            console.log(this.innerHTML);
    }
}