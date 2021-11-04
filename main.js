var delayInMilliseconds = 2000;
var delayInMilliseconds2 = 9000; //1 second

setTimeout(function() {
    startShowing();
    }, delayInMilliseconds);

    setTimeout(function() {
        startKeyShowing();
        }, delayInMilliseconds2);

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
        },250);
        }

function startShowing(){
    var elementToHide = document.getElementById("title-icon");
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 1)
        {
            clearInterval(intervalId);
        }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.03;
        }
    },250);
    }

