function getpassword() {
	var chars =  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+_?<>:{}[]";
	var passwordlength=16;
	var password="";

	for (var i = 0; i <passwordlength; i++) {
		var randomNumber=  Math.floor(Math.random()*chars.length);
		password+=chars.substring(randomNumber,randomNumber+1);
	}
	document.getElementById("password").value=password
}
