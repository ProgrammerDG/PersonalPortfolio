document.getElementById("hamburgerBtn").addEventListener("click",()=>{
    document.getElementById("navHamDisplayDiv").classList.toggle("navHamDisplayDiv");
});

document.getElementById("navHamDisplayCloseBtn").addEventListener("click",()=>{
    document.getElementById("navHamDisplayDiv").classList.toggle("navHamDisplayDiv");
});

function carouselPlay(){
    var img = document.getElementById("carouselImg");
    setInterval(()=>{
        var src = img.getAttribute("src");
        if (src=="images/navImg1.jpg"){
            img.setAttribute("src","images/navImg2.jpg");
        }else if(src=="images/navImg2.jpg"){
            img.setAttribute("src","images/navImg3.png");
        }else{
            img.setAttribute("src","images/navImg1.jpg");
        }
    },8000)
}
carouselPlay();
