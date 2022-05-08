<?php
    ini_set('display_startup_errors', 1);
    ini_set('display_errors', 1);
    error_reporting(-1);
    $out = new stdClass();
    $out->status = "KO";
    include_once("config/config.php");
    include_once("classes/db.php");
    include_once("classes/user.php");
    include_once("classes/richiesta.php");
    try {
        $tmp = json_decode($_POST['richiesta']);
        if ($tmp != null/* && $user != null*/) {
            $ric = new Richiesta();
            $ric->setId($tmp->id);
            $ric->getDetails();
            $ric->setNome($tmp->nome);
            $ric->setCognome($tmp->cognome);
            $ric->setCodiceFiscale($tmp->codiceFiscale);
            $ric->setEmail($tmp->email);
            $ric->setDataRic($tmp->dataRic);
            $ric->setNumero($tmp->numero);
            $ric->setFase($tmp->fase);
            $ric->setMotivo($tmp->motivo);
            $ric->setNote($tmp->note);
            $ric->setLastUpdate((new DateTime())->format('Y-m-d H:i:s'));
            $ric->setLastUpdateBy($ric->lastUpdateBy);
            $out=$ric->update();
            // $out->status="OK";
            // $out->debug=print_r($ric,true);

        }
    } catch (Exception $ex) {
        $out->error = $ex->getMessage();
    }
    print(json_encode($out));
