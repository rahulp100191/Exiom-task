// toggle class scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-trans').addClass('afterscroll');
        } else {
            $('.navbar-trans').removeClass('afterscroll');
        }
    });
    var dNow = new Date();
    var localdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    $('#currentDate').text(localdate)
});