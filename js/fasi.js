function getFasi(){
    let xhr = new XMLHttpRequest();
        let url = "be/getfasi.php";
        // let send = "action=getDrugs";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let ready = false;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                return xhr.responseText;
            }
        }
        xhr.send();
}