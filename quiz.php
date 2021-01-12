<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
        <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
        <script>
            $(document).ready(function () {
                var nric = $('nric').val();
                var message = ""
                $.ajax({
                    type: "GET",
                    url: "getPerson.php",
                    cache: false,
                    data: 'nric=' + nric,
                    dataType: "JSON",
                    success: function (response) {
                        message += $('#name').html(response.name) + " is " 
                                + $('#age').html(response.age) + " years old";
                        $('#nric').html(response.nric);
                    },
                    error: function(obj, textStatus, errorThrown) {
                        console.log("Error "+textStatus+": "+errorThrown);
                    }
                });
            });
        </script>
    </head>
    <body>
        Find Person:<br/>
        <input type="text" name="nric"/><button>Find</button>
        <br/><br/>
        <div id="details"></div>
    </span>
</body>
</html>