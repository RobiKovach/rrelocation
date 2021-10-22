$(document).ready(function () {
    let btn_menu = $('.btn-menu');
    $('.button_tarif').click(function (event) {
        event.preventDefault();
        var tarif = $(this).attr('title');
        $('.tarif_popup').html(tarif);
        $('#tarif').val(tarif);
        $('#modal, .form_popup').fadeIn(300);
        $('form').show();
        $('body').css('overflow', 'hidden');
    });
    $('#modal').on('click', function (e) {
        if (e.target.id == 'modal') {
            $(this).hide();
            $('body').css('overflow', 'auto');
        }
    });
    $('.close').on('click', function (e) {
        e.preventDefault();
        $(this).parent().parent().hide();
        $('body').css('overflow', 'auto');
    });
    $('#phone1, #phone2').mask('+7 (999) 999-9999');
    $('.hidden-menu a').click(function () {
        btn_menu.click();
        $('.hidden-menu').slideUp(100);
    });
    btn_menu.click(function () {
        $('.hidden-menu').slideDown(150);
        btn_menu.toggleClass('show', 'hide');
        if (btn_menu.hasClass('show')) {
            btn_menu.css('position', 'fixed');
        } else {
            btn_menu.css('position', 'relative');
        }
    });
});