let ratingIsOne = document.querySelector('.one');
let ratingIsTwo = document.querySelector('.two');
let ratingIsThree = document.querySelector('.three');
let ratingIsFour = document.querySelector('.four');
let ratingIsFive = document.querySelector('.five');
let submit = document.querySelector('#submit-button');
let ratingMessage = document.querySelector('.rating');

let rating = 0;

function buttonOneSelected(element) {
  ratingIsOne.classList.remove('orange');
  ratingIsTwo.classList.remove('orange');
  ratingIsThree.classList.remove('orange');
  ratingIsFour.classList.remove('orange');
  ratingIsFive.classList.remove('orange');
  element.classList.toggle('orange');
  element.classList.remove('hover');
  rating = element.innerText;
  console.log(rating);
}

function submitRating() {
  if (rating === 0) {
    alert('you must select a rating before submitting');
  } else {
    ratingMessage.innerText = `You selected ${rating} out of 5`;
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
