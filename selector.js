$(document).ready(function(){
	
	$("td").bind('mouseenter',function(){
		$(this).addClass('bred');
		
		$(this).click(function()
	{
		$(this).addClass('clk');
	});
		
		$(this).mouseout(function(){
			$(this).removeClass('bred').removeClass('clk');
			
		});
});
	});