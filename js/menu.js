function showMenu(user) {
    $("#menu").html("");
    if (user != null) {
        let row = $("<div>").addClass("row");
        let div1 = $("<div>").addClass("col-10");
        let div2 = $("<div>").addClass("col-1");
        let div3 = $("<div>").addClass("col-1");
        let button = $("<button>").addClass("btn").addClass("middle").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "logout()" }).text("Esci");
        let el = $("<span>").addClass("material-symbols-outlined").addClass("middle");
        el.text("logout");
        button.append(el);
        div1.attr("id", "menubuttons");
        div2.attr("id", "user");
        div3.attr("id", "loginbutton");
        div3.append(button);
        div2.text(user.nome + " " + user.cognome);
        button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({"onClick":'$("#insert").fadeIn()'/*"data-toggle":"modal","data-target":"#input"*/}).text("Inserisci");
        div1.append(button);
        row.append(div1);
        row.append(div2);
        row.append(div3);
        $("#menu").append(row);
    }
}
