function TemporalType(name, total){
	this.name = name;
	this.total = total;
}

function TypeResult(hard_weakness, weakness, resistance, hard_resistance, inmune){
    this.hard_weakness = hard_weakness;
    this.weakness = weakness;
    this.resistance = resistance;
    this.hard_resistance = hard_resistance;
    this.inmune = inmune;
}



function getTypeStats(types){
    var water = new TemporalType("water", 0);
    var bug = new TemporalType("bug", 0);
    var dragon = new TemporalType("dragon", 0);
    var electric = new TemporalType("electric", 0);
    var ghost = new TemporalType("ghost", 0);
    var fire = new TemporalType("fire", 0);
    var fairy = new TemporalType("fairy", 0);
    var ice = new TemporalType("ice", 0);
    var fighting = new TemporalType("fighting", 0);
    var normal = new TemporalType("normal", 0);
    var grass = new TemporalType("grass", 0);
    var psychic = new TemporalType("psychic", 0);
    var rock = new TemporalType("rock", 0);
    var dark = new TemporalType("dark", 0);
    var ground = new TemporalType("ground", 0);
    var poison = new TemporalType("poison", 0);
    var flying = new TemporalType("flying", 0);
    var steel = new TemporalType("steel", 0);
    var tableTypes = [];
    var hard_weakness = [];
    var weakness = [];
    var resistance = [];
    var hard_resistance = [];
    var inmune = [];

    for(i = 0; i<types.length; i++){
        switch (types[i].type.name) {
            case "water":
                electric.total++;
                grass.total++;
                steel.total--;
                water.total--;
                fire.total--;
                ice.total--
                break;                
            case "bug":
                fire.total++;
                rock.total++;
                flying.total++;
                fighting.total--;
                grass.total--;
                ground.total--;
                break;
            case "dragon":
                dragon.total++;
                ice.total++;
                fairy.total++;
                water.total--;
                electric.total--;
                fire.total--;
                grass.total--;
                break;
            case "electric":
                ground.total++;
                steel.total--;
                electric.total--;
                flying.total--;
                break;
            case "ghost":
                ghost.total++;
                dark.total++;
                bug.total--;
                poison.total--;
                fighting.total = 99;
                normal.total = 99;
                break;
            case "fire":
                water.total++;
                rock.total++;
                ground.total++;
                steel.total--;
                bug.total--;
                fire.total--;
                fairy.total--;
                ice.total--;
                grass.total--;
                break;
            case "fairy":
                steel.total++;
                poison.total++;
                bug.total--;
                fighting.total--;
                dark.total--;
                dragon.total = 99;
                break;
            case "ice":
                steel.total++;
                fire.total++;
                fighting.total++;
                rock.total++;
                ice.total--;
                break;
            case "fighting":
                fairy.total++;
                psychic.total++;
                flying.total++;
                bug.total--;
                rock.total--;
                dark.total--;
                break;
            case "normal":
                fighting.total++;
                ghost.total = 99;
                break;
            case "grass":
                bug.total++;
                fire.total++;
                ice.total++;
                poison.total++;
                flying.total++;
                water.total--;
                electric.total--;
                grass.total--;
                ground.total--;
                break;
            case "psychic":
                bug.total++;
                ghost.total++;
                dark.total++;
                fighting.total--;
                psychic.total--;
                break;
            case "rock":
                steel.total++;
                water.total++;
                fighting.total++;
                grass.total++;
                ground.total++;
                fire.total--;
                normal.total--;
                poison.total--;
                flying.total--;
                break;
            case "dark":
                bug.total++;
                fairy.total++;
                fighting.total++;
                ghost.total--;
                psychic.total = 99;
                break;
            case "ground":
                water.total++;
                ice.total++;
                grass.total++;
                rock.total--;
                poison.total--;
                electric.total = 99;
                break;
            case "poison":
                psychic.total++;
                ground.total++;
                bug.total--;
                fairy.total--;
                fighting.total--;
                grass.total--;
                poison.total--;
                break;
            case "flying":
                electric.total++;
                ice.total++;
                rock.total++;
                bug.total--;
                fighting.total--;
                grass.total--;
                ground.total = 99;
                break;
            case "steel":
                fighting.total++;
                fire.total++;
                ground.total++;
                steel.total--;
                bug.total--;
                dragon.total--;
                fairy.total--;
                ice.total--;
                normal.total--;
                grass.total--;
                psychic.total--;
                rock.total--;
                flying.total--;
                poison.total = 99;
                break;
        }        
    }

    tableTypes.push(water);
    tableTypes.push(bug);
    tableTypes.push(dragon);
    tableTypes.push(electric);
    tableTypes.push(ghost);
    tableTypes.push(fire);
    tableTypes.push(fairy);
    tableTypes.push(ice);
    tableTypes.push(fighting);
    tableTypes.push(normal);
    tableTypes.push(grass);
    tableTypes.push(psychic);
    tableTypes.push(rock);
    tableTypes.push(dark);
    tableTypes.push(ground);
    tableTypes.push(poison);
    tableTypes.push(flying);
    tableTypes.push(steel);

    for(i = 0; i<tableTypes.length; i++){
        if(tableTypes[i].total == -2){
            hard_resistance.push(tableTypes[i].name);
        } else if(tableTypes[i].total == -1){
            resistance.push(tableTypes[i].name);
        } else if(tableTypes[i].total == 1){
            weakness.push(tableTypes[i].name);
        } else if(tableTypes[i].total == 2){
            hard_weakness.push(tableTypes[i].name);
        } else if(tableTypes[i].total > 2){
            inmune.push(tableTypes[i].name);
        }
    }

    var result = new TypeResult(
        hard_weakness,
        weakness,
        resistance,
        hard_resistance,
        inmune
    )

    return result;
}