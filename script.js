var modal = document.getElementById("modal");
var btn = document.getElementById("budget");
var closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}



// EFEITO CAROUSEL NAS FOTOS
$(".carousel").owlCarousel({
    margin:5,
    loop: true,
    autoplay:true,
    autplayTimeout:2000,
    autoplayHoverpause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        }
    }
});