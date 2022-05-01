function showMenu(user){
    $("#menu").html("");
    if(user!=null){
        let row=$("<div>").addClass("row");
        let div1=$("<div>").addClass("col-10");
        let div2=$("<div>").addClass("col-1");
        let div3=$("<div>").addClass("col-1");
        let button=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({"onClick":"logout()"});
        let el=$("<span>").addClass("material-symbols-outlined");
        el.text("logout");
        button.append(el);
        //button.text("Esci");
        div1.attr("id","menubuttons");
        div2.attr("id","user");
        div3.attr("id","loginbutton");       
        div3.append(button);
        div2.text(user.nome+" "+user.cognome);
        button=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({"onClick":"alert('Inserisci')"}).text("Inserisci");
        div1.append(button);
        button=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({"onClick":"alert('Cerca')"}).text("Cerca");
        div1.append(button);
        row.append(div1);
        row.append(div2);
        row.append(div3);
        $("#menu").append(row);
    }
}

function showMain(user){
    if(user!=null){
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
                    showRequests(result.data,user);
                } else {
                    alert("Impossibile recuperare l'elenco delle richieste.");
                }
            }
        }
        xhr.send();
    } else {
        let div1=$("<div>").addClass("col-4");
        let div2=$("<div>").addClass("col-4");
        let div3=$("<div>").addClass("col-4");
        let form=$("<form>");
        let divFormGroup=$("<div>").addClass("form-group");
        let el=$("<label>").attr({"for":"username"}).text("Nome utente");
        divFormGroup.append(el);
        el=$("<input>").addClass("form-control").attr({"type":"text","id":"username","placeholder":"nomeutente"});
        divFormGroup.append(el);
        form.append(divFormGroup);
        divFormGroup=$("<div>").addClass("form-group");
        el=$("<label>").attr({"for":"password"}).text("Password");
        divFormGroup.append(el);
        el=$("<input>").addClass("form-control").attr({"type":"password","id":"password","placeholder":"Password"});
        divFormGroup.append(el);
        form.append(divFormGroup);
        el=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Login").attr({"onClick":"login()"});
        form.append(el);
        div2.append(form);
        $("#main").append(div1);
        $("#main").append(div2);
        $("#main").append(div3);
    }
}