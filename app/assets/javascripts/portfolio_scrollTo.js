
//----------------param ScrollTo Porfolio--------------------------------------
$(document).on('ready page:load', function ()  {
$('a[href^="#cont"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;  
}); 
});
$(document).on('ready page:load', function ()  {
$('a[href^="#cont3"]').click(function(){  
    var id = $(this).attr("href");
    var offset = $(id).offset().top 
    $('html, body').animate({scrollTop: offset}, 'slow'); 
    return false;  
}); 
});