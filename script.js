window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    document.getElementById("navBtn").style.display = "block";
  } else {
    document.getElementById("navBtn").style.display = "none";
  }
}


document.querySelector("#bigImage")

document.addEventListner("mousemove", function(event){
  gsap.to("#bigImage img", {rotation: 27, x: 100, duration: 1});
})