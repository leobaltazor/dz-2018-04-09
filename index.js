var buttonAdd = document.querySelector(".button-add");
buttonAdd.onclick = _add;

function timer() {
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

function _add() {
	var li = document.createElement('li');
	document.querySelector('.list').appendChild(li).innerHTML = timer();	
}