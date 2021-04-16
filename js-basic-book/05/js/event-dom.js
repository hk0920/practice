var coverImg = document.querySelector("#cover");

coverImg.onclick = function(){
    alert("눌렀다")
};

coverImg.onmouseover = function(){
    coverImg.style.border = "5px black solid";
};

coverImg.onmouseout = function(){
    coverImg.style.border = "";
};