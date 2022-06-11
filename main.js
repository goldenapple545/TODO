let inp = document.querySelector('input')
let btn = document.querySelector('#btn')
let board = document.querySelector('ol')

// Функция при клике на кнопку
function addElem() {
  if (inp.value !== '') {
    let target = document.createElement('li')
    target.innerHTML = inp.value
    board.appendChild(target)
    inp.value = '' // Очистка поля ввода
  }
  else { // Если название не введено в поле input
    alert('Введите название задачи!')
  }
}

// Функция при нажатии enter в input
function addEnter(ev) {
  // При пустом input нажатие enter ничего не делает
  if (ev.keyCode === 13 && inp.value !== '') {
    addElem.call(this, ev)
  }
}

// Функция при клике по элементу списка
board.onclick = function(ev) {
  let elem = ev.target
  // Зачеркивание
  if (elem.tagName = 'li' && elem.style.textDecoration !== 'line-through') {
    elem.style.textDecoration = 'line-through'
  }
  // Убрать зачеркивание
  else if (elem.tagName = 'li' && elem.style.textDecoration === 'line-through') {
    elem.style.textDecoration = 'none'
  }
}


inp.addEventListener('keyup', addEnter)
btn.addEventListener('click', addElem)
