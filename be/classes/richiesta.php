<?php
    class Richiesta{
        private $id;
        

        public function setId($val){
            $this->id=$val;
        }

        public function getId(){
            return $this->id;
        }

        public function getDetails(){
            ;
        }

        public static function getRequestes($val){
            //$val null o "A" restituisce tutte le richieste Attive
            //$val "T" restituisce tutte le richieste
            //$vak "C" restitiosce le richieste inattive (Cancellate)

            $out = new stdClass();
            $out->status="KO";
            try {
                $conn=DB::conn();
                if ($conn!=null){
                    try {
                        $query="SELECT id FROM `richieste` ";
                        if($val==null || $val=="A"){
                            $query.="WHERE `is_active` = 1 ";
                        } else if($val=="C"){
                            $query.="WHERE `is_active` = 0 ";
                        }

                        $query.="ORDER BY data_ric, created, last_update";
                        
                        $stmt = $conn->prepare($query);
                        $stmt->execute();
                        
                        $res=$stmt->fetchAll(PDO::FETCH_ASSOC);
                        $out->data=$res;
                        if(!$res){
                            throw new Exception("ERRORE-NELLA-RICERCA");
                        }
                        $out->data=[];
                        foreach($res as $r){
                            $tmp = new Richiesta();
                            $tmp->setId($r["id"]);
                            var_dump($tmp);
                            $tmp->getDetails();
                            array_push($out->data,$tmp);
                        }
                        
                        $out->status="OK";
                    } catch(Exception $ex){
                            $out->error=$ex->getMessage();
                        }
                }
                else {
                    $out->error="DB-CONNECTION-ERROR";
                }
            } catch(Exception $e){
                $conn=null;
            }
            //file_put_contents("../log/dbtest.log",(new DateTime("now"))->format("Y-m-d H:i").$msg."\n",FILE_APPEND);
            return json_encode($out);

        }
    }
?>