let ratingIsOne = document.querySelector('.one');
let ratingIsTwo = document.querySelector('.two');
let ratingIsThree = document.querySelector('.three');
let ratingIsFour = document.querySelector('.four');
let ratingIsFive = document.querySelector('.five');
let submit = document.querySelector('#submit-button');
let ratingMessage = document.querySelector('.rating-message');
let mainComponent = document.querySelector('.main');
let modal = document.querySelector('.modal');

let rating = 0;

function buttonOneSelected(element) {
  ratingIsOne.classList.remove('rating-selected');
  ratingIsTwo.classList.remove('rating-selected');
  ratingIsThree.classList.remove('rating-selected');
  ratingIsFour.classList.remove('rating-selected');
  ratingIsFive.classList.remove('rating-selected');
  element.classList.toggle('rating-selected');
  element.classList.remove('hover');
  rating = element.innerText;
  console.log(rating);
}

function submitRating() {
  if (rating === 0) {
    alert('you must select a rating before submitting');
  } else {
    ratingMessage.innerText = `You selected ${rating} out of 5`;
    modal.classList.remove('hidden');
    mainComponent.classList.add('hidden');
  }
}

ratingIsOne.addEventListener('click', () => buttonOneSelected(ratingIsOne));

ratingIsTwo.addEventListener('click', () => buttonOneSelected(ratingIsTwo));

ratingIsThree.addEventListener('click', () => buttonOneSelected(ratingIsThree));

ratingIsFour.addEventListener('click', () => buttonOneSelected(ratingIsFour));

ratingIsFive.addEventListener('click', () => buttonOneSelected(ratingIsFive));

submit.addEventListener('click', submitRating);

// let ratingOption = document.querySelector('.rating-option');
// let submit = document.getElementById('submit-button');

// function changeColor() {
//   ratingOption.classList.toggle('orange');
// }

// console.log('hello');
// // let testing = getComputedStyle(
// //   document.getElementsByClassName('rating-option')
// // );

// // testing.backgroundColor = 'blue';
// ratingOption.addEventListener('click', changeColor);
