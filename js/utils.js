function setCookie(cname, cvalue) {
    const d = new Date();
    d.setTime(d.getTime() + (5 * 3600000)); // validità 5h
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + ";" + expires + ";path=/";
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