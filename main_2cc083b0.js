var start=0;
var myplay=0;
function bindBody(){
	if(start==1){
		return
	}
	controlMusic=document.getElementById("bgMusic");
	controlMusic.currentTime=81;
	controlMusic.play();
	char=document.querySelectorAll("div.index__music-tip-d6LP8")[0];
	icon=document.querySelectorAll("img.index__music-icon-PBv0T")[0];
	char.innerHTML = '音效开启';
	icon.src="musicopen.svg";
	start=1;
	myplay=1;
}


setTimeout(function() { 

	top=document.getElementById("idTop");
	controlMusic=document.getElementById("bgMusic");
	console.log(top);
	console.log(controlMusic);
	controlMusic.currentTime=81;
 	h=document.querySelectorAll("div.index__right-top-68TGb")[0];
	char=document.querySelectorAll("div.index__music-tip-d6LP8")[0];
	icon=document.querySelectorAll("img.index__music-icon-PBv0T")[0];
	h.onclick=function(){
		if(myplay==0){
			controlMusic.play();
			char.innerHTML = '音效开启';
			icon.src="musicopen.svg";
			myplay=1;
		}else{
			controlMusic.pause();
			char.innerHTML = '音效关闭';
			icon.src="musicclose.svg";
			myplay=0;
		}
			
	}
	
}, 500);

