$(document).ready(function () {

    //слайдер

    $('.slider').slick({
        dots: true,
        arrows: false  
    });

    // отображаем или скрываем меню в мобильной версии

    $('.header__btn-menu').click(function() {
      
            $('.header__menu').animate({
                width: [ "toggle", "swing" ], // ширина элемента
                height: [ "toggle", "swing" ], // высота элемента
                opacity: "toggle" // прозрачность элемента
            }, 200, "linear"); // продолжительность и скорость анимации        
    });

    //  закрываем блок МЕНЮ после нажатия на какой либо элемент 
    //  данного меню (.menu__link)

    $('.menu__link').click(function() {
        console.log('Попали в блок');
        //if ($('header__btn-menu').css('display') == 'block') 
        if ($('.header__btn-menu').is(':visible')){
            console.log('Вошли в условие');
            $('.header__menu').animate({
                width: [ "toggle", "swing" ], // ширина элемента
                height: [ "toggle", "swing" ], // высота элемента
                opacity: "toggle" // прозрачность элемента
            }, 200, "linear"); // продолжительность и скорость анимации
        }       
    });    
    
    
    //  Обрабатываем изменение размера ширины экрана:

    $( window ).resize(function(){ // задаем функцию при срабатывании события "resize" на объекте window
            
        var widthWindow = $( window ).width();    // ширина области просмотра браузера
    
        //  удаляем в html тэгах атрибут style, чтобы отобразить меню
        if(widthWindow > 991) {
            $('.header__menu').attr('style', '');
        }

        //  меняем размер блока laptop при изменении ширины экрана

        var widthLaptop = 648;
        var heightLaptop = 345;
        var newWidthLaptop;
        var newHeightLaptop;

        var kf = 1.878261;

        var positionXLaptop;
        var positionYLaptop;

        if(widthWindow < 679) {
            newWidthLaptop = $('.baner__laptop').width();
            newHeightLaptop = $('.baner__laptop').height();

            // kf = newWidthLaptop/widthLaptop;

            newHeightLaptop = newWidthLaptop / kf;

            var marginBottom = (345 - (heightLaptop - newHeightLaptop)) + "px";
            var newBottom = ((heightLaptop - newHeightLaptop) - 58) + "px";

            $('.baner__laptop').css("height", newHeightLaptop);
            $('.baner__laptop').css("botton", newBottom);
            $('.baner__forms').css("margin-bottom", marginBottom);


            var wdt = $('.baner__forms').css("margin-bottom");

            console.log("margin-botton - " + wdt);

        }



        
    });


});
