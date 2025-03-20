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

// =======================================================================================================================================================

// logo & About profile change on dark theme

function changelogo(){
    var img = document.getElementById("logo");
    var luffy = document.getElementById("luffy");
    if(document.body.classList.contains("dark-theme")){
        img.src = "./Assets/images/logo-removebg-preview.png";
        luffy.src = "./Assets/images/aboutme/Luffy_Icons-removebg-preview.png";
    }else{
        img.src = "./Assets/images/image (1).png";
        luffy.src = "./Assets/images/aboutme/Monkey_D__Luffy-removebg-preview.png";
        // luffy.src = "./Assets/images/aboutme/ʟᴜғғʏ-removebg-preview.png";
        // luffy.src = "./Assets/images/aboutme/download__1_-removebg-preview.png";
        // luffy.src = "./Assets/images/aboutme/download__2_-removebg-preview.png";
        // luffy.src = "./Assets/images/aboutme/download__3_-removebg-preview.png";
        // luffy.src = "./Assets/images/aboutme/kaizoku-oou_mugiwara_no_luffy-removebg-preview.png";
    }
}

// =======================================================================================================================================================

// contact form

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            alert("Form submitted successfully!");
            this.reset(); 
        } else {
            alert("Error submitting the form!");
        }
    })
    .catch(error => console.error("Error:", error));
});