$(document).ready(function () {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon",
        type: "GET",
        cache: true,
        success: function (response) {
            var button;
            $.each(response.results, function (key, value) {
                button = $('<input/>').attr({
                    type: "button",
                    id: value.url,
                    value: "Ver detalles",
                    onclick: verDetalle()
                }); 
                $('#exampleid')
                .append("<tr>\<td>"+ value.name + "</td>")
                .append("<td>")
                .append(button)
                .append("</td>")
                .append("</tr>");
                                           
            })
            button.attr('onclick', function(i, v){
                console.log(v)
             });
        }

    });
})

function verDetalle(url) {
    $.ajax({
        url: url,
        type: "GET",
        cache: true,
        success: function (response) {
            $("#nombre").val(response.name);
            $("#peso").val(response.weight);
            $("#altura").val(response.height);
        }
    });
};