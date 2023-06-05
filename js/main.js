const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
  Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
  const ms = randomIn(2000, 4000)
  el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
  mixupInterval(el)
  el.addEventListener('webkitAnimationIteration', () => {
    mixupInterval(el)
  })
})

function information() {
  let date = new Date();
  alert(date.toLocaleDateString() + " 現在、最新情報はありません");
}

function getCurrentYear() {
  var currentYear = new Date().getFullYear();
  return currentYear;
}

window.onload = function() {
  var yearSpan = document.getElementById('western_year');
  yearSpan.textContent = getCurrentYear();
};