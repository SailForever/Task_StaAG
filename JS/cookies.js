const cookie_name='visit';

const cookieAlert=document.querySelector('.cookie');
const btn=document.querySelector('.cookie-button');
const hours=new Date(new Date().getTime()+1440*60*1000)

if(!getCookie(cookie_name)){
  setTimeout(()=>{
    cookieAlert.classList.add('show-cookie')
  }, 1000)
  btn.addEventListener('click', ()=>{
    cookieAlert.classList.remove('show-cookie');
    setCookie(cookie_name,true, {expires: hours});
  });
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
