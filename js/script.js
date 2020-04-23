
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    speed: 100,
    // centerPadding: '0px',




    //         responsive: [
    //             {
    //               breakpoint: 576,
    //               settings: {
    //                 centerMode: false,
    //                 variableWidth: false,
    //               }
    //             },
    //         ]
});


let imgs = $('.slider img');
imgs.each(function(){
    let item = $(this).closest('.item');
    item.css({
        'background-image': 'url(' + $(this).attr('src') + ')',
        'background-position': 'center',
        '-webkit-background-size': 'cover',
        'background-size': 'cover'
    });
    $(this).hide();
});

// feedback show-more block script
$(document).ready(function() {
    $('#feedbackShowMore').on('click', function() {
        $('.feedback__list_hided').css('display', 'flex');
        $(this).css('display', 'none');
    })
});


// modal windows
let modalOrder = document.getElementById("modalOrderWindow");
let btn = document.getElementsByClassName("modal__show");
let span = document.getElementsByClassName("modal__close")[0];
let pricesHeading = document.getElementById('modalHeading');
let pricesPlaceholder = document.getElementById('modalInput');
let modalSubmitButton = document.getElementById('modalSubmitButton');
let modalForm = document.getElementById('modalForm');
let inputFile = document.createElement('input');
inputFile.setAttribute('type', 'file');
inputFile.setAttribute('name', 'avatar');
inputFile.style.margin = '10px auto';


for (let i = 0; i < btn.length; i++) {

    btn[i].onclick = function(e) {
        e.preventDefault();
        if (i === 2) {
            pricesHeading.innerHTML ='Повторный приём';
            pricesPlaceholder.placeholder = 'Комментарий (необязателен)';
            modalSubmitButton.innerHTML = 'Записаться';

        }
        else if (i === 3) {
            pricesHeading.innerHTML = 'Узнать цены';
            pricesPlaceholder.placeholder = 'Название интересующей услуги';
            modalSubmitButton.innerHTML = 'Узнать';

        }

        else if (i === 4) {
            pricesHeading.innerHTML = 'Добавить отзыв';
            pricesPlaceholder.placeholder = 'Введите текст отзыва';
            modalSubmitButton.innerHTML = 'Добавить';
            modalForm.setAttribute('enctype','multipart/form-data');

            console.log(modalForm.childNodes.length);

            if (modalForm.childNodes.length <= 19) {
                document.getElementsByClassName('modal__text')[0].before(inputFile);
            }


        }
        else {
            pricesHeading.innerHTML = 'Записаться на приём';
            pricesPlaceholder.placeholder = 'Комментарий (необязателен)';
            modalSubmitButton.innerHTML = 'Записаться';

        }
        modalOrder.style.display = "flex";
    };

}

span.onclick = function () {
    modalOrder.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modalOrder) {
        modalOrder.style.display = "none";
    }
};



// отправка форм в PHPMailer - модальное окно

$('#modalForm').trigger('reset');
$(function() {
    'use strict';
    $('#form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'send.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Сообщение отправлено. Наши сотрудники свяжутся с Вами.');
                    $('#modalForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка, сообщение не отправлено. Попробуйте ещё раз или позвоните нам.');
                }
            }
        });
    });
});
// отправка форм в PHPMailer - окно в блоке с контактами

$('#contactsForm').trigger('reset');
$(function() {
    'use strict';
    $('#form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url: 'send.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Сообщение отправлено. Наши сотрудники свяжутся с Вами.');
                    $('#contactsForm').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка, сообщение не отправлено. Попробуйте ещё раз или позвоните нам.');
                }
            }
        });
    });
});