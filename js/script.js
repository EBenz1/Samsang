$(document).ready(function(){
    $('.hamburger').on("click" , function(){
        $('.nav-grid').toggleClass("open")
        e.preventDefault();
    });
});



function myFunction(x) {
    x.classList.toggle("change");
  }