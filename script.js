$(document).ready(function(){

		var height=4;
		var width=4;
			height=document.getElementById('height');
			width=document.getElementById('width');
			$("#classic").addClass("activatedmode");

	$("#updateButton").click(function() {


		if($("#classic").hasClass("activatedmode")){
			generateGame("default");
			$(document).on('mouseenter','.default', function(){
				$(this).css("background-color","#E74C3C");
			});
		}

		else if($("#funky").hasClass("activatedmode")){
			generateGame("funkyclass");

			$('.default').addClass("funkyclass");
			$(document).on('mouseenter','.funkyclass',function(){
				$(this).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));	
			})

		}

		else{
			generateGame("incrementclass")
			$('.default').addClass("incrementclass");
			$(document).on('mouseenter','.incrementclass',function(){
				var value=$(this).css("opacity");
				$(this).css("opacity",value-=.1);
				$(this).css("background-color","#BDC3c7");
			})
		}

	});

	$("#classic").click(function(){
		selectGameMode(3);

		generateGame("default");

			$(document).on('mouseenter','.default', function(){
				$(this).css("background-color","#E74C3C");
	});

	});

	$("#funky").click(function(){
		selectGameMode(2);

		generateGame("funkyclass");

					$(document).on('mouseenter','.funkyclass',function(){
			$(this).css("background-color","#"+Math.floor(Math.random()*16777215).toString(16));


	});
	});				

	$("#increment").click(function(){
		selectGameMode(1);

		generateGame("incrementclass");

		

				$(document).on('mouseenter','.incrementclass',function(){
				var value=$(this).css("opacity");
				$(this).css("opacity",value-=.1);
				$(this).css("background-color","#BDC3c7");
	});
});

var generateGame=function(gametype) {
		$("#wrapper").height("90vh").width("82vw");


		$('#wrapper').empty();
		var height1=height.value;
		var width1=width.value;
		for(jj=0;jj<height1;jj++){
			$("#wrapper").append('<div class="gridbreak"></div>')
		}

		for(var ii=0; ii<width1; ii++){
			$("#wrapper > .gridbreak").append('<div class="default"></div>');
		}
		
		$('.default').addClass(gametype);

		var unitheight=($("#wrapper").innerHeight()/(height1));
		var unitwidth=($("#wrapper").innerWidth())/(width1);
		$('.gridbreak').height(unitheight);
		$('.'+gametype).width(unitwidth);
		$("#wrapper").width("auto");
		$("#wrapper").height("auto");
		$('#updateButton').empty();
		$('#updateButton').text("Reset");
	}
var selectGameMode=function(gamemode){
	switch(gamemode){
		case 1:
		$("#increment").addClass("activatedmode");
		$("#funky").removeClass("activatedmode");
		$("#classic").removeClass("activatedmode");
		break;

		case 2:
		$("#increment").removeClass("activatedmode");
		$("#funky").addClass("activatedmode");
		$("#classic").removeClass("activatedmode");
		break;

		case 3:
		$("#increment").removeClass("activatedmode");
		$("#funky").removeClass("activatedmode");
		$("#classic").addClass("activatedmode");
		break;
	}
}


});