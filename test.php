<html>
    <head>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3">
        <script src="bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"></script>
        <script src="js/jquery-3.6.0.min.js"></script>
    </head>

    <body>
        <div class="container">
            <?php
            ini_set('display_startup_errors', 1);
            ini_set('display_errors', 1);
            error_reporting(-1);
            include_once("be/config/dbconfig.php");
            include_once("be/classes/db.php");
            include_once("be/classes/user.php");
            include_once("be/classes/richiesta.php");
            $user = new User();
            $user->setPassword("user");
            $user->setUserName("password");
            print('<div class="row">');
                print('<div class="col-6">');
                var_dump($user);
                print('</div>');
                print('<div class="col-6">');
                var_dump($user->login());
                print('</div>');
            print('</div>');
            print('<div class="row">');
                print('<div class="col-3">');
                var_dump($user);
                print('</div>');
            print('</div>');
            print('<div class="row">');
            var_dump(Richiesta::getRequestes("A"));
            print('</div>');
            print('<div class="row">');
            var_dump(Richiesta::getRequestes("C"));
            print('</div>');
            print('<div class="row">');
            var_dump(Richiesta::getRequestes("T"));
            print('</div>');
            print('<div class="row">');
            $richiesta = new Richiesta();
            $richiesta->setId(1);
            $richiesta->getDetails();
            var_dump($richiesta);
            print('</div>');
            print('<div class="row">');
            var_dump($richiesta->insertRequest());
            print('</div>');
            // SELECT r.id AS id, r.nome AS nome, r.cognome AS cognome, r.codicefiscale AS codicefiscale, r.email AS email, r.numero AS numero, r.data_ric AS data_ric, r.fase AS fase, r.motivo AS motivo, r.note as note, r.created AS created, r.created_by AS created_by, CONCAT(u1.nome," ",u1.cognome) AS created_by_nome_cognome, r.last_update AS last_update, r.updated_by AS updated_by, CONCAT(u2.nome," ",u2.cognome) AS last_update_by_nome_cognome, r.is_active AS is_active FROM `richieste` AS r LEFT JOIN `users` AS u1 ON r.`created_by`= u1.ID LEFT JOIN `users` AS u2 ON r.`updated_by`= u2.ID 
            ?>
        </div>
    </body>

</html>