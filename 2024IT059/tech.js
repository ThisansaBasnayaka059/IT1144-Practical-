let totalVisitor = 1000;

function count(){
	totalVisitor++;
	let countTag=document.getElementById("totalVisitor")
	countTag.innerHTML=totalVisitor;
}
function count2(){
	let countTag1=document.getElementById("totalVisitor")
	countTag1.style.color="green";
}
function count3(){
	alert('COUNT++')
}
function sub(){
	alert('Registration Successfully')
}


	
	