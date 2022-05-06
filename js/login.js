function login(){
    user={};
    user.nome="Ivo";
    user.cognome="Pugliese";
    user.canEdit=true;
    user.canAdd=true;
    user.canDelete=true;
    localStorage.setItem("loggeduser",JSON.stringify(user));
    hideLogin();
    location.reload();
}

function logout(){
    localStorage.removeItem("loggeduser");
    $("#username").val("");
    $("#password").val("");
    location.reload(); 
}

function showLogin(){
    $("#login").show();
}

function hideLogin(){
    $("#login").show();
}

function buildLogin() {
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
    $("#login").html("");
    $("#login").append(div);
    $("#login").hide();
}