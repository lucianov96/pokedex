function getPokemon(id){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.poke = JSON.parse(xhr.response);
            app.types = getTypeStats(app.poke.types);
            app.loading = false;
        }
    }

    xhr.open("GET", "http://localhost:80/pokemon/"+id);

    console.log(id);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}

function getPokemonZones(id){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.zones = JSON.parse(xhr.response).pokemon_catch_ways;
            app.loading = false;
        }
    }

    xhr.open("GET", "http://localhost:80/pokemon/"+id+"/catch");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}

function getPokemonMovements(id){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.moves = JSON.parse(xhr.response).pokemon_movements;
            app.loading = false;
        }
    }

    xhr.open("GET", "http://localhost:80/pokemon/"+id+"/movements");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}