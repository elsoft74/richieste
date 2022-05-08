function buildInsertForm(target) {

    let canBuild=false;
    switch(target){
        case "insert":
            tar="#insert";
            fun1="inserisci()";
            fun2=hideInsert();
            attrs={
                id:"id",
                nome:"nome",
                cognome:"cognome",
                codiceFiscale:"codiceFiscale",
                email:"email",
                numero:"numero",
                data:"data",
                fase:"fase",
                motivo:"motivo",
                note:"note"
            }
            canBuild=true;
            break;
        case "editRow":
            tar="#editRow";
            fun1="aggiorna()";
            fun2=hideEdit();
            attrs={
                id:"editId",
                nome:"editNome",
                cognome:"editCognome",
                codiceFiscale:"editCodiceFiscale",
                email:"editEmail",
                numero:"editNumero",
                data:"editData",
                fase:"editFase",
                motivo:"editMotivo",
                note:"editNote"
            }
            canBuild=true;
            break;
    }

    if (canBuild) {
        let div = $("<div>").addClass("row");
        let div1 = $("<div>").addClass("col-2");
        let div2 = $("<div>").addClass("col-8");
        let div3 = $("<div>").addClass("col-2");
        let form = $("<form>");

        let divFormGroup = $("<div>").addClass("form-group");
        let el = $("<input>").attr({ "type": "hidden", "id":attrs.id });
        divFormGroup.append(el);
        el = $("<label>").attr({ "for": "nome" }).text("Nome");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": attrs.nome });
        divFormGroup.append(el);
    
        el = $("<label>").attr({ "for": "cognome" }).text("Cognome");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": attrs.cognome });
        divFormGroup.append(el);
    
        el = $("<label>").attr({ "for": "codiceFiscale" }).text("Codice Fiscale");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": attrs.codiceFiscale });
        divFormGroup.append(el);
        form.append(divFormGroup);

        divFormGroup = $("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "email" }).text("e-mail");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "email", "id": attrs.email });
        divFormGroup.append(el);
    
        el = $("<label>").attr({ "for": "numero" }).text("Numero");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": attrs.numero });
        divFormGroup.append(el);
    
        let div4 = $("<div>").addClass("col").addClass("date");
        el = $("<label>").text("Data Ricezione");
        div4.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "date", "id": attrs.data });
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
        el = $("<select>").addClass("form-control").attr({ "id": attrs.fase });
        fasi.forEach(element => {
            let option = $("<option>").attr({ "value": element.id }).text(element.descrizione);
            el.append(option);
        });
        divFormGroup.append(el);
    
        el = $("<label>").attr({ "for": "motivo" }).text("Motivo");
        divFormGroup.append(el);
        el = $("<input>").addClass("form-control").attr({ "type": "text", "id": attrs.motivo });
        divFormGroup.append(el);
        form.append(divFormGroup);

        divFormGroup = $("<div>").addClass("form-group");
        el = $("<label>").attr({ "for": "note" }).text("Note");
        divFormGroup.append(el);
        el = $("<textarea>").addClass("form-control").attr({ "type": "text", "id": attrs.note });
        divFormGroup.append(el);
        form.append(divFormGroup);

        div4 = $("<div>").addClass("row").css({ "margin-top": "5" });
        div5 = $("<div>").addClass("col-4");

        el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Conferma").attr({ "onClick": fun1 });
        div5.append(el);
        div4.append(div5);
        div5 = $("<div>").addClass("col-4");
        div4.append(div5);
        div5 = $("<div>").addClass("col-4");
        el = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Annulla").attr({ "onClick": fun2 });
        div5.append(el);
        div4.append(div5);
        form.append(div4);

        div2.append(form);
        div.append(div1);
        div.append(div2);
        div.append(div3);
        $(tar).html("");
        $(tar).append(div);
        fun2;
    }
}

function showInsert() {
    hideAll();
    cleanInsert();
    $("#insert").show();
}

function hideInsert() {
    cleanInsert();
    $("#insert").hide();
}

function showEdit() {
    hideAll();
    cleanEdit();
    $("#editRow").show();
}

function hideEdit() {
    cleanEdit();
    $("#editRow").hide();
}

function cleanInsert() {
    $("#id").val('')
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

function cleanEdit() {
    $("#editId").val('')
    $("#editNome").val("");
    $("#editCognome").val("");
    $("#editCodiceFiscale").val("");
    $("#editEmail").val("");
    $("#editNumero").val("");
    $("#editData").val("");
    $("#editFase").val("");
    $("#editMotivo").val("");
    $("#editNote").val("");
}

function hideAll(){
    $(".sections").hide();
}