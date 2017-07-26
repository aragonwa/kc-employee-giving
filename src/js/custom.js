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
$employeeDonationEvents = $('.employee-donation-event');
$('.employee-donation-event').click(function(){
  $employeeDonationEvents.removeClass('active');
  $(this).addClass('active')
});

$(function () {
  $('[data-toggle="popover"]').popover()
})