
// Select all elements with class "circle"
const circles = document.querySelectorAll(".circle");
const pointer = document.querySelector("#pointer");
const page1 = document.querySelector(".page1");

page1.addEventListener("mousemove",(e)=>{
    var realX=e.clientX;
    var realY=e.clientY;
    gsap.to("#pointer",{
        x:realX,
        y:realY,
        duration:0.4
    })
})



// Iterate through each circle element
circles.forEach(circle => {
    // Add mouseover event listener
    circle.addEventListener("mouseover", () => {
        // Get the class name of the current circle element
        const className = circle.classList[1]; // Assuming the first class is the one we need

        document.getElementsByClassName(className)[0].style.display="none";
    });
});
