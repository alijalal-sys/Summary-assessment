var checkbox1 = $('#checkbox-1')
var checkbox2 = $('#checkbox-2')
var checkbox3 = $('#checkbox-3')

$('#create').on('click', function(){
	if(checkbox1.prop('checked') && checkbox2.prop('checked') && checkbox3.prop('checked')){
		$('#ul-1').append('<li>Black</li>').addClass('black')
	}
	if(checkbox1.prop('checked') && checkbox2.prop('checked')){
		$('#ul-1').append('<li>purple</li>').addClass('blue', 'red')
	}
	
})