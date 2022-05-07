function showRequests(richieste, user) {
    $("#main").html("");
    let table = buildTable();

    let tbody = $("<tbody>");
    richieste.forEach(element => {
        tr = $("<tr>");
        el = $("<th>").addClass("element-data").attr({ "scope": "row"/*,"data":JSON.stringify(element)*/ }).text(element.id);
        tr.append(el);
        el = $("<td>").text(element.nome);
        tr.append(el);
        el = $("<td>").text(element.cognome);
        tr.append(el);
        el = $("<td>").text(element.codiceFiscale);
        tr.append(el);
        el = $("<td>").text(element.email);
        tr.append(el);
        el = $("<td>").text(element.numero);
        tr.append(el);
        el = $("<td>").text(element.dataRic);
        tr.append(el);
        el = $("<td>").text(10 - calcolaGiorni(element.dataRic));
        tr.append(el);
        el = $("<td>").text(element.fase);
        tr.append(el);
        el = $("<td>").text(element.motivo);
        tr.append(el);
        el = $("<td>").html('<span class="material-symbols-outlined">notes</span>').attr({ "onClick": "alert('"+element.note+"')", "value": element.note }).css({ "cursor": "pointer" });
        tr.append(el);
        el = $("<td>").text(element.created);
        tr.append(el);
        el = $("<td>").text(element.createdByNomeCognome);
        tr.append(el);
        el = $("<td>").text(element.lastUpdate);
        tr.append(el);
        el = $("<td>").text(element.lastUpdateByNomeCognome);
        tr.append(el);
        if (user.canEdit) {
            el = $("<td>").html('<span class="material-symbols-outlined">edit</span>').css({ "cursor": "pointer" }).click(function(){
                showElementUpdate(element);
            });
            tr.append(el);
        } else {
            el = $("<td>").text();
            tr.append(el);
        }
        if (user.canEdit) {
            el = $("<td>").html('<span class="material-symbols-outlined">delete_forever</span>').attr({ "onClick": "alert('Delete row')" }).css({ "cursor": "pointer" });
            tr.append(el);
        } else {
            el = $("<td>").text();
            tr.append(el);
        }
        tbody.append(tr);
    });
    table.append(tbody);
    $("#main").append(table);
}

function buildTable() {
    let table = $("<table>").addClass("table").attr("id", "requestslist");
    let thead = $("<thead>").addClass("thead-light");
    let tr = $("<tr>");
    let el = $("<th>").attr("scope", "col").text("#");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Nome");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Cognome");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Codice Fiscale");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("e-mail");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("numero");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Data");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Giorni");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Fase");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Motivo");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Note");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Creata");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Creata da");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Aggiornata");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Aggiornata da");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("");
    tr.append(el);
    thead.append(tr);
    table.append(thead);

    return table;
}

function buildEditTable() {
    let table = $("<table>").addClass("table").attr("id", "requestslist");
    let thead = $("<thead>").addClass("thead-light");
    let tr = $("<tr>");
    let el = $("<th>").attr("scope", "col").text("#");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Nome");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Cognome");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Codice Fiscale");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("e-mail");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("numero");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Data");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Fase");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Motivo");
    tr.append(el);
    el = $("<th>").attr("scope", "col").text("Note");
    tr.append(el);
    thead.append(tr);
    table.append(thead);

    return table;
}

function buildEditRow() {
    let div1=$("<div>");
    let table = buildEditTable();
    let tr = $("<tr>");
    let el = $("<th>").addClass("edit-row-element").attr({ "scope": "row","id":"editId"});
    tr.append(el);
    el = $("<td>");
    let el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editNome"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editCognome"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editCodiceFiscale"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"email","id":"editEmail"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"number","id":"editNumero"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editData"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editFase"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<input>").addClass("edit-row-element").attr({"type":"text","id":"editMotivo"});
    el.append(el1);
    tr.append(el);
    el = $("<td>");
    el1=$("<textarea>").addClass("edit-row-element").attr({"id":"editNote"});
    el.append(el1);
    tr.append(el);
    table.append(tr);
    div1.append(table);
    let div2=$("<div>");
    el=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Conferma");
    div2.append(el);
    el=$("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").text("Annulla");
    div2.append(el);
    div1.append(div2);
    $("#editRow").append(div1);
}

function inserisci() {
    let richiesta = {};
    richiesta.nome = $("#nome").val();
    richiesta.cognome = $("#cognome").val();
    richiesta.codiceFiscale = $("#codiceFiscale").val();
    richiesta.email = $("#email").val();
    richiesta.numero = $("#numero").val();
    richiesta.data = $("#data").val();
    richiesta.fase = $("#fase").val();
    richiesta.motivo = $("#motivo").val();
    richiesta.note = $("#note").val();
    console.log(richiesta);
}

function showElementUpdate(element){
    $("#editId").attr({"elementId":element.id});
    $("#editNome").val(element.nome);
    $("#editCognome").val(element.cognome);
    $("#editCodiceFiscale").val(element.codiceFiscale);
    $("#editEmail").val(element.email);
    $("#editNumero").val(element.numero);
    $("#editData").val(element.data);
    $("#editFase").val(element.fase);
    $("#editMotivo").val(element.motivo);
    $("#editNote").val(element.note);
}

function readRequests(toBeCompleted,richieste){
    let xhr = new XMLHttpRequest();
        let url = "be/getrequests.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        let ready = false;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if (result.status == "OK") {
                    richieste=result.data;
                    toBeCompleted.richieste=true;
                } else {
                    alert("Impossibile recuperare l'elenco delle richieste.");
                }
            }
        }
        xhr.send();
}

