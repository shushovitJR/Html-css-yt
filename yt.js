
function togglemenu() {
    var sidebar = document.getElementById("mySidebar");
    var grid = document.getElementById("myGrid");
    if (sidebar.style.display == "none"){
        sidebar.style.display = "inline";
        grid.style.margin = "0 0 0 10%";
    }
    else {
        sidebar.style.display = "none";
        grid.style.margin = "0 0 0 0";
}
}