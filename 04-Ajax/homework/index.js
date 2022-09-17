// Mostrar amigos.
$("#boton").click( () => {
    
    $.get("http://localhost:5000/amigos", function (data) {
    
    $("#lista").empty();

    for (let c = 0; c < data.length; c++) {
        let li = document.createElement('li');
    
        li.innerHTML = data[c].name;
        $('#lista').append(li);
    }

    $("#img-carga").hide();
    });
});


// Buscar amigo.
$("#search").click( () => {
    
    let idFriend = $("#input").val();

    $.get("http://localhost:5000/amigos", function (data) {
    
    for (let c = 0; c < data.length; c++) {
        if (idFriend == data[c].id) {
            $("#amigo").text(data[c].name);
        }
    }
    });
});

// Eliminar amigo.


$("#delete").click( () => {

    let idAmigo = $('#inputDelete').val();
    let spanDelete = document.querySelector('#success');
    
    fetch(`http://localhost:5000/amigos/${idAmigo}`,{
    method: 'DELETE'
    })
    .then (resolved => resolved.json())
    .then (()=> {
        spanDelete.innerHTML = 'Amigo borrado';
    })
})

