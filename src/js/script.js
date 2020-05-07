$(document).ready(function () {
  var deviceAgent = navigator.userAgent.toLowerCase()
  var agentID = deviceAgent.match(
    /(iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec)/
  )
  if (agentID) {
    $('body').addClass('iOs_fix')
  }

  $('header').affix({
    offset: { top: 60 },
  })

  $('.mobile_nav_button').click(function () {
    $(this).toggleClass('open')
    $('.mobile_navigation').slideToggle(300)
  })

  $('.submenu_button').click(function () {
    $(this).toggleClass('open')
    $(this).next().slideToggle(300)
  })

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height() + 100) {
      $('.back_to_top').fadeIn(300)
    } else {
      $('.back_to_top').fadeOut(300)
    }
  })

  $('.back_to_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800)
  })

  $('.team_bio').addClass('hidden').viewportChecker({
    classToAdd: 'visible animated fadeIn',
    offset: 100,
  })
})

$(window).load(function () {
  $('.bg_banner').fadeIn(700)
  $('.content_box1').delay(500).fadeIn(700)
})
