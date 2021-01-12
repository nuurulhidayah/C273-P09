$(document).ready(function () {
    $("#idCountry").change(function () {
        var population = $_GET['population'];
        var obese = $_GET['obese'];
        $.ajax({
            type: "GET",
            url: "http://localhost/C273/p09/showCountryObese.php",
            cache: false,
            data: "population=" + population + "&obese=" + obese,
            dataType: "JSON",
            success: function (response) {
                var message = "<thead><tr><th>Population</th><th>Obese</th></tr></thead>";
                message += "<tbody>";
                for(i = 0; i < response.length; i++){
                    message += "<tr><td>" + response[i].population + "</td>"
                    + "<td>" + response[i].obese + "</td></tr>";
                }
                message += "</tbody>";
                $("#obeseTable").html(message);
            },
            error: function (obj, textStatus, errorThrown) {
                console.log("Error " + textStatus + ": " + errorThrown);
            }
        });
    });
});
