function showSidebar() {
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("sidebar").style.transform = "translateX(0)";
    document.getElementById("sidebar").style.transition = "transform 0.3s ease-in-out";
}

function hideSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("sidebar").style.transform = "translateX(100%)";
    document.getElementById("sidebar").style.transition = "transform 0.3s ease-in-out"; 
}

// =======================================================================================================================================================

// uparrow 

let calcscrollValue = () => {
    let scrollProgress = document.getElementById("scroll-Arrow");
    let progressValue = document.getElementById("uparrow");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if(pos>100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display= "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--primary-color) ${scrollValue}%, var(--secondary-color) ${scrollValue}%)`;
}
window.onscroll = calcscrollValue;
window.onload = calcscrollValue;

// =======================================================================================================================================================

// Dark theme
var icon = document.getElementById("MS");
theme.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        MS.src = "./Assets/images/Theme/sun.png";
    }else{
        MS.src = "Assets/images/Theme/moon.png";
    }
}
