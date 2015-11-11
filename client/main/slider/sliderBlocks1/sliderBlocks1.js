$( document ).ready(function() {


});
/*Template.slider.onCreated(function() {
    console.log('111');



});*/
Template.sliderBlock1.onRendered(function() {
    $('.rightPopUp').hide();
    $('.rightPopUp').fadeIn(2000);
});
Template.main.onRendered(function() {
    $('.rightPopUp').hide();
});
