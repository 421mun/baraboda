//모바일 메뉴
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    right: "0"
  });
  $(".dim").fadeIn();
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    right: "-100%"
  })
  $(".dim").fadeOut();
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

//search
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" });
});

$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" });
});

const visual_list = new Swiper('.visual_list', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  loop: true, //기본값 false 슬라이드 반복
  speed: 1000,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const brand_txt_list = new Swiper('.brand_txt_list', {
  effect: "fade", //페이드 효과
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }, //연동 했을때 autoplay한쪽에만 줘야함
  speed: 1000, //넘어가는 속도도 한쪽에만 
});

const brand_img_list = new Swiper('.brand_img_list', {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

brand_txt_list.controller.control = brand_img_list;
brand_img_list.controller.control = brand_txt_list;

const prd_list = new Swiper('.prd_list', {
  loop: true, //기본값 false 슬라이드 반복
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true, //첫번째 슬라이드 가운데 배치

  breakpoints: {
    0: { //0픽셀 이상에서 min-width
      slidesPerView: 1.5,
    },
    768: { //768픽셀 이상에서
      slidesPerView: 2.8,

    },
    1200: { //1200픽셀 이상에서
      slidesPerView: 3.5,
    },
  },
});

$(".about ul li:nth-child(1)").addClass("active");
$(".about ul li").click(function () {
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
});
