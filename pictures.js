$(document).ready(function(e){

var elhover =$('#images a')
$(elhover)
.append('<div class="fake-hover"></div>').each(function() {
var $shover = $('> .fake-hover', this).css('opacity', '0');
$(this).hover(function () {
$shover.stop().fadeTo(400, 1);
}, function () {
$shover.stop().fadeTo(400, 0);
});
});
});