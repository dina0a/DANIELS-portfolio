$(window).scroll(function () {
    let scrollTop = $(window).scrollTop()
    if (scrollTop >= 500) {
        $('.navbar').removeClass('bg-transparent').addClass('bg-black')
        $('#goToTop').fadeIn(1000)
    } else {
        $('.navbar').addClass('bg-transparent').removeClass('bg-black')
        $('#goToTop').fadeOut(1000)
    }
})

$('.nav-link').on('click', function (e) {
    $(e.target).addClass('active')
    // $(e.target).parent().siblings().children().removeClass('active')  orrrr
    $('.nav-link').not(e.target).removeClass('active')
})
