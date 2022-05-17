function showRequests(richieste, user) {
    $("#main").html("");

    var table = new Tabulator("#main", {
        data: richieste,           //load row data from array
        layout: "fitColumns",      //fit columns to width of table
        responsiveLayout: "hide",  //hide columns that dont fit on the table
        tooltips: true,            //show tool tips on cells
        addRowPos: "top",          //when adding a new row, add it to the top of the table
        history: true,             //allow undo and redo actions on the table
        pagination: "local",       //paginate the data
        paginationSize: 10,         //allow 7 rows per page of data
        paginationCounter: "rows", //display count of paginated rows in footer
        movableColumns: true,      //allow column order to be changed
        initialSort: [             //set the initial sort order of the data
            { column: "dataRic", dir: "asc" },
        ],
        columns: [                 //define the table columns
            { title: "#", field: "id", width: 10, editor: false, hozAlign: "center" },
            { title: "Nome", field: "nome", editor: false },
            { title: "Cognome", field: "cognome", editor: false, headerPopup: headerPopupFormatter, headerPopupIcon: '<span class="material-symbols-outlined">filter_alt</span>', headerFilter: emptyHeaderFilter, headerFilterFunc: "like" },
            { title: "Codice Fiscale", field: "codiceFiscale", editor: false, hozAlign: "center", headerPopup: headerPopupFormatter, headerPopupIcon: '<span class="material-symbols-outlined">filter_alt</span>', headerFilter: emptyHeaderFilter, headerFilterFunc: "like" },
            { title: "e-mail", field: "email", editor: false },
            { title: "Numero Richiesta", field: "numero", editor: false, hozAlign: "center", headerPopup: headerPopupFormatter, headerPopupIcon: '<span class="material-symbols-outlined">filter_alt</span>', headerFilter: emptyHeaderFilter, headerFilterFunc: "like" },
            {
                title: "Data Ricezione", field: "dataRic", editor: false, hozAlign: "center", formatter: "datetime", formatterParams: {
                    //inputFormat:"YYY-MM-DD HH:mm:ss",
                    outputFormat: "dd-MM-yyyy",
                    invalidPlaceholder: "(data non valida)",
                    timezone: "Europe/Rome",
                }
            },
            { title: "Motivo", field: "motivo", editor: false, formatter: "textarea" },
            // {
            //     title: "Avanzamento",
            //     columns: [
            { title: "Giorni", field: "giorni", editor: false, hozAlign: "center" },
            {
                title: "Fase", field: "fase", editor: false, hozAlign: "center",/* editor: "list", headerFilter: true, headerFilterParams: {
                    values: function (cell, formatterParams, onRendered) {
                        var out = [];
                        let fase = { "": "Tutte" };
                        out.push(fase);
                        fasi.forEach(el => {
                            fase[el.id] = el.descrizione;
                            console.log(fase);
                            out.push(fase);
                        });
                        return out;

                    }
                },*/ formatter: function (cell, formatterParams, onRendered) {
                    let val=cell.getValue();
                    let out="FASE NON TROVATA";
                    fasi.forEach(el => {
                        if(el.id==val) {
                            out = el.descrizione;
                        }
                    });
                    return out;
                }
            },
            { title: "Note", field: "note", editor: false, formatter: "textarea"/*, cellClick: cellPopupFormatter */ },
            {
                title: "Creata",
                columns: [{
                    title: "il", field: "created", editor: false, hozAlign: "center", formatter: "datetime", formatterParams: {
                        //inputFormat:"YYY-MM-DD HH:mm:ss",
                        outputFormat: "dd-MM-yyyy HH:mm:ss",
                        invalidPlaceholder: "(data non valida)",
                        timezone: "Europe/Rome",
                    }
                },
                { title: "da", field: "createdByNomeCognome", editor: false },]
            },
            {
                title: "Aggiornata",
                columns: [{
                    title: "il", field: "lastUpdate", editor: false, hozAlign: "center", formatter: "datetime", formatterParams: {
                        //inputFormat:"YYY-MM-DD HH:mm:ss",
                        outputFormat: "dd-MM-yyyy HH:mm:ss",
                        invalidPlaceholder: "(data non valida)",
                        timezone: "Europe/Rome",
                    }
                },
                { title: "da", field: "lastUpdateByNomeCognome", editor: false },]
            },
            {
                title: "", width: 10, hozAlign: "center", editor: false, cellClick: showElementUpdate, formatter: function (cell, formatterParams, onRendered) {
                    //cell - the cell component
                    //formatterParams - parameters set for the column
                    //onRendered - function to call when the formatter has been rendered

                    return '<span class="material-symbols-outlined">edit</span>'; //return the contents of the cell;
                },
            }


            //     ]
            // },


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
    // $("#main").append(table);
}


function inserisci() {
    let richiesta = {};
    let err = '';
    richiesta.nome = $("#nome").val().trim();
    richiesta.cognome = $("#cognome").val().trim();
    richiesta.codiceFiscale = $("#codiceFiscale").val().trim();
    richiesta.email = $("#email").val().trim();
    richiesta.numero = $("#numero").val().trim();
    richiesta.data = $("#data").val();
    richiesta.fase = $("#fase").val();
    richiesta.motivo = $("#motivo").val().trim();
    richiesta.note = $("#note").val().trim();
    richiesta.createdBy = ""+lu.id;
    if (richiesta.numero == '') {
        err += "Il numero della richiesta è obbligatorio\n";
    }
    if (richiesta.codiceFiscale == '') {
        err += "Il codice fiscale è obbligatorio\n";
    }
    if (richiesta.data == '') {
        err += "La data è obbligatoria\n";
    }
    if (err != '') {
        alert(err);
    } else {
        let xhr = new XMLHttpRequest();
        let url = "be/insertRequest.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if (result.status == "OK") {
                    alert("Richiesta inserita.");
                    cleanInsert();
                    location.reload();
                } else {
                    alert("Impossibile inserire la richiesta.\n"+result.error);
                }
            }
        }
        xhr.send("richiesta="+JSON.stringify(richiesta));
    }
}

