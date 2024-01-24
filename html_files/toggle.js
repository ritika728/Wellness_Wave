var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun-icon.png";
    }else{
        icon.src="moon-icon2.jpg";
    }
}