//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require uikit-icons.min.js
//= require uikit.min.js
//= require cloudinary-jquery.js
//= require_tree .
$(document).ready(function(){
    $('.video').hide();
    
    $('#family').click(function(){
        $('#family-video').fadeToggle();
        //$.cl_videoTag("je-te-promets_xsxe0h", {autoplay: true}).transformation().toHtml());
        $('#friends-video').hide();
        $('#wedding-video').hide();
        $('#war-video').hide();
        
    });
    $('#friends').click(function(){
        $('#friends-video').fadeToggle();
        $('#wedding-video').hide();
        $('#family-video').hide();
        $('#war-video').hide();
    });
    $('#wedding').click(function(){
        $('#wedding-video').fadeToggle();
        $('#war-video').hide();
        $('#family-video').hide();
        $('#friends-video').hide();
    });
     $('#war').click(function(){
        $('#war-video').fadeToggle();
        $('#wedding-video').hide();
        $('#family-video').hide();
        $('#friends-video').hide();
    });
    
    
});