function aggiorna() {
    let richiesta = {};
    let err = '';
    richiesta.id = $("#editId").val().trim();
    richiesta.nome = $("#editNome").val().trim();
    richiesta.cognome = $("#editCognome").val().trim();
    richiesta.codiceFiscale = $("#editCodiceFiscale").val().trim();
    richiesta.email = $("#editEmail").val().trim();
    richiesta.numero = $("#editNumero").val().trim();
    richiesta.dataRic = $("#editData").val();
    richiesta.fase = $("#editFase").val();
    richiesta.motivo = $("#editMotivo").val().trim();
    richiesta.note = $("#editNote").val().trim();
    richiesta.lastUpdateBy = "" + lu.id;
    if (richiesta.numero == '') {
        err += "Il numero della richiesta è obbligatorio\n";
    }
    if (richiesta.codiceFiscale == '') {
        err += "Il codice fiscale è obbligatorio\n";
    }
    if (err != '') {
        alert(err);
    } else {

        let xhr = new XMLHttpRequest();
        let url = "be/updateRequest.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.setRequestHeader("richiesta", JSON.stringify(richiesta));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result = JSON.parse(xhr.responseText);
                if (result.status == "OK") {
                    cleanEdit();
                    alert("Richiesta aggiornata.");
                    location.reload();
                } else {
                    alert("Impossibile aggiornare la richiesta.");
                }
            }
        }
        xhr.send("richiesta="+JSON.stringify(richiesta));
    }

}

var showElementUpdate = function (e, row) {
    $("#edit").fadeIn();
    var element = row.getData();
    $("#editId").val(element.id);
    $("#editNome").val(element.nome);
    $("#editCognome").val(element.cognome);
    $("#editCodiceFiscale").val(element.codiceFiscale);
    $("#editEmail").val(element.email);
    $("#editNumero").val(element.numero);
    $("#editData").val(((new luxon.DateTime.fromSQL(element.dataRic)).toFormat("yyyy-MM-dd")));
    $("#editFase").val(element.fase);
    $("#editMotivo").val(element.motivo);
    $("#editNote").val(element.note);
}

function readRequests(toBeCompleted) {
    let xhr = new XMLHttpRequest();
    let url = "be/getrequests.php";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let ready = false;
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result = JSON.parse(xhr.responseText);
            if (result.status == "OK") {
                richieste = result.data;
                toBeCompleted.richieste = true;
            } else {
                alert("Impossibile recuperare l'elenco delle richieste.");
            }
        }
    }
    xhr.send();
}

//create header popup contents
var headerPopupFormatter = function (e, column, onRendered) {
    var container = document.createElement("div");

    var label = document.createElement("label");
    label.innerHTML = "Filter Column:";
    label.style.display = "block";
    label.style.fontSize = ".7em";

    var input = document.createElement("input");
    input.placeholder = "Filter Column...";
    input.value = column.getHeaderFilterValue() || "";

    input.addEventListener("keyup", (e) => {
        column.setHeaderFilterValue(input.value);
    });

    container.appendChild(label);
    container.appendChild(input);

    return container;
}

//create dummy header filter to allow popup to filter
var emptyHeaderFilter = function () {
    return document.createElement("div");;
}

var cellPopupFormatter = function (e, row, onRendered) {
    var data = row.getData();
    // container = document.createElement("div"),
    // contents = "<strong style='font-size:1.2em;'>Note</strong><br/><ul style='padding:0;  margin-top:10px; margin-bottom:0;'>";
    // contents += "<li><strong>Name:</strong> " + data.note + "</li>";
    // // contents += "<li><strong>Gender:</strong> " + data.gender + "</li>";
    // // contents += "<li><strong>Favourite Colour:</strong> " + data.col + "</li>";
    // contents += "</ul>";

    // container.innerHTML = contents;

    // return container;
    alert(data.note);
};
