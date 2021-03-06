$(document).ready(function(){

	var slickIsActive = false;

	checkSlider();

	$(window).on('resize', function(){
		checkSlider();
	});

	function checkSlider(){
		if( $(window).width() < 1200 ) {
			if( slickIsActive === false ) {
				$('#slider').slick({
					autoplay: true,
				});
				slickIsActive = true;
			}
		}
		else {
			if( slickIsActive === true ) {
				$('#slider').slick('unslick');
				slickIsActive = false;
			}
			
		}
	}

/*
	var burgerBtn = $ ('.j-nav-toggle-menu');
	var mobileNav = $ ('.j-mobile-nav');
	var isShown = false;

	burgerBtn.on('click', function(){
		if(isShown){
			mobileNav.show();
			isShown = true;
		} else {
			mobileNav.hide();
			isShown = false;
		}

	});

	$(window).on('rezise', function(){
		if (window.matchMedia("(min-width: 1200px)").matches) {
			mobileNav.show();
			isShown = true;
		} else {
			mobileNav.hide();
			isShown = false;
		}
	});*/
	 
$('.j-nav-toggle-menu').on('click',function(){
	$('.j-nav-toggle-menu').hide();
	$('.j-mobile-nav').show();
});

$('.j-nav-toggle-close').on('click',function(){
	$('.j-mobile-nav').hide();
	$('.j-nav-toggle-menu').show();
});






ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.94199306418127,30.279423499999996],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),


        myPlacemarkWithContent = new ymaps.Placemark([59.94199306418127,30.279423499999996], {
            hintContent: 'Собственный значок метки с контентом',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/geotag.png',
            // Размеры метки.
            iconImageSize: [38, 49],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-19, -12],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
});
});