<?php
class Richiesta
{
    public $id;
    public $nome;
    public $cognome;
    public $codiceFiscale;
    public $email;
    public $numero;
    public $dataRic;
    public $fase;
    public $motivo;
    public $note;
    public $created;
    public $createdBy;
    public $createdByNomeCognome;
    public $lastUpdate;
    public $lastUpdateBy;
    public $lastUpdateByNomeCognome;
    public $isActive;

    public function __construct()
    {
        $this->id = null;
    }


    public function setId($val)
    {
        $this->id = $val;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setNome($val)
    {
        $this->nome = $val;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setCognome($val)
    {
        $this->cognome = $val;
    }

    public function getCognome()
    {
        return $this->cognome;
    }

    public function setCodiceFiscale($val)
    {
        $this->codiceFiscale = $val;
    }

    public function getCodiceFiscale()
    {
        return $this->codiceFiscale;
    }

    public function setEmail($val)
    {
        $this->email = $val;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setNumero($val)
    {
        $this->numero = $val;
    }

    public function getNumero()
    {
        return $this->numero;
    }

    public function setDataRic($val)
    {
        $this->dataRic = $val;
    }

    public function getDataRic()
    {
        return $this->dataRic;
    }

    public function setFase($val)
    {
        $this->fase = $val;
    }

    public function getFase()
    {
        return $this->fase;
    }

    public function setMotivo($val)
    {
        $this->motivo = $val;
    }

    public function getMotivo()
    {
        return $this->motivo;
    }

    public function setNote($val)
    {
        $this->note = $val;
    }

    public function getNote()
    {
        return $this->note;
    }

    public function setCreated($val)
    {
        $this->created = $val;
    }

    public function getCreated()
    {
        return $this->created;
    }

    public function setCreatedBy($val)
    {
        $this->createdBy = $val;
    }

    public function getCreatedBy()
    {
        return $this->createdBy;
    }

    public function setCreatedByNomeCognome($val)
    {
        $this->createdByNomeCognome = $val;
    }

    public function getCreatedByNomeCognome()
    {
        return $this->createdByNomeCognome;
    }

    public function setLastUpdate($val)
    {
        $this->lastUpdate = $val;
    }

    public function getLastUpdate()
    {
        return $this->lastUpdate;
    }

    public function setLastUpdateBy($val)
    {
        $this->lastUpdateBy = $val;
    }

    public function getLastUpdateBy()
    {
        return $this->lastUpdateBy;
    }

    public function setLastUpdateByNomeCognome($val)
    {
        $this->lastUpdateByNomeCognome = $val;
    }

    public function getLastUpdateByNomeCognome()
    {
        return $this->lastUpdateByNomeCognome;
    }

    public function setIsActive($val)
    {
        $this->isActive = $val;
    }

    public function getIsActive()
    {
        return $this->isActive;
    }

    public function getDetails()
    {
        if ($this->id != null) {
            try {
                $conn = DB::conn();
                if ($conn != null) {

                    $query = 'SELECT r.id AS id,
                            r.nome AS nome,
                            r.cognome AS cognome,
                            r.codicefiscale AS codicefiscale,
                            r.email AS email,
                            r.numero AS numero,
                            r.data_ric AS data_ric,
                            r.fase AS fase,
                            r.motivo AS motivo,
                            r.note as note,
                            r.created AS created,
                            r.created_by AS created_by,
                            CONCAT(u1.nome," ",u1.cognome) AS created_by_nome_cognome,
                            r.last_update AS last_update,
                            r.updated_by AS updated_by,
                            CONCAT(u2.nome," ",u2.cognome) AS last_update_by_nome_cognome,
                            r.is_active AS is_active
                            FROM `richieste` AS r
                            LEFT JOIN `users` AS u1 ON r.`created_by`= u1.ID
                            LEFT JOIN `users` AS u2 ON r.`updated_by`= u2.ID
                            WHERE r.id=:id';

                    $stmt = $conn->prepare($query);
                    $stmt->bindParam(':id', $this->id, PDO::PARAM_INT);
                    $stmt->execute();

                    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

                    if (!$res) {
                        throw new Exception("ERRORE-NELLA-RICERCA-PER-LA-RICHIESTA-" . $this->id);
                    } else {
                        //var_dump($res);
                        $res = $res[0]; // Ci sarà un solo risultato utile
                        $this->setNome($res["nome"]);
                        $this->setCognome($res["cognome"]);
                        $this->setCodiceFiscale($res["codicefiscale"]);
                        $this->setEmail($res["email"]);
                        $this->setNumero($res["numero"]);
                        $this->setDataRic($res["data_ric"]);
                        $this->setFase($res["fase"]);
                        $this->setMotivo($res["motivo"]);
                        $this->setNote($res["note"]);
                        $this->setCreated($res["created"]);
                        $this->setCreatedBy($res["created_by"]);
                        $this->setCreatedByNomeCognome($res["created_by_nome_cognome"]);
                        $this->setLastUpdate($res["last_update"]);
                        $this->setLastUpdateBy($res["updated_by"]);
                        $this->setLastUpdateByNomeCognome($res["last_update_by_nome_cognome"]);
                        $this->setIsActive($res["is_active"]);
                    }
                } else {
                    throw new Exception("DB-CONNECTION-ERROR");
                }
            } catch (Exception $e) {
                $conn = null;
            }
        } else {
            throw new Exception("EMPTY-REQUEST-ERROR");
        }
    }

    public static function getRequestes($val)
    {
        //$val null o "A" restituisce tutte le richieste Attive
        //$val "T" restituisce tutte le richieste
        //$vak "C" restitiosce le richieste inattive (Cancellate)

        $out = new stdClass();
        $out->status = "KO";
        try {
            $conn = DB::conn();
            if ($conn != null) {
                try {
                    $query = "SELECT id FROM `richieste` ";
                    if ($val == null || $val == "A") {
                        $query .= "WHERE `is_active` = 1 ";
                    } else if ($val == "C") {
                        $query .= "WHERE `is_active` = 0 ";
                    }

                    $query .= "ORDER BY data_ric, created, last_update";

                    $stmt = $conn->prepare($query);
                    $stmt->execute();

                    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    $out->data = $res;
                    if (!$res) {
                        throw new Exception("ERRORE-NELLA-RICERCA");
                    }
                    $out->data = [];
                    foreach ($res as $r) {
                        $tmp = new Richiesta();
                        $tmp->setId($r["id"]);
                        $tmp->getDetails();
                        array_push($out->data, $tmp);
                    }

                    $out->status = "OK";
                } catch (Exception $ex) {
                    $out->error = $ex->getMessage();
                }
            } else {
                $out->error = "DB-CONNECTION-ERROR";
            }
        } catch (Exception $e) {
            $conn = null;
        }
        //file_put_contents("../log/dbtest.log",(new DateTime("now"))->format("Y-m-d H:i").$msg."\n",FILE_APPEND);
        return $out;
    }

    public function insertRequest()
    {
        $out = new stdClass();
        $out->status = "KO";
        try {
            if ($this->getId() != null) {
                $conn = DB::conn();
                if ($conn != null) {
                    try {


                        $out->status = "OK";
                    } catch (Exception $ex) {
                        $out->error = $ex->getMessage();
                    }
                } else {
                    throw new Exception("DB-CONNECTION-ERROR");
                }
            } else {
                throw new Exception("EMPTY-REQUEST");
            }
        } catch (Exception $ex) {
            $conn = null;
            $out->error = $ex->getMessage();
        }
        //file_put_contents("../log/dbtest.log",(new DateTime("now"))->format("Y-m-d H:i").$msg."\n",FILE_APPEND);
        return $out;
    }

    public function update()
    {
        $out = new stdClass();
        $out->status = "KO";
        try {
            if ($this->getId() != null) {
                $conn = DB::conn();
                if ($conn != null) {
                    try {
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $query = "UPDATE `richieste` 
                            SET `nome`=:nome,
                            `cognome`=:cognome,
                            `codicefiscale`=:codiceFiscale,
                            `email`=:email,
                            `numero`=:numero,
                            `data_ric`=:data_ric,
                            `fase`=:fase,
                            `motivo`=:motivo,
                            `note`=:note,
                            `last_update`=:last_update,
                            `updated_by`=:updated_by
                            WHERE `id`=:id";

                        $stmt = $conn->prepare($query);

                        $stmt->bindParam(':nome', $this->nome, PDO::PARAM_STR);
                        $stmt->bindParam(':cognome', $this->cognome, PDO::PARAM_STR);
                        $stmt->bindParam(':codiceFiscale', $this->codiceFiscale, PDO::PARAM_STR);
                        $stmt->bindParam(':email', $this->email, PDO::PARAM_STR);
                        $stmt->bindParam(':numero', $this->numero, PDO::PARAM_STR);
                        $stmt->bindParam(':data_ric', $this->dataRic, PDO::PARAM_STR);
                        $stmt->bindParam(':fase', $this->fase, PDO::PARAM_INT);
                        $stmt->bindParam(':motivo', $this->motivo, PDO::PARAM_STR);
                        $stmt->bindParam(':note', $this->note, PDO::PARAM_STR);
                        $stmt->bindParam(':last_update', $this->lastUpdate, PDO::PARAM_STR);
                        $stmt->bindParam(':updated_by', $this->lastUpdateBy, PDO::PARAM_INT);
                        $stmt->bindParam(':id', $this->id, PDO::PARAM_INT);

                        $stmt->execute();
                        $out->num=$stmt->rowCount();
                        


                        // if ($stmt->rowCount() != 1) {
                        //     throw new Exception("UPDATE-ERROR");
                        // }

                        $out->status = "OK";
                    } catch (Exception $ex) {
                        $out->error = $ex->getMessage();
                    }
                } else {
                    throw new Exception("DB-CONNECTION-ERROR");
                }
            } else {
                throw new Exception("EMPTY-REQUEST");
            }
        } catch (Exception $ex) {
            $conn = null;
            $out->error = $ex->getMessage();
        }
        //file_put_contents("../log/dbtest.log",(new DateTime("now"))->format("Y-m-d H:i").$msg."\n",FILE_APPEND);
        return $out;
    }
}
