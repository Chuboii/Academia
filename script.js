let windoww = window.innerWidth

if (windoww > 0 && windoww < 768) {
  
let mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10, // Adjust the spacing between slides as needed
  // loop: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
}
else if (windoww > 768) {
  
  let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 10, // Adjust the spacing between slides as needed
    // loop: true,
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  }
  
  
  function resizeWindow(){
    let windoww = window.innerWidth

    if (windoww > 0 && windoww < 768) {
      
    let mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10, // Adjust the spacing between slides as needed
      // loop: true,
      autoplay: {
        delay: 3000, // Set the delay between slides in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    }
    else if (windoww > 768) {
      
      let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10, // Adjust the spacing between slides as needed
        // loop: true,
        autoplay: {
          delay: 3000, // Set the delay between slides in milliseconds
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination', // Selector for pagination container
          clickable: true, // Allow clicking on pagination dots to navigate
        },
      });
      }
      
  }

  window.addEventListener("resize", resizeWindow)