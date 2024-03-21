var playername=prompt("Enter Your Name");
document.getElementById("pname").innerText=playername;

// Select all elements with class "circle"
const circles = document.querySelectorAll(".circle");
const pointer = document.querySelector("#pointer");
const page1 = document.querySelector(".page1");
const score = document.querySelector("#score");
const msg = document.querySelector("#msg");

page1.addEventListener("mousemove",(e)=>{
    var realX=e.clientX;
    var realY=e.clientY;
    gsap.to("#pointer",{
        x:realX,
        y:realY,
        duration:0.4
    })
})


let currscore=0;
// Iterate through each circle element
circles.forEach(circle => {
    // Add mouseover event listener
    circle.addEventListener("mouseover", () => {
        // Get the class name of the current circle element
        const className = circle.classList[1]; // Assuming the first class is the one we need
        if(className=="c2" ||className=="c4" ||className=="c6" ||className=="c8" ||className=="c10" ||className=="c12" ||className=="c14" ||className=="c16"){
            currscore++;
            score.innerText=currscore;
            msg.innerText="Good";
        }else{
            currscore--;
            score.innerText=currscore;  
            if(currscore<0){
                msg.innerText="Very Poor Condition";
            }else if(currscore<2){
                msg.innerText=" Poor Condition";

            }else if(currscore<4){
                msg.innerText="You Can do Better";
            }

        }

        document.getElementsByClassName(className)[0].style.display="none";
        document.getElementsByClassName(className)[0].classList.add("done");
        if(finishedgame()){
            let finish=playername+" Your Current Score is "+currscore;
            alert(finish);
            location.reload();
        }
    });
});

// alert(finishedgame());


function finishedgame(){
    const flag=true;
    let winnerarr= document.querySelectorAll(".circle:nth-child(even)");
    winnerarr.forEach(win=>{
        
        if(!win.classList.contains("done")){
            flag=false;
            
        }
    });
    return flag;
}
