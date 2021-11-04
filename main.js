var delayInMilliseconds = 2000; //1 second

setTimeout(function() {
    startShowing();
    }, delayInMilliseconds);

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