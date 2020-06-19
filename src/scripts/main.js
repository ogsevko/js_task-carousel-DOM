'use strict';

let slideIndex = 1;

showLis(slideIndex);

function plusLis(clickEvent) {
  const button = clickEvent.target;

  if (button.classList.contains('carousel__btn_next')) {
    showLis(slideIndex -= 1);
  }

  if (button.classList.contains('carousel__btn_prev')) {
    showLis(slideIndex += 1);
  }
}

function showLis(n) {
  let i;
  const item = document.getElementsByClassName('carousel__item');

  if (n > item.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = item.length;
  }

  for (i = 0; i < item.length; i++) {
    item[i].style.display = 'none';
  }

  item[slideIndex - 1].style.display = 'block';
}

function dots(clickEvent) {
  const dotsList = document.querySelector('.carousel__dots-wrap');
  const button = clickEvent.target;
  const dotsArray = [...dotsList.children];
  let active = 0;

  for (let i = 0; i < dotsArray.length; i++) {
    if (dotsArray[i].classList.contains('carousel__dot_active')) {
      active = i;
    }
  }

  if (button.classList.contains('carousel__btn_next')) {
    dotsList.children[active].classList.remove('carousel__dot_active');

    if (active === dotsArray.length - 1) {
      dotsList.children[0].classList.add('carousel__dot_active');
    } else {
      dotsList.children[active + 1].classList.add('carousel__dot_active');
    }
  }

  if (button.classList.contains('carousel__btn_prev')) {
    dotsList.children[active].classList.remove('carousel__dot_active');

    if (active === 0) {
      dotsList.children[dotsArray.length - 1]
        .classList.add('carousel__dot_active');
    } else {
      dotsList.children[active - 1].classList.add('carousel__dot_active');
    }
  }
}

const prev = document.querySelector('.carousel__btn_prev');
const next = document.querySelector('.carousel__btn_next');

prev.addEventListener('click', dots);
prev.addEventListener('click', plusLis);
next.addEventListener('click', dots);
next.addEventListener('click', plusLis);
