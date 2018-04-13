//Навешиваем на кнопку .button-add обработчик добавить запись
var buttonAdd = document.querySelector(".button-add");
buttonAdd.onclick = _add;

//функция которая возвращает время в формате HH:MM:SS
function timeNow() {
	var d = new Date();
	var time = "";
	var H = d.getHours();
	var M = d.getMinutes();
	var S = d.getSeconds();
	if (H > 0 && H < 10) {
		H = "0" + H;
	}
	if (M > 0 && M < 10) {
		M = "0" + M;
	}
	if (S > 0 && S < 10) {
		S = "0" + S;
	}
	time = H + ":" + M + ":" + S;
	return time
}

//функция добавления строк которая срабатывает на клик по кнопке добавления
function _add() {
	var li = document.createElement('li');
	var parent = document.querySelector('.list')
	parent.appendChild(li).innerHTML = timeNow();
}

//работа кнопок навигации
function nav() {
	let move = this.getAttribute('data-nav'); //получаем направление движения
	console.log(move);
	if (!document.querySelector(".active")) { //если нет активного элемент далаем активным первый элемент
		document.querySelector('.list>li').classList.add('active');
	} else { //если активный элемент было то происходит выделение следующего или предыдущего элемента
		var el = document.querySelector(".active")
		if (move == "next") {
			if (el.nextElementSibling) { 	//проверяет существует ли следующий элемент,
//если существует выделяем след элемент и снимаем выделение с текущего
				document.querySelector(".active").nextElementSibling.classList.add('active');
				document.querySelector(".active").classList.remove('active')
			}
		} else { 
			if (el.previousElementSibling) {//проверяем существует ли пред элемент
//если существует выделяем пред элемент и снимаем выделение с текущего
				document.querySelector(".active").previousElementSibling.classList.add('active');
				document.querySelector(".active").nextElementSibling.classList.remove('active')
			}
		}
	}
}

//присваиваем кнопкам навигации обработчик который будет срабатывать по клику
var move = document.querySelectorAll("button[data-nav]")
for (var i = 0; i < move.length; i++) {
	move[i].addEventListener("click", nav)
}

//вункция генерации случайного числа в диапазоне, нужна для удаления случайной строки
function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1)
	rand = Math.round(rand);
	return rand;
}

//на кнопку делете навешиваем обработчик функцию удалить
document.querySelector(".button-delete").addEventListener("click", _delet);

//функция которая удаляет случайную строку
function _delet() {
	let max = document.querySelector('.list').children.length - 1; //максимальное число
	let id = randomInteger(0, max); //случайное число
	let el = document.querySelectorAll('.list>li')[id]//выбираем эелемент для удаления
	if (max >= 0) el.parentElement.removeChild(el); //удаляем элемент для удаления
}