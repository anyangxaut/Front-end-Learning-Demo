var divHeight=document.querySelector(".main-content").offsetHeight;
var bodyHeight=document.documentElement.clientHeight;
document.querySelector(".main-content").style.top=(bodyHeight-divHeight)/2+"px";

document.getElementsByName("registerbutton")[0].onclick=function(){
	var username=document.getElementsByName("username")[0].value;
	var phonenumber=document.getElementsByName("phonenumber")[0].value;
	var password=document.getElementsByName("password")[0].value;
	
	var phone_re=/^1\d{10}$/;
	if(username==""||phonenumber==""||password==""||!phone_re.test(phonenumber)||password.length<6||password.length>128){
		if(username==""){
		document.getElementsByName("usernameerror")[0].innerHTML="请填写姓名";
		document.getElementsByName("usernameerror")[0].style.opacity="1"
		}else{document.getElementsByName("usernameerror")[0].style.opacity="0";}
		
		if(phonenumber==""){
		document.getElementsByName("phonenumbererror")[0].innerHTML="请填手机号";
		document.getElementsByName("phonenumbererror")[0].style.opacity="1";
		}else if(!phone_re.test(phonenumber)){
		document.getElementsByName("phonenumbererror")[0].innerHTML="请填写正确的手机号";
		document.getElementsByName("phonenumbererror")[0].style.opacity="1";
		}else{document.getElementsByName("phonenumbererror")[0].style.opacity="0";}
		
		if(password==""){
		document.getElementsByName("passworderror")[0].innerHTML="请填写密码";
		document.getElementsByName("passworderror")[0].style.opacity="1";
		}else if(password.length<6||password.length>128){
		document.getElementsByName("passworderror")[0].innerHTML="请填写6-128位的密码";
		document.getElementsByName("passworderror")[0].style.opacity="1";
		}else{document.getElementsByName("passworderror")[0].style.opacity="0";}
		
		return;
	}else{
		document.getElementsByName("usernameerror")[0].style.opacity="0";
		document.getElementsByName("phonenumbererror")[0].style.opacity="0";
		document.getElementsByName("passworderror")[0].style.opacity="0";
		
	}
}

document.getElementsByName("loginbutton")[0].onclick=function(){
	var username=document.getElementsByName("username")[1].value;
	var password=document.getElementsByName("password")[1].value;
	
	var phone_re=/^1\d{10}$|^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	if(username==""||password==""||!phone_re.test(username)||password.length<6||password.length>128){
		if(username==""){
		document.getElementsByName("phonenumberoremailerror")[0].innerHTML="请填手机号或邮箱";
		document.getElementsByName("phonenumberoremailerror")[0].style.opacity="1";
		}else if(!phone_re.test(username)){
		document.getElementsByName("phonenumberoremailerror")[0].innerHTML="请填写正确的手机号或邮箱";
		document.getElementsByName("phonenumberoremailerror")[0].style.opacity="1";
		}else{document.getElementsByName("phonenumberoremailerror")[0].style.opacity="0";}
		
		if(password==""){
		document.getElementsByName("passworderror")[1].innerHTML="请填写密码";
		document.getElementsByName("passworderror")[1].style.opacity="1";
		}else if(password.length<6||password.length>128){
		document.getElementsByName("passworderror")[1].innerHTML="请填写6-128位的密码";
		document.getElementsByName("passworderror")[1].style.opacity="1";
		}else{document.getElementsByName("passworderror")[1].style.opacity="0";}
		
		return;
	}else{
		document.getElementsByName("phonenumberoremailerror")[0].style.opacity="0";
		document.getElementsByName("passworderror")[1].style.opacity="0";
	}
}

function register(){
		document.getElementById("login").setAttribute("class", "");
		document.getElementById("register").setAttribute("class", "active");
		document.querySelector(".slider-bar").style.left="0em";
		document.querySelector(".view-login").style.display="none";
		document.querySelector(".view-register").style.display="block";
}

function login(){
		document.getElementById("login").setAttribute("class", "active");
		document.getElementById("register").setAttribute("class", "");
		document.querySelector(".slider-bar").style.left="4em";
		document.querySelector(".view-login").style.display="block";
		document.querySelector(".view-register").style.display="none";
}