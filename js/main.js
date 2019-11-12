window.onload = function () {
  let mySwiper = new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    }
  })
}