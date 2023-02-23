//================ dark mode ===========
// const switchToggle = document.querySelector('#switch-toggle');
// const html = document.querySelector('html');
// let isDarkmode = false;
// const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'));

// const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
// </svg>`

// const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
// </svg>`

// function toggleTheme (){
//   isDarkmode = !isDarkmode
//   localStorage.setItem('isDarkmode', isDarkmode)
//   switchTheme()
// }
// if (localDarkmode) {
// isDarkmode = localDarkmode;
// html.classList.add('dark');
// }else{
//   html.classList.remove('dark')
// }
// function switchTheme (){
//   if (isDarkmode) {
//     switchToggle.classList.remove('bg-yellow-500','-translate-x-2')
//     switchToggle.classList.add('bg-gray-700','translate-x-full')
//     setTimeout(() => {
//       switchToggle.innerHTML = darkIcon
//     }, 250);
//   } else {
//     switchToggle.classList.add('bg-yellow-500','-translate-x-2')
//     switchToggle.classList.remove('bg-gray-700','translate-x-full')
//     setTimeout(() => {
//       switchToggle.innerHTML = lightIcon
//     }, 250);
//   }
// }
// switchTheme()
//================ dark mode ===========


    function darkModeListener() {
    document.querySelector("html").classList.toggle("dark");
    }
    document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);
 


// ============= slide swiper ============ 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  $(document).ready(function(){
    $('#icon').click(function(){
      $('.nav-list').toggleClass('show');
    })
  })
// ============= slide swiper ============ 
