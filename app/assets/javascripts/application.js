//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require uikit-icons.min.js
//= require uikit.min.js
//= require cloudinary-jquery.js
//= require_tree .
$(document).ready(function(){
    $('.videos').hide();
    
    $('#dtc').click(function(){
        $('#map h3').show();
        $('#map').show();
        $('#mapdtc').show();
        $('#friends-video').hide();
        $('#wedding-video').hide();
        $('#war-video').hide();
        
    });
    $('#friends').click(function(){
        $('#friends-video').show();
        $('#mapdtc').hide();
        $('#map').hide();
        $('#wedding-video').hide();
        $('#family-video').hide();
        $('#war-video').hide();
    });
    $('#wedding').click(function(){
        $('#wedding-video').show();
        $('#map').hide();
        $('#mapdtc').hide();
        $('#war-video').hide();
        $('#family-video').hide();
        $('#friends-video').hide();
    });
     $('#war').click(function(){
        $('#mapdtc').hide();
        $('#map').hide();
        $('#war-video').fadeToggle();
        $('#wedding-video').hide();
        $('#family-video').hide();
        $('#friends-video').hide();
    });
    
    
});


var myLatlng = new google.maps.LatLng( 40.3520724,-7.6122754,15);

  var myOptions = {
    zoom: 10,
    center: myLatlng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
  };

  var map = new google.maps.Map(document.getElementById('map'), myOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"#Trou du cul du monde en vrai de vrai"
  });
