var header = $('header');
var logo = $(header).find('.logo img');
var linkLogo1 = $(logo).attr('src');
var linkLogo2 = $(logo).data('logofixed');


$(window).on('scroll',function(){
    if($(this).scrollTop() > 5 && $(this).width() > 992) {
        $(logo).attr('src',linkLogo2);
        $(header).addClass('header-fixed');
    }
    else {
        $(header).removeClass('header-fixed');
        $(logo).attr('src',linkLogo1);
    }
    
});


// timer
const daysEl =document.querySelectorAll('.days');
const hoursEl = document.querySelectorAll('.hours');
const minsEl = document.querySelectorAll('.mins')
const secondsEl = document.querySelectorAll('.seconds');

const newYears = '24 Mar 2023';
function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) /1000;
    const days = Math.floor(totalSeconds /3600 / 24);
    const hour = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds %60)
    
// console.log(mins);
    // console.log(days,hour,mins)
    daysEl.innerHTML = formatTime(days.value);
    hoursEl.innerHTML = formatTime(hour);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
  
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000)






$(".selection-1").select2({
    minimumResultsForSearch: 20,
    dropdownParent: $('#dropDownSelect1')
});


// Back to top
var windowH = $(window).height() / 2;
$(window).on('scroll', function () {
    if ($(this).scrollTop() > windowH) {
        $("#backToTop").css('display', 'flex');
    } else {
        $("#backToTop").css('display', 'none');
    }
});

$('#backToTop').on("click", function () {
    $('html,body').animate({scrollTop:0},300)
})


// side bar
/////////////////////////////////////////////////////
let sidebar = document.querySelector('.sidebar');

document.querySelector('#menubtn').onclick = () => {
    sidebar.classList.toggle('cart_active');
}
document.querySelector('#sidebar-close').onclick = () => {
    sidebar.classList.remove('cart_active');
}
