function openNavMenu(){
    document.getElementById("menu-nav").style.display = "flex";
    document.getElementById("menu-shadow").style.display = "block";
    document.getElementsByTagName("header")[0].style.display = "none";
}

function closeNavMenu(){
    document.getElementById("menu-nav").style.display = "none";
    document.getElementById("menu-shadow").style.display = "none";
    document.getElementsByTagName("header")[0].style.display = "flex";
}