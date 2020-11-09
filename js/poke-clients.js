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

function listPokemons(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.listadoCompletoPokemons = JSON.parse(xhr.response).pokemon_list;
            app.loading = false;
        }
    }

    xhr.open("GET", "http://localhost:80/pokemon/list");

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}

function getFilteredPokemonList(){
    let xhr = new XMLHttpRequest();

    app.loading = true;

    var type1 = document.getElementById("type_1").value;
    var type2 = document.getElementById("type_2").value;
    var ability1 = document.getElementById("ability_1").value;
    var ability2 = document.getElementById("ability_2").value;
    var ps = document.getElementById("ps").value;
    var psValue = document.getElementById("ps_value").value;
    var attack = document.getElementById("attack").value;
    var attackValue = document.getElementById("attack_value").value;
    var defense = document.getElementById("defense").value;
    var defenseValue = document.getElementById("defense_value").value;
    var spAttack = document.getElementById("sp_attack").value;
    var spAttackValue = document.getElementById("sp_attack_value").value;
    var spDefense = document.getElementById("sp_defense").value;
    var spDefenseValue = document.getElementById("sp_defense_value").value;
    var speed = document.getElementById("speed").value;
    var speedValue = document.getElementById("speed_value").value;

    var queryParams = "";

    if(type1!=""){
        queryParams += "&type_1="+type1.toLowerCase();
    }
    if(type2!=""){
        queryParams += "&type_2="+type2;
    }
    if(ability1!=""){
        queryParams += "&ability_1="+ability1;
    }
    if(ability2!=""){
        queryParams += "&ability_2="+ability2;
    }
    if(ps!=""){
        queryParams += "&ps="+ps+"&ps_value="+psValue;
    }
    if(attack!=""){
        queryParams += "&attack="+attack+"&attack_value="+attackValue;
    }
    if(defense!=""){
        queryParams += "&defense="+defense+"&defense_value="+defenseValue;
    }
    if(spAttack!=""){
        queryParams += "&sp_attack="+spAttack+"&sp_attack_value="+spAttackValue;
    }
    if(spDefense!=""){
        queryParams += "&sp_defense="+spDefense+"&sp_defense_value="+spDefenseValue;
    }
    if(speed!=""){
        if(speedValue == ""){
            speedValue = "0";
        }
        queryParams += "&speed="+speed+"&speed_value="+speedValue;
    }

    queryParams = queryParams.replace("&", "");
    queryParams = queryParams.replaceAll("<", "LESS_THAN");
    queryParams = queryParams.replaceAll(">", "GREATER_THAN");
    queryParams = queryParams.replaceAll("==", "=EQUAL");
    queryParams = queryParams.replaceAll("=&", "=0&");

    console.log(queryParams);
    

    xhr.onreadystatechange = function() {
        // 	Check if request is completed
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //	Do what needs to be done here
            app.listadoCompletoPokemons = JSON.parse(xhr.response).pokemon_list;
            app.loading = false;
        }
    }

    if(queryParams==""){
        xhr.open("GET", "http://localhost:80/pokemon/list");
    } else {
        xhr.open("GET", "http://localhost:80/pokemon/list/filter?"+queryParams);
    }

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send();
}