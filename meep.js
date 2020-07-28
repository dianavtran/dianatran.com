// set header newHeight

$(document).ready(function() {
  var headerHeight = $('.svgBgIndex').height();
  $('.headerContent').css('height', headerHeight)
})

$(document).ready(function() {
  var headerHeight = $('.svgBgProj').height();
  $('.headerContentSmall').css('height', headerHeight)
})

// set header on resize

$(window).on('resize', function(){
    if ($(window).width() < 1240) {
      var newHeight = $('.svgBgIndex').height();
      $('.headerContent').height(newHeight)
    }
  });

$(window).on('resize', function(){
    if ($(window).width() < 1240) {
      var newHeight = $('.svgBgProj').height();
      $('.headerContentSmall').height(newHeight)
    }
  });

//set colors index

  $(document).ready(function() {
    $('.svgBgIndexFill').css('fill', indexHeaderColor);
    $('body,html').css('background', indexBgColor);
    $('.headerLinks').css('color', indexLinkColor);
    $('h1, .headerText').css('color', indexHeaderTextColor);
  })

//set colors Proj

$(document).ready(function() {
  $('.svgBgProjFill').css('fill', headerColor);
  $('body,html').css('background', backgroundColor);
  $('.projNav').css('color', headerTextColor);
  $('.projectTitleText').css('color', titleTextColor);
  $('.squiggleStroke').css('stroke', titleTextColor);
  $('.bottomBar').css('background', bottomBarColor);
})


// portolio gallery hover

$('.portfolioItem').hover(function (){
  $(this).children('.itemImage').addClass('translateY8');
    $(this).children('.itemText').children('.itemTitle').css('color','#000');
  }, function () {
  $(this).children('.itemImage').removeClass('translateY8');
  $(this).children('.itemText').children('.itemTitle').css('color','#222');
});

// top button hover

$('.toTop').hover(function () {
  $('.topSVG').addClass('translateY4').css('opacity','1');
  $('.topText').css('color','rgba(0,0,0,.5)');
}, function () {
  $('.topSVG').removeClass('translateY4').css('opacity','.8');
  $('.topText').css('color','rgba(0,0,0,.4)');
})

// left button hover

$('.toLeft').hover(function () {
  $('.leftSVG').addClass('translateXm4').css('opacity','1');
  $('.leftText').css('color','rgba(0,0,0,.5)');
}, function () {
  $('.leftSVG').removeClass('translateXm4').css('opacity','.8');
  $('.leftText').css('color','rgba(0,0,0,.4)');
})

// left button hover

$('.toRight').hover(function () {
  $('.rightSVG').addClass('translateX4').css('opacity','1');
  $('.rightText').css('color','rgba(0,0,0,.5)');
}, function () {
  $('.rightSVG').removeClass('translateX4').css('opacity','.8');
  $('.rightText').css('color','rgba(0,0,0,.4)');
})


// top button click

$('.toTop').click(function() {
   $("html, body").animate({
     scrollTop: 0
   }, 1000);
   return false;
 });

// email hover

$('.email').hover(function(){
  $('.emailPopWrapper').show();
  }, function(){
  $('.emailPopWrapper').hide();
});

// social hovers

$('.socialIcon').hover(function(){
  $(this).css('opacity', 1);
}, function (){
  $(this).css('opacity', .8);
})

// menu click

$('.menuButton').click(function () {
  $('h1').fadeOut();
  $('.headerText').fadeOut();
  $('.closeButton').fadeIn();
  $('.headerLinks').delay(300).fadeIn();
  $(this).fadeOut();
})

$('.closeButton').click(function () {
  $('.headerLinks').fadeOut();
  $(this).fadeOut();
  $('.menuButton').fadeIn();
  $('h1, .headerText').delay(300).fadeIn();

})
