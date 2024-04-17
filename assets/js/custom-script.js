var navlink = document.getElementById("nav-links");
  var bar=document.getElementById("bar");
  bar.addEventListener('click',()=>{
    bar.classList.toggle('active');
    navlink.classList.toggle('active');
  })

function hideMenu(){
    navlink.classList.remove('active');
  }

  var navres = document.getElementById("nav-menu-toogle");
  var liparent=document.getElementById("has-children");
  liparent.addEventListener('click',()=>{
    liparent.classList.toggle('active');
    navres.classList.toggle('active');
  });
  
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});

$(document).ready(function(){
    $('.owl-hero').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    items:1,
    smartSpeed:800
})
    $( ".owl-prev").html('<i class="fa-solid fa-angle-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-angle-right"></i>');
    });

$('.owl-review').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    smartSpeed:800,
    autoplay:true,
    autoplayHoverPause:true
        
})



