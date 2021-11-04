const introcontainer = document.querySelector('#intro-container');
const titlemusic = document.querySelector('#title-music');
var delayInMilliseconds = 2000;
var delayInMilliseconds2 = 10000;
var titlecounter = 0;

setTimeout(function() {
    startShowing();
    }, delayInMilliseconds);

    setTimeout(function() {
        startKeyShowing();
        }, delayInMilliseconds2);

    setTimeout(function () {
        introcontainer.click();
        hideTitlescreen();        
    }, 10000);

    function startKeyShowing(){
        var idToHide = document.getElementById("start-game");
        idToHide.style.opacity = 0;
        var intervalId = setInterval(function(){
            if(idToHide.style.opacity >= 1)
            {
                clearInterval(intervalId);
            } else{
                idToHide.style.opacity = parseFloat(idToHide.style.opacity) + 0.05;
            }
        },100);
        }

function startShowing(){
    var elementToHide = document.getElementById("title-icon");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 1)
        {
            clearInterval(intervalId);
        }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.02;
        }
    },100);
    }

    
    function hideTitlescreen(e) {
        if(titlecounter >= 1){
            console.log("Already exited from title screen!")
            return 
        }
        introcontainer.addEventListener('keyup', hideTitlescreen);
        if (e.keyCode === 32 || e.key === ' ') {
            //your code
            introcontainer.style.opacity = 1;
            var intervalId = setInterval(function(){
                if(introcontainer.style.opacity <= 0)
                {
                    clearInterval(intervalId);
                }else{
                    introcontainer.style.opacity = parseFloat(introcontainer.style.opacity) - 0.1;
                }
            },50);
        }
        titlecounter = titlecounter+1
    }