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
        div1.attr("id", "menubuttons");
        div2.attr("id", "user");
        div3.attr("id", "loginbutton");
        div3.append(button);
        div2.text(user.nome + " " + user.cognome);
        button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "showInsert()" }).text("Inserisci");
        div1.append(button);
        button = $("<button>").addClass("btn").addClass("btn-primary").addClass("btn-block").attr({ "onClick": "alert('Cerca')" }).text("Cerca");
        div1.append(button);
        row.append(div1);
        row.append(div2);
        row.append(div3);
        $("#menu").append(row);
    }
}