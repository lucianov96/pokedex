function getPokemon(id){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.poke = JSON.parse(xhr.response);
            app.types = getTypeStats(app.poke.types);
            app.moves = app.poke.moves;
            app.loading = false;
            console.log(app.poke.moves);
        }
    }

    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/"+id);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}