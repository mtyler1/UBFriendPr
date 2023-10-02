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

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('../sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
