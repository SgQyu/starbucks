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


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 해당 년도