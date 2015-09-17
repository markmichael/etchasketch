$(document).ready(function(){

		var height=4;
		var width=4;
			height=document.getElementById('height');
			width=document.getElementById('width');
			$("#classic").removeClass("mode");
			$("#classic").addClass("activatedmode");

	$("#updateButton").click(function() {
		$("#wrapper").height("90vh").width("82vw");


		$('#wrapper').empty();
		var height1=height.value;
		var width1=width.value;
		for(jj=0;jj<height1;jj++){

		for(var ii=0; ii<width1; ii++){
			$("#wrapper").append('<div class="default"></div>');
			}
			$("#wrapper").append("<br>");
		}
	

		var unitheight=Math.floor(($("#wrapper").height()-2*height1)/(height1));
		var unitwidth=Math.floor(($("#wrapper").width()-2*width1)/(width1));
		$('.default').outerHeight(unitheight);
		$('.default').outerWidth(unitwidth-6);
		$("#wrapper").width("auto");
		$("#wrapper").height("auto");
		$('#updateButton').empty();
		$('#updateButton').text("Reset");


		if($("#classic").hasClass("activatedmode")){
			$(document).on('mouseenter','.default', function(){
				$(this).css("background-color","#E74C3C");
			});
		}

		else if($("#funky").hasClass("activatedmode")){

			$('.default').removeClass().addClass("funkyclass");
			$(document).on('mouseenter','.funkyclass',function(){
				$(this).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));	
			})

		}

		else{
			$('.default').removeClass().addClass("incrementclass");
			$(document).on('mouseenter','.incrementclass',function(){
				var value=$(this).css("opacity");
				$(this).css("opacity",value-=.1);
				$(this).css("background-color","#BDC3c7");
			})
		}

	});

	$("#classic").click(function(){
		$("#classic").addClass("activatedmode");
		$("#classic").removeClass("mode");
		$("#funky").removeClass("activatedmode");
		$("#funky").addClass("mode");
		$("#increment").removeClass("activatedmode");
		$("#increment").addClass("mode");

		$("#wrapper").height("90vh").width("82vw");


		$('#wrapper').empty();
		var height1=height.value;
		var width1=width.value;
		for(jj=0;jj<height1;jj++){

		for(var ii=0; ii<width1; ii++){
			$("#wrapper").append('<div class="default"></div>');
			}
			$("#wrapper").append("<br>");
		}

		var unitheight=($("#wrapper").height()-2*height1)/(height1);
		var unitwidth=($("#wrapper").width()-2*width1)/(width1);
		$('.default').outerHeight(unitheight);
		$('.default').outerWidth(unitwidth-6);
		$("#wrapper").width("auto");
		$("#wrapper").height("auto");
		$('#updateButton').empty();
		$('#updateButton').text("Reset");

			$(document).on('mouseenter','.default', function(){
				$(this).css("background-color","#E74C3C");
	});

	});

	$("#funky").click(function(){
		$("#funky").addClass("activatedmode");
		$("#funky").removeClass("mode");
		$("#classic").addClass("mode");
		$("#classic").removeClass("activatedmode");
		$("#increment").addClass("mode");
		$("#increment").removeClass("activatedmode");

		$("#wrapper").height("90vh").width("82vw");

		$('#wrapper').empty();
		var height1=height.value;
		var width1=width.value;
		for(jj=0;jj<height1;jj++){

		for(var ii=0; ii<width1; ii++){
			$("#wrapper").append('<div class="funkyclass"></div>');
			}
			$("#wrapper").append("<br>");
		}

		var unitheight=($("#wrapper").height()-2*height1)/(height1);
		var unitwidth=($("#wrapper").width()-2*width1)/(width1);
		$('.funkyclass').outerHeight(unitheight);
		$('.funkyclass').outerWidth(unitwidth-6);
		$("#wrapper").width("auto");
		$("#wrapper").height("auto");
		$('#updateButton').empty();
		$('#updateButton').text("Reset");

					$(document).on('mouseenter','.funkyclass',function(){
			$(this).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));


	});
	});				

	$("#increment").click(function(){
		$("#increment").addClass("activatedmode");
		$("#increment").removeClass("mode");
		$("#funky").addClass("mode");
		$("#funky").removeClass("activatedmode");
		$("#classic").addClass("mode");
		$("#classic").removeClass("activatedmode");

		$("#wrapper").height("90vh").width("82vw");

		$('#wrapper').empty();
		var height1=height.value;
		var width1=width.value;
		for(jj=0;jj<height1;jj++){

		for(var ii=0; ii<width1; ii++){
			$("#wrapper").append('<div class="default"></div>');
			}
			$("#wrapper").append("<br>");
		}

		var unitheight=($("#wrapper").height()-2*height1)/(height1);
		var unitwidth=($("#wrapper").width()-2*width1)/(width1);
		$('.default').removeClass().addClass("incrementclass");
		$('.incrementclass').outerHeight(unitheight);
		$('.incrementclass').outerWidth(unitwidth-6);
		$("#wrapper").width("auto");
		$("#wrapper").height("auto");
		$('#updateButton').empty();
		$('#updateButton').text("Reset");

		

				$(document).on('mouseenter','.incrementclass',function(){
				var value=$(this).css("opacity");
				$(this).css("opacity",value-=.1);
				$(this).css("background-color","#BDC3c7");
	});
});


});