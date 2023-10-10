var cursr=document.querySelector("#cursor")
var blr=document.querySelector("#cursorblr")

document.addEventListener("mousemove",function(dets){
cursr.style.left = dets.x+25+"px";
cursr.style.top = dets.y+"px";
})

document.addEventListener("mousemove",function(dets){
    blr.style.left = dets.x- 180+"px";
    blr.style.top = dets.y- 180+"px";
})
