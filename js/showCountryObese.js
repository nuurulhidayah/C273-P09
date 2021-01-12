$(document).ready(function () {
    $("#idCountry").change(function () {
        console.log($("#idCountry").val());
        $.get("getCountryDetails.php", {
            id: $("#idCountry").val()
        }, function (data) {
            console.log(data);
            var msg = "<thead><tr><th>Population</th><th>Obese</th></tr></thead><tbody>";
            data.forEach(i => {
                msg += "<tr>";
                msg += "<td>" + i.population + "</td>";
                msg += "<td>" + i.obese + "</td>";
                msg += "</tr>";
            });
            msg += "</tbody>";
            $("#obeseTable").html(msg);
        }, "json");
    });
});
