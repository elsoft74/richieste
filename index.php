<html>

    <head>
        <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3">
        <script src="bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"></script>
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/utils.js"></script>
        <script src="js/requests.js"></script>
        <script src="js/page.js"></script>
        <script>
            $(document).ready(function() {
                let lu=getCookie("loggeduser");
                let user = null;
                if(lu!=""){
                    user = JSON.parse(lu);
                }
                showMenu(user);
                showMain(user);
            });
        </script>
    </head>

    <body>
        <div  id="menu">
        </div>
        <div  id="main">
        </div>
    </body>

</html>