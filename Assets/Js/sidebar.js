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

