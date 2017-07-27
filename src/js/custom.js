// Remove search item
$('.search-item').click(function(){
  $(this).remove();
});
// Remove all search items
$('#clear-all').click(function(){
  $('.search-item').remove();
});

$('.row.row-offcanvas').addClass('onoffcanvas-container');

const $onoffcanvas = $("#onoffcanvas");
//Close panel on body click
$('body').click(function(e) {
  if (!$onoffcanvas.is(e.target) && $onoffcanvas.has(e.target).length === 0 && $onoffcanvas.hasClass('is-open')) {
    $onoffcanvas.onoffcanvas('hide');  // esc
  }
});
//Close panel on esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27 && $onoffcanvas.hasClass('is-open')) $onoffcanvas.onoffcanvas('hide');  // esc
});
var $paymentBtns = $('#addToCartModal .payment-amounts button');
$paymentBtns.click(function(){
  $paymentBtns.each(function(i, btn){
    if($(btn).hasClass('btn-success')){
      $(btn).removeClass('btn-success');
      $(btn).addClass('btn-custom');
    };
  });
  $(this).addClass('btn-success')
});
var $employeeGivingEvents = $('.employee-giving-event');
$employeeGivingEvents.click(function(){
  $employeeGivingEvents.removeClass('active');
  $(this).addClass('active')
});

$(function () {
  $('[data-toggle="popover"]').popover()
})
