require 'jquery.mobile/jquery.mobile-1.1.0.js';
require 'phonegap-1.4.1.js';
document.addEventListener("deviceready", function(){
    $('#username').value=localStorage.getItem("username")
    $('#password').value=localStorage.getItem("password")
});
function rememberMe(username,password)
{
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
}