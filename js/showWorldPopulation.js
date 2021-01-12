$(document).ready(function () {
    
    var data = [];
    var labels = [];
    
    $.ajax({
        type: "GET",
        url: "http://localhost/C273/P09/getStatistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            for (i = 0; i < response.length; i++) {
                    data[i] = response[i]['population']
                    labels[i] = response[i]['country']
                }
            alert(data)
            alert(labels)
            var barChart = new Chart($("#barChart"), {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                            data: data,
                            backgroundColor: "lightblue",
                            label: 'Population'
                        }],
                    labels: labels
                },
                options: {
                    responsive: true
                }
            });
        },
        error: function (obj, textStatus, errorThrown) {
            console.log("Error " + textStatus + ": " + errorThrown);
        }
    });

});