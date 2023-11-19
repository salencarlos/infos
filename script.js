let screenHeight = screen.height;
let screenWidth = screen.width;



if(screenWidth < 1290 && screenHeight > 780) {
    alert("Width: "+screenWidth+"\n"+"Height: "+screenHeight +"\n"+"Some of the content may not work properly because you're using a smaller screen resolution device, for better experience of viewing, use at least 1300px for the width and 700px for the height or higher.")
} 



var typed = new Typed(".auto-type", {
    strings: [ "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev", "Web Developer", "Free lancer", "Full Stack  Web Dev"],
    loop:true,
    typeSpeed: 30,
    backSpeed: 15,
    loop: true
})

document.querySelector('body').addEventListener('mousemove',
    eyeball);

function eyeball() {
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.
            clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.
            clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)"
    });
}


