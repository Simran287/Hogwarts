const motto = document.getElementById("motto");

motto.addEventListener("mouseover",eng_ver);
motto.addEventListener("mouseout",latin_ver);

function eng_ver(){
    motto.innerHTML = "Never tickle a sleeping dragon";
}
function latin_ver(){
    motto.innerHTML = "Draco Dormiens Nunquam Titillandus";
}
