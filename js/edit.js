function buildEditForm(target){
    buildInsertForm(target); 
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
    $("#edit").fadeOut();
}