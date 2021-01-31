/*
index.js
 */

$(function (){
    $(window).on('scroll', function (){
        if($(document).scrollTop()>=$('#headerBox').height()){
            $('#mainMenuBox').addClass('mainMenuFixed');
        } else{
            $('#mainMenuBox').removeClass('mainMenuFixed');
        }
    });
});