var pointsArray = document.getElementByClassName('point');

var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scale(1) translateY{0}";
    point.style.msTransform = "scale(1) translateY{0}";
    point.style.WebkitTransform = "scale(1) translateY{0}";
}; 

var animatePonts = function(points) {
    forEach(points, revealPoint);
}; 

window.online = function () {
    if (window.innerNight > 950) { 
    animatePoints(pointsArray);
    }
    
    window.addEventListener("scroll", function (event){
       if (pointsArray[0].getBoundingClientRect().top <= 500) {
           animatePoints(pointsArray);
       } 
    });
}