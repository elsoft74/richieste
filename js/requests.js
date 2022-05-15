function showRequests(richieste, user) {
    $("#main").html("");

    var table = new Tabulator("#richieste-table", {
        data:richieste,           //load row data from array
        layout:"fitColumns",      //fit columns to width of table
        responsiveLayout:"hide",  //hide columns that dont fit on the table
        tooltips:true,            //show tool tips on cells
        addRowPos:"top",          //when adding a new row, add it to the top of the table
        history:true,             //allow undo and redo actions on the table
        pagination:"local",       //paginate the data
        paginationSize:7,         //allow 7 rows per page of data
        paginationCounter:"rows", //display count of paginated rows in footer
        movableColumns:true,      //allow column order to be changed
        initialSort:[             //set the initial sort order of the data
            {column:"dataRic", dir:"asc"},
        ],
        columns:[                 //define the table columns
        {title:"#", field:"id", editor:false},
        {title:"Nome", field:"nome", editor:false},
        {title:"Cognome", field:"cognome", editor:false},
        {title:"Codice Fiscale", field:"CodiceFiscale", editor:false},
        {title:"e-mail", field:"email", editor:false},
        {title:"Numero Richiesta", field:"numero", editor:false},
        {title:"Data Ricezione", field:"dataRic", editor:false, sorter:"date"},
        {title:"Giorni", field:"id", editor:false},
        {title:"Fase", field:"fase", editor:false},
        {title:"Motivo", field:"motivo", editor:false},
        {title:"Note", field:"id", editor:false},
        {title:"Creata il", field:"created", editor:false},
        {title:"Creata da", field:"createdByNomeCognome", editor:false},
        {title:"Aggiornata il", field:"lastUpdate", editor:false},
        {title:"Aggiornata da", field:"lastUpdateByNomeCognome", editor:false},

            // {title:"Name", field:"name", editor:"input"},
            // {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:true},
            // {title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
            // {title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
            // {title:"Color", field:"col", width:130, editor:"input"},
            // {title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
            // {title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
        ],
    });
    // let table = buildTable();

    // let tbody = $("<tbody>");
    // richieste.forEach(element => {
    //     tr = $("<tr>");
    //     el = $("<th>").addClass("element-data").attr({ "scope": "row"/*,"data":JSON.stringify(element)*/ }).text(element.id);
    //     tr.append(el);
    //     el = $("<td>").text(element.nome);
    //     tr.append(el);
    //     el = $("<td>").text(element.cognome);
    //     tr.append(el);
    //     el = $("<td>").text(element.codiceFiscale);
    //     tr.append(el);
    //     el = $("<td>").text(element.email);
    //     tr.append(el);
    //     el = $("<td>").text(element.numero);
    //     tr.append(el);
    //     el = $("<td>").text(formattaData(element.dataRic,false));
    //     tr.append(el);
    //     el = $("<td>").text(10 - calcolaGiorni(element.dataRic));
    //     tr.append(el);
    //     el = $("<td>").text(element.fase);
    //     tr.append(el);
    //     el = $("<td>").text(element.motivo);
    //     tr.append(el);
    //     el = $("<td>").html('<span class="material-symbols-outlined">notes</span>').attr({ "onClick": "alert('"+element.note+"')", "value": element.note }).css({ "cursor": "pointer" });
    //     tr.append(el);
    //     el = $("<td>").text(formattaData(element.created,true));
    //     tr.append(el);
    //     el = $("<td>").text(element.createdByNomeCognome);
    //     tr.append(el);
    //     el = $("<td>").text(formattaData(element.lastUpdate,true));
    //     tr.append(el);
    //     el = $("<td>").text(element.lastUpdateByNomeCognome);
    //     tr.append(el);
    //     if (user.canEdit) {
    //         el = $("<td>").html('<span class="material-symbols-outlined">edit</span>').css({ "cursor": "pointer" }).click(function(){
    //             showElementUpdate(element);
    //         });
    //         tr.append(el);
    //     } else {
    //         el = $("<td>").text();
    //         tr.append(el);
    //     }
    //     if (user.canEdit) {
    //         el = $("<td>").html('<span class="material-symbols-outlined">delete_forever</span>').attr({ "onClick": "alert('Delete row')" }).css({ "cursor": "pointer" });
    //         tr.append(el);
    //     } else {
    //         el = $("<td>").text();
    //         tr.append(el);
    //     }
    //     tbody.append(tr);
    // });
    // table.append(tbody);
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

