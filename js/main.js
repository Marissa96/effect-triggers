var $showHide = $('.btn-show-hide');
var $move = $('.btn-move');
var $collapseExpand = $('.btn-collapse-expand');
var $bounceIn = $('.btn-bounce');
var $appendExpand = $('.btn-append');

$showHide.on('click', function () {
  $('.box').toggleClass('show');
});

$move.on('click', function () {
  $('.diamond').toggleClass('slide');
});

$collapseExpand.on('click', function () {
  $('.panel').toggleClass('collapse');
});

$bounceIn.on('click', function () {
  $('.circle').toggleClass('bounce');
});

$appendExpand.on('click', function () {
  var $li = $('<li>');
  $li.html('New List Item');
  $('.list').append($li);
});
