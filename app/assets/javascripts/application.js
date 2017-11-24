//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require uikit-icons.min.js
//= require uikit.min.js
//= require cloudinary-jquery.js
//= require_tree .
$(document).ready(function(){
    $('.videos').hide();
    
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
        //$('#Blood_Toil_Tears_and_Sweat_uzbbk1').get(0).play().;
        //$('#war-video').click(function() {
        //this.paused ? this.play() : this.pause();
        //$('#war-video').get(0).play().;
    //});
        $('#war-video').fadeToggle();
        $('#wedding-video').hide();
        $('#family-video').hide();
        $('#friends-video').hide();
    });
    
    
});