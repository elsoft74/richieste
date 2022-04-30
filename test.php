<?php
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);
    include_once("be/config/dbconfig.php");
    include_once("be/classes/db.php");
    include_once("be/classes/user.php");
    include_once("be/classes/richiesta.php");
    //$user = new User();
    //$user->setPassword("1234");
    //$user->setUserName("user");
    
    //var_dump($user);
    //print("<br>");
    //print($user->login());
    //print("<br>");
    //var_dump($user);
    //print("<br>");
    var_dump(Richiesta::getRequestes("A"));
    print("<br>");
    var_dump(Richiesta::getRequestes("C"));
    print("<br>");
    var_dump(Richiesta::getRequestes("T"));
    print("<br>");

    // SELECT r.id AS id, r.nome AS nome, r.cognome AS cognome, r.codicefiscale AS codicefiscale, r.email AS email, r.numero AS numero, r.data_ric AS data_ric, r.fase AS fase, r.motivo AS motivo, r.note as note, r.created AS created, r.created_by AS created_by, CONCAT(u1.nome," ",u1.cognome) AS created_by_nome_cognome, r.last_update AS last_update, r.updated_by AS updated_by, CONCAT(u2.nome," ",u2.cognome) AS last_update_by_nome_cognome, r.is_active AS is_active FROM `richieste` AS r LEFT JOIN `users` AS u1 ON r.`created_by`= u1.ID LEFT JOIN `users` AS u2 ON r.`updated_by`= u2.ID 
?>