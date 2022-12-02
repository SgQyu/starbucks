// 1. HEADER > INNER > SEARCH부분 변수 선언
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 1-1. 검색창부분 동작 선언할 경우!
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 1-2. 검색창에 포커스가 설정되었을 때
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 1-3. 검색창에 포커스가 해제되었을 때
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 2. HEADER > BADGES > BADGE부분 변수 선언
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector("#to-top");
// 2-1. lodash, gsap 라이브러리 사용
// ※ _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // ※ 배지 숨기기
    // ※ gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // ※ 버튼 보이기
    // ※ gsap.to(요소, 지속시간, 옵션);
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // ※ 배지 보이기
    // ※ gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // ※ 버튼 숨기기
    // ※ gsap.to(요소, 지속시간, 옵션);
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// #맨 윗 상단 to-top버튼 클릭시 동작
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});

// 3. VISUAL SECTION 이미지부분 순차적으로 나타낼때
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 3-1. fade-in 요소들을 반복적으로 명령 진행
fadeEls.forEach(function (fadeEl, index) {
  // ※ 이미지 순차적으로 나타내기
  // ※ gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // ※ 0.7초, 1.4초, 2.1초, 2.7초
    opacity: 1
  });
});

// 4. SWIPER
// ※ new Swiper(선택자, 옵션{객체데이터})
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // horizental은 기본값
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // ※ 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // ※ 슬라이드 사이 여백
  centeredSlides: true, // ※ 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // ※ 페이지 번호 요소 선택자
    clickable: true // ※ 사용자의 페이지 번호 요소 제어  
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});




// 5. STARBUCKS PROMOTION PAGE 숨기기/보이기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // ※ 숨김 처리! (이후 CSS에서 꾸미기)
    promotionEl.classList.add('hide');
  } else {
    // ※ 보임 처리! (이후 CSS에서 꾸미기)
    promotionEl.classList.remove('hide');
  }
})


// 6. floating이미지 애니메이션 추가
// 6-1. 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // ※ `.toFixed()`를 통해 반환된 문자 데이터를,
  // ※ `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 6-2. 기명함수와 gsap사용
function floatingObject(selector, delay, size) {
  // ※ gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // ※ 선택자
    random(1.5, 2.5), // ※ 애니메이션 동작 시간
    { // ※ 옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut, // ※ gsap easing 사용
      delay: random(0, delay)
    }
  );
}
// ※ 함수 출력
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// 7. ScrollMagic 오픈 소스 사용
// 7-1. section 태그들 찾아서 변수 지정 + class속성값에 scroll-spy 추가 
const spyEls = document.querySelectorAll('section.scroll-spy');
// 7-2. 반복 메소드 forEach사용 및 메소드 체이닝 사용
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    triggerHook: .8 // 뷰포트 수치 0 ~ 1 중 어느 수치 부분에 걸리는 지 지정
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당 년도