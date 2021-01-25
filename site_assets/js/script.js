jQuery(document).ready(function($){

    let ticker = $('webTicker').clone();

    $('#webTicker').webTicker({    height:'75px', 
    duplicate: true, 
    rssfrequency: 0, 
    startEmpty: false, 
    hoverpause: false, 
    speed: 20,
    height: '50px'
    })

});
     