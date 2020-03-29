$(document).ready(function(){

$("#services").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*4.3
    },700);
});
});
$(document).ready(function(){

$("#works").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*3
    },700);
});
});
$(document).ready(function(){

$("#testi").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*5.3
    },700);
});
});
$(document).ready(function(){

$("#contact").click(function(){
    $('body,html').animate({
      scrollTop: $(window).height()*6.3
    },700);
});
});
$(document).ready(function() {
	
    $(window).scroll(function() {
    if($(document).scrollTop() > 0) {
        $('.menu').addClass('ulclr');
    }
    else {
    $('.menu').removeClass('ulclr');
    }
  });
});
