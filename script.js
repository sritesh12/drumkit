window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
   
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.add("animation");
})

const selectKeys = document.querySelectorAll(".key")
selectKeys.forEach(function(key){
    key.addEventListener("transitionend",removeTransition);
})
function removeTransition(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("animation")
}