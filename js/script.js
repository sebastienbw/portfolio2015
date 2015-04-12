$(document).ready(function () {

    var length = $('#left').height() - $('#sidebar').height() + $('#left').offset().top;

    $(window).scroll(function () {

        var scroll = $(this).scrollTop();
        var height = $('#sidebar').height() + 'px';

        if (scroll < $('#left').offset().top) {

            $('#sidebar').css({
                'position': 'absolute',
                'top': '0'
            });

        } else if (scroll > length) {

            $('#sidebar').css({
                'position': 'absolute',
                'bottom': '0',
                'top': 'auto'
            });

        } else {

            $('#sidebar').css({
                'position': 'fixed',
                'top': '0',
                'height': height
            });

        }
    });

});