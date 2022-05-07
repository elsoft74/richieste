function buildInsertForm() {

    let fasi = JSON.parse(localStorage.getItem("fasi"));
    if (fasi != null) {
        let div = $("<div>").addClass("row");
        let div1 = $("<div>").addClass("col-2");
        let div2 = $("<div>").addClass("col-8");
        let div3 = $("<div>").addClass("col-2");
        let form = $("<form>");

        let divFormGroup = $("<div>").addClass("form-group");
        let el = $("<label>").attr({ "for": "nome" }).text("Nome");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "nome" });
        divFormGroup.append(el);
        //form.append(divFormGroup);

        //divFormGroup=$("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "cognome" }).text("Cognome");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "cognome" });
        divFormGroup.append(el);
        //form.append(divFormGroup);

        //divFormGroup=$("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "codiceFiscale" }).text("Codice Fiscale");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "codiceFiscale" });
        divFormGroup.append(el);
        form.append(divFormGroup);

        divFormGroup = $("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "email" }).text("e-mail");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "email", "id": "email" });
        divFormGroup.append(el);
        //form.append(divFormGroup);

        //divFormGroup=$("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "numero" }).text("Numero");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "number", "id": "numero" });
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
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": "motivo" });
        divFormGroup.append(el);
        form.append(divFormGroup);

        divFormGroup = $("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "note" }).text("Note");
        divFormGroup.append(el);
        el = $("<textarea>").addClass("form-control").attr({ "type": "text", "id": "note" });
        divFormGroup.append(el);
        form.append(divFormGroup);

        div4 = $("<div>").addClass("row").css({ "margin-top": "5" });
        div5 = $("<div>").addClass("col-4");

        el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Inserisci").attr({ "onClick": "inserisci()" });
        div5.append(el);
        div4.append(div5);
        div5 = $("<div>").addClass("col-4");
        div4.append(div5);
        div5 = $("<div>").addClass("col-4");
        el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Annulla").attr({ "onClick": "hideInsert()" });
        div5.append(el);
        div4.append(div5);
        form.append(div4);

        div2.append(form);
        div.append(div1);
        div.append(div2);
        div.append(div3);
        $("#insert").html("");
        $("#insert").append(div);
        hideInsert();
        $(".datepicker").datepicker({
            todayBtn: "linked",
            language: "it",
            calendarWeeks: true,
            todayHighlight: true
        });
    }
}

function showInsert() {
    cleanInsert();
    $("#insert").show();
}

function hideInsert() {
    cleanInsert();
    $("#insert").hide();
}

function cleanInsert() {
    $("#nome").val("");
    $("#cognome").val("");
    $("#codiceFiscale").val("");
    $("#email").val("");
    $("#numero").val("");
    $("#data").val("");
    $("#fase").val("");
    $("#motivo").val("");
    $("#note").val("");
}