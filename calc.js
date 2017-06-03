$(document).ready(function(){
var op,op1,op2,num,sum;
op1=-999;sum=-111;
op2=-9999;
$("#ac").click(function(){
	op1=-999;sum=-111;
	op2=-9999;
	$("#o1").text("");
	$("#o2").text("");
	$("#o").html("");
	$("#scr").text("");
	$("#re").html("");
});
$("#E").click(function(){
	if(op1==-999&&sum!=-111)
	{
		op1=sum;
		$("#o1").text(op1);sum=-111;
		return;
	}
	if(sum==-111&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M"))
	{
	$("#scr").text("Error");
	return;
	}
	var r;
	if(op1!=-999&&sum!=-111)
	{
		op2=sum;
		if(op=="Multiplication")
		r=op1*sum;
		if(op=="Division")
		r=op1/sum;
		if(op=="Addition")
		r=op1+sum;
		if(op=="Subtraction")
		r=op1-sum;
		if(op=="H.C.F")
		{
				var temp=op1;
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
				r=op1;
				op1=temp;
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			r=minMultiple;
		}
	}
	sum=-111;
	$("#o1").text(op1);
	$("#o2").text(op2);
	$("#scr").text("");
	$("#re").html(r);	
	op2=r;
});
			
$("#M").click(function(){
	
	if(op1==-999&&sum==-111)
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Multiplication";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}

	}
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	$("#o1").text(op1);
	op="Multiplication";
	$("#o").html(op);
	$("#scr").text("");
});

$("#F").click(function(){
if(op1==-999&&sum=='-111')
	{
		$("#scr").text("Undefined");
		return;
	}
	else if(op2!=-9999)
	{
		op1=op2;
	}
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Factorial";
		$("#o").html(op);
		
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}

	}
	
	sum=-111;var temp=op1;
	op2=1;
	while(temp>0)
	{
		op2=op2*temp;
		temp--;
	}
	$("#o2").text("");
	$("#re").html(op2);
	$("#o1").html(op1);
	op="Factorial";
	$("#o").html(op);
	$("#scr").text("");
});

$("#d").click(function(){
	
	if(op1==-999&&sum=='-111')
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Division";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
		{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}
	}
	
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	$("#o1").html(op1);
	op="Division";
	$("#o").html(op);
	$("#scr").text("");
});

$("#A").click(function(){
	
	if(op1==-999&&sum=='-111')
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Addition";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}
	}
	
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	
	$("#o1").html(op1);
	op="Addition";
	$("#o").html(op);
	$("#scr").text("");
});

$("#S").click(function(){
	if(op1==-999&&sum=='-111')
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Subtraction";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}
	}
	
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	
	$("#o1").html(op1);
	op="Subtraction";
	$("#o").html(op);
	$("#scr").text("");
});

$("#hcf").click(function(){
	
	if(op1==-999&&sum==-111)
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="H.C.F";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}

	}
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	$("#o1").text(op1);
	op="H.C.F";
	$("#o").html(op);
	$("#scr").text("");
});

$("#lcm").click(function(){
	
	if(op1==-999&&sum==-111)
	{
		$("#scr").text("Error");
		return;
	}
	else if(op2!=-9999)
		op1=op2;
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="L.C.M";
		$("#o").html(op);
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}

	}
	sum=-111;
	op2=-9999;
	$("#o2").text("");
	$("#o1").text(op1);
	op="L.C.M";
	$("#o").html(op);
	$("#scr").text("");
});

$("#res").click(function(){
	if(op1==-999&&sum=='-111')
	{
		$("#scr").text("Undefined");
		return;
	}
	else if(op2!=-9999)
	{
		op1=op2;
	}
	else if(op1!=-999&&(op=="Multiplication"||op=="Division"||op=="Addition"||op=="Subtraction"||op=="H.C.F"||op=="L.C.M")&&sum==-111)
	{
		op="Resiprocal";
		$("#o").html(op);
		
		
	}
	else if(op1==-999)
		op1=sum;
	else
	{
		if(op=="Multiplication")
		op1*=sum;
		if(op=="Division")
		op1/=sum;
		if(op=="Addition")
		op1+=sum;
		if(op=="Subtraction")
		op1-=sum;
		if(op=="H.C.F")
		{
				op1 = ( op1 > 0) ? op1 : -op1;
				sum = ( sum > 0) ? sum : -sum;
				while(op1!=sum)
				{
				if(op1 > sum)
				op1 -= sum;
				else
				sum -= op1;
				}
		}
		if(op=="L.C.M")
		{
			var minMultiple;
				minMultiple = (op1>sum) ? op1 : sum;
			sum = ( sum > 0) ? sum : -sum;
			op1 = ( op1 > 0) ? op1 : -op1;
			while(1)
			{
			if( minMultiple%op1==0 && minMultiple%sum==0 )
            break;
			++minMultiple;
			}
			op1=minMultiple
		}

	}
	
	sum=-111;
	op2=1/op1;
	$("#o2").text("");
	$("#re").html(op2);
	$("#o1").html(op1);
	op="Resiprocal";
	$("#o").html(op);
	$("#scr").text("");
});

$("#P").click(function(){
	if(op1==-999)
	{
		$("#scr").text("Error");
		return;
	}
	$("#o1").html(op1);
	op="Percent";
	$("#o").html(op);

});
$(".no").click(function(){
	if(op2!=-9999)
	{
	$("#re").html("");
	op1=-999;sum=-111;
	op2=-9999;
	$("#o1").text("");
	$("#o2").text("");
	$("#o").html("");
	$("#scr").text("");
	}
	
	if(sum==-111)
		sum=0;
	if($(this).attr('id')!="del")
	{
	if($(this).attr('id')!="00")
	{
	num=parseInt($(this).attr('id'));
	sum=sum*10+num;
	}
	else
		sum*=100;
	}
	else
		sum=(sum-sum%10)/10;
	$("#scr").text(sum);
	//op1=sum;
	
	
});

});