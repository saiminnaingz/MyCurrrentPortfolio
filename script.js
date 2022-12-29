var sideBar = document.getElementById("side-container");
var btn = document.getElementById("bar");
btn.addEventListener("click",myFun);
function myFun(){
    if(sideBar.style.display === "none"){
    sideBar.style.display = "block";
    }
    else{
        sideBar.style.display = "none";
    };
    
};