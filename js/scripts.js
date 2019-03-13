$("#p").hover(function(event) {
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const star = document.querySelector('.star');
const stars = document.querySelector('.stars');

for(let i = 0; i <= 40; i++) {
  const newStar = star.cloneNode();
  const top = getRandomInt(100);
  const left = getRandomInt(100);
  const size = getRandomInt(20) / 200;
  newStar.setAttribute('style', `top: ${top}%; left: ${left}%; width: ${size}em; height: ${size}em`);
  stars.appendChild(newStar);
}
