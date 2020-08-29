$(function(){
$(".vertical-center").slick({

autoplay:true,
dots:true,
arrow:true,
 });

$('.gnavi-toggle').click(function(){
$('.gnavi-toggle,.gnavi').toggleClass('show');
});
$('.single-item').slick({
  autoplay:true,
}
);

});
