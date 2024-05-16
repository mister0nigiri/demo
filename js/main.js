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

  breakpoints: {
    500: {
      slidesPerView: 1,
    }
  }
});



const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.header-sp__nav');
 
btn.addEventListener('click', () => {
  nav.classList.toggle('open-menu')

  if (btn.innerHTML === 'メニュー') {
    btn.innerHTML = '閉じる';
  } else {
    btn.innerHTML = 'メニュー';
  }

});