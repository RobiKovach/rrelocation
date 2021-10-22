$(document).ready(function(){

	$('#form1 :input[type="text"], #form1 textarea').focus(function(){$(this).removeClass('field');})
	.blur(function(){$(this).removeClass('field');});

	$('#form1').submit(function(eventObject){
		if ($('#name1').val() == ""){
			eventObject.preventDefault(); 
			$('#name1').addClass('field');
		};

		if ($('#phone1').val() == ""){
			eventObject.preventDefault(); 
			$('#phone1').addClass('field');
		};
	});



	$('#form1').ajaxForm(
	{
		dataType: "json",
		success: function(data)
		{

			var otvetmail = data.otpr;
			if (otvetmail=='true'){
				$('#form2').hide();
				$("#modal, .form_popup, .good").fadeIn(1000).delay(3000).fadeOut(1000);
				yaCounter45841329.reachGoal('1');
				ga('send', 'event', 'zakaz', 'click');
				$('body').css('overflow', 'auto');
				$(':input','#form1').not(':button, :submit, :reset, :hidden').val('');
			}
			else{
				$('#form2').hide();
				$("#modal, .form_popup, .bad").fadeIn(1000).delay(3000).fadeOut(1000);
			}

		}
	});
	/* end Ajax*/
	
	
	

	$('#form2 :input[type="text"]').focus(function(){$(this).removeClass('field');})
	.blur(function(){$(this).removeClass('field');});


	$('#form2').submit(function(eventObject){
		if ($('#name2').val() == ""){
			eventObject.preventDefault(); 
			$('#name2').addClass('field');
		};

		if ($('#phone2').val() == ""){
			eventObject.preventDefault(); 
			$('#phone2').addClass('field');
		};
	});




	$('#form2').ajaxForm(
	{
		dataType: "json",
		success: function(data)
		{
			var otvetmail = data.otpr;
			if (otvetmail=='true'){
				$('#form2').hide();
				$("#modal, .form_popup, .good").fadeIn(1000).delay(3000).fadeOut(1000);
				yaCounter45841329.reachGoal('1');
				ga('send', 'event', 'zakaz', 'click');
				$('body').css('overflow', 'auto');
				$(':input','#form1').not(':button, :submit, :reset, :hidden').val('');
			}
			else{
				$('#form2').hide();
				$("#modal, .form_popup, .bad").fadeIn(1000).delay(3000).fadeOut(1000);
			}
		}
	});
	
}); /*END*/
