function showMenu(user){
    $("#menu").html("");
    if(user!=null){
        let row=$("<div>").addClass("row");
        let div1=$("<div>").addClass("col-10");
        let div2=$("<div>").addClass("col-1");
        let div3=$("<div>").addClass("col-1");
        div1.attr("id","menubuttons");
        div2.attr("id","user");
        div3.attr("id","loginbutton");
        let el=$("<span>").addClass("material-symbols-outlined");
        el.text("logout");
        div3.append(el);
        div2.text(user.nome+" "+user.cognome);
        row.append(div1);
        row.append(div2);
        row.append(div3);
        $("#menu").append(row);
    }
}

function showMain(user){
    if(true){
        let xhr = new XMLHttpRequest();
        let url = "be/getrequests.php";
        // let send = "action=getDrugs";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let ready = false;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if(result.status=="OK"){
                    showRequests(result.data);
                } else {
                    alert("Impossibile recuperare l'elenco delle richieste.");
                }
            }
        }
        xhr.send();
    } else {
        //showlogin
    }
}