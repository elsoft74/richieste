function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (5 * 3600000)); // validità 5h
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "="+cvalue+ ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
    if( getCookie(cname) ) {
      document.cookie = cname + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
  }


function calcolaGiorni(data){
    let tmpDate=new Date(data);
    let d1=new Date(tmpDate.getFullYear()+"-"+(1+tmpDate.getMonth())+"-"+tmpDate.getDate()+" 00:00:00");
    tmpDate=new Date();
    let d2=new Date(tmpDate.getFullYear()+"-"+(1+tmpDate.getMonth())+"-"+tmpDate.getDate()+" 00:00:00");
    return (d2-d1)/(24*60*60*1000);
}