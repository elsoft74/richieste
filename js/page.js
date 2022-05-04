function showMenu(user) {
    $("#menu").html("");
    if (user != null) {
        let row = $("<div>").addClass("row");
        let div1 = $("<div>").addClass("col-10");
        let div2 = $("<div>").addClass("col-1");
        let div3 = $("<div>").addClass("col-1");
        let button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "logout()" });
        let el = $("<span>").addClass("material-symbols-outlined");
        el.text("logout");
        button.append(el);
        //button.text("Esci");
        div1.attr("id", "menubuttons");
        div2.attr("id", "user");
        div3.attr("id", "loginbutton");
        div3.append(button);
        div2.text(user.nome + " " + user.cognome);
        button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "showInsertForm()" }).text("Inserisci");
        div1.append(button);
        button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "alert('Cerca')" }).text("Cerca");
        div1.append(button);
        row.append(div1);
        row.append(div2);
        row.append(div3);
        $("#menu").append(row);
    }
}

function showMain(user) {
    if (user != null) {
        let xhr = new XMLHttpRequest();
        let url = "be/getrequests.php";
        // let send = "action=getDrugs";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let ready = false;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if (result.status == "OK") {
                    showRequests(result.data, user);
                } else {
                    alert("Impossibile recuperare l'elenco delle richieste.");
                }
            }
        }
        xhr.send();
    } else {
        showLogin();
    }
}

function showLogin() {
    let div = $("<div>").addClass("row");
    let div1 = $("<div>").addClass("col-4").addClass("align-self-start");
    let div2 = $("<div>").addClass("col-4").addClass("align-self-center");
    let div3 = $("<div>").addClass("col-4").addClass("align-self-end");
    let form = $("<form>");
    let divFormGroup = $("<div>").addClass("form-group");
    let el = $("<label>").attr({ "for": "username" }).text("Nome utente");
    divFormGroup.append(el);
    el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "username", "placeholder": "nomeutente" });
    divFormGroup.append(el);
    form.append(divFormGroup);
    divFormGroup = $("<div>").addClass("form-group");
    el = $("<label>").attr({ "for": "password" }).text("Password");
    divFormGroup.append(el);
    el = $("<input>").addClass("form-control").attr({ "type": "password", "id": "password", "placeholder": "Password" });
    divFormGroup.append(el);
    form.append(divFormGroup);
    el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Login").attr({ "onClick": "login()" });
    form.append(el);
    div2.append(form);
    div.append(div1);
    div.append(div2);
    div.append(div3);
    $("#main").html("");
    $("#main").append(div);
}

function showInsertForm() {

    let fasi = null;
    let xhr = new XMLHttpRequest();
    let url = "be/getfasi.php";
    // let send = "action=getDrugs";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let ready = false;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let result = JSON.parse(xhr.responseText);
            if (result.status == "OK") {
                fasi = result.data;
                let div = $("<div>").addClass("row");
                let div1 = $("<div>").addClass("col-2");
                let div2 = $("<div>").addClass("col-8");
                let div3 = $("<div>").addClass("col-2");
                let form = $("<form>");

                let divFormGroup = $("<div>").addClass("form-group");
                let el = $("<label>").attr({ "for": "nome" }).text("Nome");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "nome"});
                divFormGroup.append(el);
                //form.append(divFormGroup);

                //divFormGroup=$("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "cognome" }).text("Cognome");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "cognome"});
                divFormGroup.append(el);
                //form.append(divFormGroup);

                //divFormGroup=$("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "codiceFiscale" }).text("Codice Fiscale");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "codiceFiscale"});
                divFormGroup.append(el);
                form.append(divFormGroup);

                divFormGroup = $("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "email" }).text("e-mail");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "email", "id": "email"});
                divFormGroup.append(el);
                //form.append(divFormGroup);

                //divFormGroup=$("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "numero" }).text("Numero");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "numero"});
                divFormGroup.append(el);
                //form.append(divFormGroup);

                //divFormGroup=$("<div>").addClass("form-group");

                let div4 = $("<div>").addClass("col").addClass("date").attr({ "data-provide": "datepicker" });
                el = $("<label>").text("Data Ricezione");
                div4.append(el);
                el = $("<input>").addClass("form-control").addClass("datepicker").attr({ "type": "text", "id": "data" });
                div4.append(el);
                let div5 = $("<div>").addClass("input-group-addon");
                el = $("<span>").addClass("glyphicon glyphicon-th");
                div5.append(el);
                div4.append(div5);
                divFormGroup.append(div4);
                form.append(divFormGroup);

                divFormGroup = $("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "fase" }).text("Fase");
                divFormGroup.append(el);
                el = $("<select>").addClass("form-control").attr({ "id": "fase" });
                fasi.forEach(element => {
                    let option = $("<option>").attr({ "value": element.id }).text(element.descrizione);
                    el.append(option);
                });
                divFormGroup.append(el);
                //form.append(divFormGroup);

                //divFormGroup=$("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "motivo" }).text("Motivo");
                divFormGroup.append(el);
                el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "motivo"});
                divFormGroup.append(el);
                form.append(divFormGroup);

                divFormGroup = $("<div>").addClass("form-group");
                el = $("<label>").attr({ "for": "note" }).text("Note");
                divFormGroup.append(el);
                el = $("<textarea>").addClass("form-control").attr({ "type": "text", "id": "note"});
                divFormGroup.append(el);
                form.append(divFormGroup);

                div4=$("<div>").addClass("row").css({"margin-top"});
                div5=$("<div>").addClass("col-4");

                el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Inserisci").attr({ "onClick": "inserisci()" });
                div5.append(el);
                div4.append(div5);
                div5=$("<div>").addClass("col-4");
                div4.append(div5);
                div5=$("<div>").addClass("col-4");
                el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Annulla");
                div5.append(el);
                div4.append(div5);
                form.append(div4);

                div2.append(form);
                div.append(div1);
                div.append(div2);
                div.append(div3);
                $("#main").html("");
                $("#main").append(div);
                $(".datepicker").datepicker({
                    todayBtn: "linked",
                    language: "it",
                    calendarWeeks: true,
                    todayHighlight: true
                });
            } else {
                alert("C'è un problema con il recupero dell'elenco delle fasi.")
            }
        } 
    }
    xhr.send();
}