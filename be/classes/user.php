<?php
    class User {    
        private $id;
        private $username;
        private $password;
        private $nome;
        private $cognome;
        private $role_id;
        private $is_active;
        
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
                        $password=hash("sha256",$this->password);
                    
                        $query="SELECT * FROM `users` WHERE `username`=:username AND `password`=:password";
                        
                        $stmt = $conn->prepare($query);
                        $stmt->bindParam(':username',$this->username,PDO::PARAM_STR);
                        $stmt->bindParam(':password',$password,PDO::PARAM_STR);
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
                            }
                            
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
