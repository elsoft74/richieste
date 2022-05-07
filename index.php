<html>

<head>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3">
    <script src="bootstrap/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"></script>
    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="datepicker/css/bootstrap-datepicker3.standalone.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="datepicker/locales/bootstrap-datepicker.it.min.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/requests.js"></script>
    <script src="js/page.js"></script>
    <script src="js/fasi.js"></script>
    <script src="js/login.js"></script>
    <script src="js/insert.js"></script>
    <script>
        $(document).ready(function() {
            buildLogin();
            lu = localStorage.getItem("loggeduser");
            if (lu != null) {
                lu = JSON.parse(lu);
                loadData();
            } else {
                showLogin();
            }

        });
        $(window).on('dataLoaded', function() {
            buildInsertForm();
            buildEditRow();
            showMenu(lu);
            showRequests(richieste, lu);
        })
    </script>
</head>

<body>
    <div id="menu">
    </div>
    <div id="main">
    </div>
    <div id="insert">
    </div>
    <div id="login">
    </div>
    <div id="editRow">
    </div>
</body>

</html>