const sideBar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const close = document.getElementById("closed");


menu.onclick = () => {
  sideBar.classList.add('active');
}

close.onclick = () => {
  sideBar.classList.remove('active');
}





var swiper = new Swiper(".home-slider", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  loop:true,
});