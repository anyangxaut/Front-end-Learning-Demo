var divHeight=document.querySelector(".index-main-body").offsetHeight;
var bodyHeight=document.documentElement.clientHeight;
document.querySelector(".index-main-body").style.top=(bodyHeight-divHeight)/2+"px";

document.getElementsByName("sign-button")[0].onclick=function(){
	var fullname=document.getElementsByName("fullname")[0].value;
	var phone_num=document.getElementsByName("phone_num")[0].value;
	var password=document.getElementsByName("password")[0].value;
	
	var phone_re=/^1\d{10}$/;
	if(fullname==""||phone_num==""||password==""||!phone_re.test(phone_num)||password.length<6||password.length>128){
		if(fullname==""){
		document.getElementsByName("nameerror")[0].innerHTML="请填写姓名";
		document.getElementsByName("nameerror")[0].style.opacity="1"
		}else{document.getElementsByName("nameerror")[0].style.opacity="0";}
		
		if(phone_num==""){
		document.getElementsByName("phoneerror")[0].innerHTML="请填手机号";
		document.getElementsByName("phoneerror")[0].style.opacity="1";
		}else if(!phone_re.test(phone_num)){
		document.getElementsByName("phoneerror")[0].innerHTML="请填写正确的手机号";
		document.getElementsByName("phoneerror")[0].style.opacity="1";
		}else{document.getElementsByName("phoneerror")[0].style.opacity="0";}
		
		if(password==""){
		document.getElementsByName("passworderror")[0].innerHTML="请填写密码";
		document.getElementsByName("passworderror")[0].style.opacity="1";
		}else if(password.length<6||password.length>128){
		document.getElementsByName("passworderror")[0].innerHTML="请填写6-128位的密码";
		document.getElementsByName("passworderror")[0].style.opacity="1";
		}else{document.getElementsByName("passworderror")[0].style.opacity="0";}
		
		return;
	}else{
		document.getElementsByName("nameerror")[0].style.opacity="0";
		document.getElementsByName("phoneerror")[0].style.opacity="0";
		document.getElementsByName("passworderror")[0].style.opacity="0";
		
	}
}


document.getElementsByName("login-button")[0].onclick=function(){
	var phone_num=document.getElementsByName("phone_num")[1].value;
	var password=document.getElementsByName("password")[1].value;
	
	var phone_re=/^1\d{10}$|^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	if(phone_num==""||password==""||!phone_re.test(phone_num)||password.length<6||password.length>128){
		if(phone_num==""){
		document.getElementsByName("phoneerror")[1].innerHTML="请填手机号";
		document.getElementsByName("phoneerror")[1].style.opacity="1";
		}else if(!phone_re.test(phone_num)){
		document.getElementsByName("phoneerror")[1].innerHTML="请填写正确的手机号";
		document.getElementsByName("phoneerror")[1].style.opacity="1";
		}else{document.getElementsByName("phoneerror")[1].style.opacity="0";}
		
		if(password==""){
		document.getElementsByName("passworderror")[1].innerHTML="请填写密码";
		document.getElementsByName("passworderror")[1].style.opacity="1";
		}else if(password.length<6||password.length>128){
		document.getElementsByName("passworderror")[1].innerHTML="请填写6-128位的密码";
		document.getElementsByName("passworderror")[1].style.opacity="1";
		}else{document.getElementsByName("passworderror")[1].style.opacity="0";}
		
		return;
	}else{
		document.getElementsByName("phoneerror")[1].style.opacity="0";
		document.getElementsByName("passworderror")[1].style.opacity="0";
	}
}

function changeActive(i){
	switch(i){
	case 1:
		document.getElementById("signin").setAttribute("class", "");
		document.getElementById("signup").setAttribute("class", "active");
		document.querySelector(".navs-slider-bar").style.left="0em";
		document.querySelector(".view-signin").style.display="none";
		document.querySelector(".view-signup").style.display="block";
		break;
	case 2:
		document.getElementById("signin").setAttribute("class", "active");
		document.getElementById("signup").setAttribute("class", "");
		document.querySelector(".navs-slider-bar").style.left="4em";
		document.querySelector(".view-signin").style.display="block";
		document.querySelector(".view-signup").style.display="none";
		break;
	}
	
}