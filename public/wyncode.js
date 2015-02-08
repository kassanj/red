$(document).keypress(function(event){
    if (event.which === 13){
		if ($('input[type="text"]').val() !== 'Wyncode'){	
        	$('input').addClass('red');
    	}
    }
});