/* 
*/

var isIE = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
if ((old_ie > -1) || (new_ie > -1)) {
    isIE = true;
}
function CheckIsIE()
{
    if (isIE) {
   alert("Unfortunately, Internet Explorer is not supported by Snow, please upgrade to a newer browser like Google Chrome.")
    }
}

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function CreateSetting(sname, sval)
{
    localStorage.setItem(sname, sval);
}

function SetTabName(tname)
{
    CreateSetting("TabName", tname);
    document.title = tname;
}

function GetTabName()
{
    if(!localStorage.getItem("TabName"))
    {
        SetTabName("Snow");   
    } else {
document.title = localStorage.getItem("TabName").toString();
    }

  if( isMobile.any() ) document.getElementById("SnowLogo").innerHTML = "Snow Mobile"
}

function redirect(link)
{
    location.replace(link);
}


