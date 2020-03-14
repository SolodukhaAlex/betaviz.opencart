$(document).ready(function () {
    if ($(window).width() > 922) {
        showMobileMenu();
    }
    $(window).on('load scroll resize', function () {
        showMobileMenu();
    });
    $(".main-mobile-category").each(function () {
        //if main category haven't subcategory dropdown icon don't display
        if ($(this).find('ul').length === 0) {
            $(this).children("i").css('display', 'none');
        }
    });
    $(".burger").click(function () {
        //#overlay. brightens the entire page when opening the menu
        $('#overlay').toggle(300, "swing");
        $(".burger, .mobile-menu").toggleClass('mobileMenuActive');
        //can't scroll page when mobile menu active
        $('body').toggleClass('lock');
    });
    $(".main-mobile-category i").click(function () {
        //$(this).next() = mobile-dropdown. display subcategory in mobile menu
        $(this).next().toggle('mobile-dropdown-active');
        $(this).toggleClass('menu_i_active');
    });
    function showMobileMenu() {
        $('.main-desktop-menu').removeClass('mobile-block');
        $('.subcategory-desktop-dropdown li').hover(
            function () {
                $('.subcategory-desktop-descriptions').addClass('menu_hover_style');
                let indexDesk = $(this).index() + 1;
                $('.subcategory-desktop-descriptions .subcategory-desktop-description').removeClass('hover_visible');
                //(this).parent().next().children(':nth-child(' + indexDesk + ')') = subcategory-desktop-description. Show current description when hover to the subcategory
                $(this).parent().next().children(':nth-child(' + indexDesk + ')').addClass('hover_visible');
            }, function () {});
        $('.subcategory-desktop').hover(
            function () {}, function () {
                //when user live menu, delete description subcategory
                $('.subcategory-desktop-descriptions').removeClass('menu_hover_style');
                $('.subcategory-desktop-description').removeClass('hover_visible');
            });
    }
});
$(window).on('load scroll resize', function () {
    //dynamic margin from fixed burger menu
    const heightBurger = $('.burger-menu').prop('scrollHeight') + 10 + "px";
    const nextAfterHeader = $(".main-mobile-menu").next();
    nextAfterHeader.css("margin-top", String(heightBurger));
});