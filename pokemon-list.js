$(document).ready(function () {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        type: "GET",
        cache: true,
        success: function (response) {
            var count=0;
            var list =[];
            $.each(response.results, function (key, value) {

                var button = $('<input/>').attr({
                    type: "button",
                    id: "id-"+count,
                    value: "Ver detalles",
                    contador: count
                });
                list.push(value);
                $('#exampleid')
                .append("<tr><td>"+ value.name + "</td>")
                .append("<td>")
                .append(button)
                .append("</td>")
                .append("</tr>");
                                           
                $( "#id-"+count ).click(function() {
                    verDetalle(value.url);
                });
                
                count+=1;
            });

        }

    });
})


function verDetalle(url) {
    console.log(url)
    $.ajax({
        url: url,
        type: "GET",
        cache: true,
        success: function (response) {
            $("#nombre").text(response.name);
            $("#peso").text(response.weight);
            $("#altura").text(response.height);
            $('#imagen').attr('src', response.sprites.front_default);
        }
    });
};