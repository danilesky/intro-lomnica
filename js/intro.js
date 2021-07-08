var slogan = document.getElementById('slogan')
var overlay = document.getElementById('intro_overlay')

var interval = 500;
var timer = 500;

const words = ["Tradície","Hravosť","Inovácie"]

function msieversion(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

var animationInterval = words.length*interval+interval;

window.addEventListener('load',function(){
    for(let i = 0;i < words.length;i++){
        this.setTimeout(function(){
            slogan.innerHTML = words[i]
        },timer)
        timer=timer+interval;
    }
    if(msieversion()){
        this.setTimeout(function(){
            overlay.classList.add("hideIE");
        },words.length*interval+interval)
    }
    else{
        this.setTimeout(function(){
            overlay.classList.add("hide");
        },animationInterval)
    }
})

