const number = document.getElementById('number');
const increase = document.getElementById('increase');
const number1 = document.getElementById('number1');
const increase1 = document.getElementById('increase1');
const number2 = document.getElementById('number2');
const increase2 = document.getElementById('increase2');
const number3 = document.getElementById('number3');
const increase3 = document.getElementById('increase3');
const number4 = document.getElementById('number4');
const increase4 = document.getElementById('increase4');
const number5 = document.getElementById('number5');
const increase5 = document.getElementById('increase5');

increase.onclick = () => {
  const current = parseInt(number.innerText, 10)
  number.innerText = current + 1;
}

increase1.onclick = () => {
  const current = parseInt(number1.innerText, 10)
  number1.innerText = current + 1;
}

increase2.onclick = () => {
  const current = parseInt(number2.innerText, 10)
  number2.innerText = current + 1;
}

increase3.onclick = () => {
  const current = parseInt(number3.innerText, 10)
  number3.innerText = current + 1;
}

increase4.onclick = () => {
  const current = parseInt(number4.innerText, 10)
  number4.innerText = current + 1;
}

increase5.onclick = () => {
  const current = parseInt(number5.innerText, 10)
  number5.innerText = current + 1;
}