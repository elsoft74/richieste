<?php
    class User {    
        public $id;
        public $username;
        private $password;
        public $nome;
        public $cognome;
        public $role_id;
        public $is_active;
        public $permissions;
        
        public function setUserName($val){
            $this->username=$val;
        }

        public function getUserName($val){
            return $this->username;
        }

        public function setPassword($val){
            $this->password=$val;
        }

        public function getPassword($val){
            return $this->password;
        }

        public function login(){
            $out = new stdClass();
            $out->status="KO";
            try {
                $conn=DB::conn();
                if ($conn!=null){
                    try {
                        // $password=hash("sha256",$this->password);
                    
                        $query="SELECT u.id AS id, u.nome AS nome, u.cognome AS cognome, u.role_id AS role_id, u.is_active AS is_active, r.permissions AS permissions FROM `users` AS u JOIN `roles` AS r ON u.role_id=r.id WHERE `username`=:username AND `password`=SHA1(:password)";
                        
                        $stmt = $conn->prepare($query);
                        $stmt->bindParam(':username',$this->username,PDO::PARAM_STR);
                        $stmt->bindParam(':password',$this->password,PDO::PARAM_STR);
                        $stmt->execute();
                        $res=$stmt->fetch(PDO::FETCH_ASSOC);
                        if(!$res){
                            throw new Exception("WRONG-USERNAME-AND-PASSWORD");
                        } else {
                            if(!$res["is_active"]){
                                $out->error="USER-IS-NOT-ACTIVE";
                            } else {
                                $this->id=$res["id"];
                                $this->nome=$res["nome"];
                                $this->cognome=$res["cognome"];
                                $this->role_id=$res["role_id"];
                                $this->is_active=$res["is_active"];
                                $this->permissions=json_decode($res["permissions"]);
                                $out->status="OK";
                                $out->data=$this;
                            }
                            
                        }                    
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
            return $out;
        }
    }
