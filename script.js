
var bt = document.getElementsByClassName('button');
var len = bt.length;

for( var i=0; i<len; i++) {
	console.log(bt[i].innerText);
	
}

var btn = document.getElementsByTagName('button')[0];
btn.className += ' nowa-klasa';
console.log(btn.className);
/*
var btn = document.getElementsByTagName('button')[0];
btn.className -= 'button';
console.log(btn.className);

 To była moja pierwsza mysl ale raczej nie moze tak byc. Zwraca NaN.
*/
var btn = document.getElementsByTagName('button')[0];
btn.classList.remove('button');
console.log(btn.className);

var btn4 = document.getElementsByTagName('button')[3];
btn4.innerHTML = 'Mother';
console.log(btn4.innerHTML);

/* Działa po zakomentowaniu kodu powyzej
var btn3 = document.getElementsByTagName('button')[2];
btn3.parentNode.removeChild(btn3);


var bt = document.getElementsByClassName('button');
var len = bt.length;

for( var i=0; i<len; i++) {
	console.log(bt[i].innerText);
	
}

*/

var btn2 = document.getElementsByTagName('button')[1];
var btn2data = btn2.getAttribute('data-test');
console.log(12);

