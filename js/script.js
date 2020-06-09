// $(document).ready(function() {
//     $(".title").lettering();
// });
  
// $(document).ready(function() {
//     animation();
// }, 1000);
  
// function animation() {
//     var title1 = new TimelineMax();
//     title1.staggerFromTo(".title span", 0.5, 
//     {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
//     {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
// }


function flip(event){
	var element = event.currentTarget;
	if (element.className === "lang-card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};


// Initialize and add the map
function initMap() {
    // The location of South Korea
    var southkorea = {lat: 37.564, lng: 127.001};
    // The map, centered at South Korea
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 3, center: southkorea});
    // The marker, positioned at South Korea
    var marker = new google.maps.Marker({position: southkorea, map: map});
  }

// ------------- move to each menu (click action)
$('.menu li button').on('click', function(){
    let menu = $(this).attr('id');
 
    if(menu == "btn-introduce"){
        $('html, body').animate({scrollTop: $('#info').position().top}, 1000);
    } else if(menu == "btn-travel"){
        $('html, body').animate({scrollTop: $('#travel').position().top}, 1000);
    } else if(menu == "btn-lang"){
        $('html, body').animate({scrollTop: $('#lang').position().top}, 1000);
    }
 });


// ------------- scroll action
function scrollHandler(){
    let scrollPos = $(window).scrollTop();
    let screenBottom = $(window).scrollTop() + $(window).height();
    // let screenMiddle = $(window).scrollTop() + ($(window).height() / 3);
    let travelTop = $('#travel').position().top;

    if(scrollPos >= travelTop){
        // recommend range
        $('.travel-recomm').each(function(){
            let percent = $(this).find('.recomm-percentage').text();
            $(this).find('.recomm-inner-bar').animate({width: percent}, 1500);

        });
    }

    // --- opacity content
    $('section').each(function(){
        if(screenBottom >= $(this).position().top){
            $(this).find('.vertical-center').animate({top: 0, opacity: 1}, 1000);
        }
    });
}



$(window).on('scroll', scrollHandler);
scrollHandler();