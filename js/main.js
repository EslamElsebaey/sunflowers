$(window).load(function () {
  $(".preloader").fadeOut();
});

$(document).ready(function () {
  // main Swiper
  const mainSwiper = new Swiper(".mainBanner .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 1000,

    pagination: {
      el: ".mainBanner .swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });

  // categories swiper
  const categories = new Swiper(".categories .swiper", {
    loop: true,
    autoplay: true,
    speed: 1000,
    pagination: {
      el: ".categories .swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      350: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 7,
        spaceBetween: 30,
      },
      1450: {
        slidesPerView: 8,
        spaceBetween: 30,
      },
    },
  });

  //  newArrival swiper

  const newArrivalSwiper = new Swiper(" .newarrival .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 1000,
    pagination: {
      el: ".newarrival .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  //  Bestseller swiper

  const bestsellerSwiper = new Swiper(" .bestseller .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 1000,
    pagination: {
      el: ".bestseller .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });


  // **************************************************************************************************

  // open and close nav

  $(".closeBtn").on("click", function () {
    $("nav").removeClass("open-nav");
    $("body").removeClass("overflow-hiddden");
    $(".toTop").show();
  });

  $(".bars").on("click", function () {
    $("nav").addClass("open-nav");
    $("body").addClass("overflow-hiddden");
    $(".toTop").hide();
  });

  // Open and close search input
  $(".open-search").on("click", function () {
    $(".search").slideToggle(300);
    $(this).children(".icon").toggleClass("fa-xmark");
  });

  // **************************************************************************************************

  // to top button

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".toTop").addClass("showToTop");
    } else {
      $(".toTop").removeClass("showToTop");
    }
  });

  $(".toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
  });

  // **************************************************************************************************

  //fixed nav

  let myHeader = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $(myHeader).addClass("fixed");
    } else {
      $(myHeader).removeClass("fixed");
    }
    var scrollTop = $(window).scrollTop();
    prevScrollposition < scrollTop && prevScrollposition > 0
      ? myHeader.classList.add("stayTop")
      : myHeader.classList.remove("stayTop"),
      (prevScrollposition = scrollTop);
  });

  // **************************************************************************************************

  // nested menus in siebar

  if ($(window).width() <= 992) {
    $(".categories-li").click(function (e) {
      e.preventDefault();
      $(this).children(".sub-menu").slideToggle(300);
      $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
    });
  }

  /********************************************************************************* */

  // footer nested menu

  if ($(window).width() < 768) {
    $(".footer-title").click(function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).toggleClass("arrow-rotate");
      $(".footer-title").not($(this)).next().slideUp(300);
      $(".footer-title").not($(this)).removeClass("arrow-rotate");
    });
  }

  /********************************************************************************* */
});
