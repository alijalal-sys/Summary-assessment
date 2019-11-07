var btn = document.getElementById('button-1');
var input = document.getElementById('input-1');
var inputColor = document.getElementById('input-2');
var ul = document.getElementById('ul-1')

btn.onclick = function(){
	if(inputColor.value === 'yellow'){
		ul.textContent = input.value;
		ul.classList.add('yellow');
	}
	if(inputColor.value === 'red'){
		ul.textContent = input.value;
		ul.classList.add('red');
	}
	if(inputColor.value === 'blue'){
		ul.textContent = input.value;
		ul.classList.add('blue');
	}
}