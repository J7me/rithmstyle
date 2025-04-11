const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
 
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
 
    },


    breakpoints: {
        1078: {
            spaceBetween: 50,
            slidesPerView: 3,
        }
    }
});