const swiper = new Swiper(".swiper", {
  loop: true, 
  speed: 1500, 
  slidesPerView: 1.5, 
  spaceBetween: 30, 
  centeredSlides: true, 
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});