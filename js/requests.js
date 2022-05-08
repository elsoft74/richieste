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
        el = $("<td>").text(formattaData(element.dataRic,false));
        tr.append(el);
        el = $("<td>").text(10 - calcolaGiorni(element.dataRic));
        tr.append(el);
        el = $("<td>").text(element.fase);
        tr.append(el);
        el = $("<td>").text(element.motivo);
        tr.append(el);
        el = $("<td>").html('<span class="material-symbols-outlined">notes</span>').attr({ "onClick": "alert('"+element.note+"')", "value": element.note }).css({ "cursor": "pointer" });
        tr.append(el);
        el = $("<td>").text(formattaData(element.created,true));
        tr.append(el);
        el = $("<td>").text(element.createdByNomeCognome);
        tr.append(el);
        el = $("<td>").text(formattaData(element.lastUpdate,true));
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

function aggiorna() {
    let richiesta = {};
    richiesta.id=$("#editId").val();
    richiesta.nome = $("#editNome").val();
    richiesta.cognome = $("#editCognome").val();
    richiesta.codiceFiscale = $("#editCodiceFiscale").val();
    richiesta.email = $("#editEmail").val();
    richiesta.numero = $("#editNumero").val();
    richiesta.dataRic = $("#editData").val();
    richiesta.fase = $("#editFase").val();
    richiesta.motivo = $("#editMotivo").val();
    richiesta.note = $("#editNote").val();
    richiesta.lastUpdateBy = ""+lu.id;
    let xhr = new XMLHttpRequest();
        let url = "be/updateRequest.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if (result.status == "OK") {
                    alert("Richiesta aggiornata.");
                    location.reload();
                } else {
                    alert("Impossibile aggiornare la richiesta.");
                }
            }
        } 
        xhr.send("richiesta="+JSON.stringify(richiesta));
}

function showElementUpdate(element){
    showEdit();
    $("#editId").val(element.id);
    $("#editNome").val(element.nome);
    $("#editCognome").val(element.cognome);
    $("#editCodiceFiscale").val(element.codiceFiscale);
    $("#editEmail").val(element.email);
    $("#editNumero").val(element.numero);
    $("#editData").val(((new Date(element.dataRic)).toISOString()).substr(0,10))
    $("#editFase").val(element.fase);
    $("#editMotivo").val(element.motivo);
    $("#editNote").val(element.note);
}

function readRequests(toBeCompleted){
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

