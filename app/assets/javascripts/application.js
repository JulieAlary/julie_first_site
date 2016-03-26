// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//----------------param ScrollTo Porfolio--------------------------------------
$(document).on('ready page:load', function ()  {
$('a[href^="#container2"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;  
}); 
});
$(document).on('ready page:load', function ()  {
$('a[href^="#container3"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;  
}); 
});

//--------------param Certif OpenClassRoom-----------------------------------
$(document).on('ready page:load', function () {
    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });
});
$(document).on('ready page:load', function () {
    $(".flip2").click(function(){
        $(".panel2").slideToggle("slow");
    });
});
$(document).on('ready page:load', function () {
    $(".flip3").click(function(){
        $(".panel3").slideToggle("slow");
    });
});
//------------incone twitter-----------------//
$(document).on('ready page:load', function () {
    $(".flip4").click(function(){
        $(".panel4").slideToggle("slow");
    });
});
// -----------anim cv------------------------//
$(document).on('ready page:load', function () {
    $(".flip5").click(function(){
        $(".panel5").slideToggle("slow");
    });
});


