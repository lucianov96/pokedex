const pokemons = [
    {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "imagenes/001.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 49,
            },
            {
                "stat_name": "Defense",
                "stat_value": 49,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "next_evolution": [
            {
                "num": "002",
                "name": "Ivysaur"
            },
            {
                "num": "003",
                "name": "Venusaur"
            }
        ]
    },
    {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "imagenes/002.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 62,
            },
            {
                "stat_name": "Defense",
                "stat_value": 63,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
        "prev_evolution": [
            {
                "num": "001",
                "name": "Bulbasaur"
            }
        ],
        "next_evolution": [
            {
                "num": "003",
                "name": "Venusaur"
            }
        ]
    },
    {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "imagenes/003.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 82,
            },
            {
                "stat_name": "Defense",
                "stat_value": 83,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "prev_evolution": [
            {
                "num": "001",
                "name": "Bulbasaur"
            },
            {
                "num": "002",
                "name": "Ivysaur"
            }
        ]
    },
    {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "imagenes/004.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 39,
            },
            {
                "stat_name": "Attack",
                "stat_value": 52,
            },
            {
                "stat_name": "Defense",
                "stat_value": 43,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "next_evolution": [
            {
                "num": "005",
                "name": "Charmeleon"
            },
            {
                "num": "006",
                "name": "Charizard"
            }
        ]
    },
    {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "imagenes/005.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 58,
            },
            {
                "stat_name": "Attack",
                "stat_value": 64,
            },
            {
                "stat_name": "Defense",
                "stat_value": 58,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "prev_evolution": [
            {
                "num": "004",
                "name": "Charmander"
            }
        ],
        "next_evolution": [
            {
                "num": "006",
                "name": "Charizard"
            }
        ]
    },
    {
        "id": 6,
        "num": "006",
        "name": "Charizard",
        "img": "imagenes/006.png",
        "type": [
            "Fire",
            "Flying"
        ],
        "hard_weakness": [
            "Rock",
        ],
        "weakness": [
            "Water",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Bug",
            "Grass",
        ],
        "inmune": [
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 78,
            },
            {
                "stat_name": "Attack",
                "stat_value": 84,
            },
            {
                "stat_name": "Defense",
                "stat_value": 78,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 109,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "004",
                "name": "Charmander"
            },
            {
                "num": "005",
                "name": "Charmeleon"
            }
        ]
    },
    {
        "id": 7,
        "num": "007",
        "name": "Squirtle",
        "img": "imagenes/007.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 44,
            },
            {
                "stat_name": "Attack",
                "stat_value": 48,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 64,
            },
            {
                "stat_name": "Speed",
                "stat_value": 43,
            },
        ],
        "next_evolution": [
            {
                "num": "008",
                "name": "Wartortle"
            },
            {
                "num": "009",
                "name": "Blastoise"
            }
        ]
    },
    {
        "id": 8,
        "num": "008",
        "name": "Wartortle",
        "img": "imagenes/008.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 59,
            },
            {
                "stat_name": "Attack",
                "stat_value": 63,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 58,
            },
        ],
        "prev_evolution": [
            {
                "num": "007",
                "name": "Squirtle"
            }
        ],
        "next_evolution": [
            {
                "num": "009",
                "name": "Blastoise"
            }
        ]
    },
    {
        "id": 9,
        "num": "009",
        "name": "Blastoise",
        "img": "imagenes/009.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 79,
            },
            {
                "stat_name": "Attack",
                "stat_value": 83,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 105,
            },
            {
                "stat_name": "Speed",
                "stat_value": 78,
            },
        ],
        "prev_evolution": [
            {
                "num": "007",
                "name": "Squirtle"
            },
            {
                "num": "008",
                "name": "Wartortle"
            }
        ]
    },
    {
        "id": 10,
        "num": "010",
        "name": "Caterpie",
        "img": "imagenes/010.png",
        "type": [
            "Bug"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Fighting",
            "Grass",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 20,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 20,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "next_evolution": [
            {
                "num": "011",
                "name": "Metapod"
            },
            {
                "num": "012",
                "name": "Butterfree"
            }
        ]
    },
    {
        "id": 11,
        "num": "011",
        "name": "Metapod",
        "img": "imagenes/011.png",
        "type": [
            "Bug"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Fighting",
            "Grass",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 20,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 25,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
        "prev_evolution": [
            {
                "num": "010",
                "name": "Caterpie"
            }
        ],
        "next_evolution": [
            {
                "num": "012",
                "name": "Butterfree"
            }
        ]
    },
    {
        "id": 12,
        "num": "012",
        "name": "Butterfree",
        "img": "imagenes/012.png",
        "type": [
            "Bug",
            "Flying"
        ],
        "hard_weakness": [
            "Rock"
        ],
        "weakness": [
            "Fire",
            "Electric",
            "Ice",
            "Flying"
        ],
        "resistance": [
            "Bug"
        ],
        "hard_resistance": [
            "Fighting",
            "Grass"
        ],
        "inmune": [
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "010",
                "name": "Caterpie"
            },
            {
                "num": "011",
                "name": "Metapod"
            }
        ]
    },
    {
        "id": 13,
        "num": "013",
        "name": "Weedle",
        "img": "imagenes/013.png",
        "type": [
            "Bug",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Psychic",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Fighting",
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 20,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 20,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "next_evolution": [
            {
                "num": "014",
                "name": "Kakuna"
            },
            {
                "num": "015",
                "name": "Beedrill"
            }
        ]
    },
    {
        "id": 14,
        "num": "014",
        "name": "Kakuna",
        "img": "imagenes/014.png",
        "type": [
            "Bug",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Psychic",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Fighting",
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 25,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 25,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "prev_evolution": [
            {
                "num": "013",
                "name": "Weedle"
            }
        ],
        "next_evolution": [
            {
                "num": "015",
                "name": "Beedrill"
            }
        ]
    },
    {
        "id": 15,
        "num": "015",
        "name": "Beedrill",
        "img": "imagenes/015.png",
        "type": [
            "Bug",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Psychic",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Fighting",
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 75,
            },
        ],
        "prev_evolution": [
            {
                "num": "013",
                "name": "Weedle"
            },
            {
                "num": "014",
                "name": "Kakuna"
            }
        ]
    },
    {
        "id": 16,
        "num": "016",
        "name": "Pidgey",
        "img": "imagenes/016.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Speed",
                "stat_value": 56,
            },
        ],
        "next_evolution": [
            {
                "num": "017",
                "name": "Pidgeotto"
            },
            {
                "num": "018",
                "name": "Pidgeot"
            }
        ]
    },
    {
        "id": 17,
        "num": "017",
        "name": "Pidgeotto",
        "img": "imagenes/017.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 63,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 71,
            },
        ],
        "prev_evolution": [
            {
                "num": "016",
                "name": "Pidgey"
            }
        ],
        "next_evolution": [
            {
                "num": "018",
                "name": "Pidgeot"
            }
        ]
    },
    {
        "id": 18,
        "num": "018",
        "name": "Pidgeot",
        "img": "imagenes/018.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 83,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 91,
            },
        ],
        "prev_evolution": [
            {
                "num": "016",
                "name": "Pidgey"
            },
            {
                "num": "017",
                "name": "Pidgeotto"
            }
        ]
    },
    {
        "id": 19,
        "num": "019",
        "name": "Rattata",
        "img": "imagenes/019.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting"
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": [
            "Ghost"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 56,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 25,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Speed",
                "stat_value": 72,
            },
        ],
        "next_evolution": [
            {
                "num": "020",
                "name": "Raticate"
            }
        ]
    },
    {
        "id": 20,
        "num": "020",
        "name": "Raticate",
        "img": "imagenes/020.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting"
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": [
            "Ghost"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 81,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 97,
            },
        ],
        "prev_evolution": [
            {
                "num": "019",
                "name": "Rattata"
            }
        ]
    },
    {
        "id": 21,
        "num": "021",
        "name": "Spearow",
        "img": "imagenes/021.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 31,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 31,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "next_evolution": [
            {
                "num": "022",
                "name": "Fearow"
            }
        ]
    },
    {
        "id": 22,
        "num": "022",
        "name": "Fearow",
        "img": "imagenes/022.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 61,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 61,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "021",
                "name": "Spearow"
            }
        ]
    },
    {
        "id": 23,
        "num": "023",
        "name": "Ekans",
        "img": "imagenes/023.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 44,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 54,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "next_evolution": [
            {
                "num": "024",
                "name": "Arbok"
            }
        ]
    },
    {
        "id": 24,
        "num": "024",
        "name": "Arbok",
        "img": "imagenes/024.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 69,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 79,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "prev_evolution": [
            {
                "num": "023",
                "name": "Ekans"
            }
        ]
    },
    {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "img": "imagenes/025.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "next_evolution": [
            {
                "num": "026",
                "name": "Raichu"
            }
        ]
    },
    {
        "id": 26,
        "num": "026",
        "name": "Raichu",
        "img": "imagenes/026.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "025",
                "name": "Pikachu"
            }
        ]
    },
    {
        "id": 27,
        "num": "027",
        "name": "Sandshrew",
        "img": "imagenes/027.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass"
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 20,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "next_evolution": [
            {
                "num": "028",
                "name": "Sandslash"
            }
        ]
    },
    {
        "id": 28,
        "num": "028",
        "name": "Sandslash",
        "img": "imagenes/028.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass"
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 75,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "prev_evolution": [
            {
                "num": "027",
                "name": "Sandshrew"
            }
        ]
    },
    {
        "id": 29,
        "num": "029",
        "name": "Nidoran ♀",
        "img": "imagenes/029.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 47,
            },
            {
                "stat_name": "Defense",
                "stat_value": 52,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 41,
            },
        ],
        "next_evolution": [
            {
                "num": "030",
                "name": "Nidorina"
            },
            {
                "num": "031",
                "name": "Nidoqueen"
            }
        ]
    },
    {
        "id": 30,
        "num": "030",
        "name": "Nidorina",
        "img": "imagenes/030.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 62,
            },
            {
                "stat_name": "Defense",
                "stat_value": 67,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 56,
            },
        ],
        "prev_evolution": [
            {
                "num": "029",
                "name": "Nidoran(Female)"
            }
        ],
        "next_evolution": [
            {
                "num": "031",
                "name": "Nidoqueen"
            }
        ]
    },
    {
        "id": 31,
        "num": "031",
        "name": "Nidoqueen",
        "img": "imagenes/031.png",
        "type": [
            "Poison",
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Rock",
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 92,
            },
            {
                "stat_name": "Defense",
                "stat_value": 87,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 76,
            },
        ],
        "prev_evolution": [
            {
                "num": "029",
                "name": "Nidoran(Female)"
            },
            {
                "num": "030",
                "name": "Nidorina"
            }
        ]
    },
    {
        "id": 32,
        "num": "032",
        "name": "Nidoran ♂",
        "img": "imagenes/032.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 46,
            },
            {
                "stat_name": "Attack",
                "stat_value": 57,
            },
            {
                "stat_name": "Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "next_evolution": [
            {
                "num": "033",
                "name": "Nidorino"
            },
            {
                "num": "034",
                "name": "Nidoking"
            }
        ]
    },
    {
        "id": 33,
        "num": "033",
        "name": "Nidorino",
        "img": "imagenes/033.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 61,
            },
            {
                "stat_name": "Attack",
                "stat_value": 72,
            },
            {
                "stat_name": "Defense",
                "stat_value": 57,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "prev_evolution": [
            {
                "num": "032",
                "name": "Nidoran(Male)"
            }
        ],
        "next_evolution": [
            {
                "num": "034",
                "name": "Nidoking"
            }
        ]
    },
    {
        "id": 34,
        "num": "034",
        "name": "Nidoking",
        "img": "imagenes/034.png",
        "type": [
            "Poison",
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Rock",
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 81,
            },
            {
                "stat_name": "Attack",
                "stat_value": 92,
            },
            {
                "stat_name": "Defense",
                "stat_value": 77,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
        "prev_evolution": [
            {
                "num": "032",
                "name": "Nidoran(Male)"
            },
            {
                "num": "033",
                "name": "Nidorino"
            }
        ]
    },
    {
        "id": 35,
        "num": "035",
        "name": "Clefairy",
        "img": "imagenes/035.png",
        "type": [
            "Fairy"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Poison"
        ],
        "resistance": [
            "Bug",
            "Fighting",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [
            "Dragon"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 48,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "next_evolution": [
            {
                "num": "036",
                "name": "Clefable"
            }
        ]
    },
    {
        "id": 36,
        "num": "036",
        "name": "Clefable",
        "img": "imagenes/036.png",
        "type": [
            "Fairy"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Poison"
        ],
        "resistance": [
            "Bug",
            "Fighting",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [
            "Dragon"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 95,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 73,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
        "prev_evolution": [
            {
                "num": "035",
                "name": "Clefairy"
            }
        ]
    },
    {
        "id": 37,
        "num": "037",
        "name": "Vulpix",
        "img": "imagenes/037.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 38,
            },
            {
                "stat_name": "Attack",
                "stat_value": 41,
            },
            {
                "stat_name": "Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "next_evolution": [
            {
                "num": "038",
                "name": "Ninetales"
            }
        ]
    },
    {
        "id": 38,
        "num": "038",
        "name": "Ninetales",
        "img": "imagenes/038.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 73,
            },
            {
                "stat_name": "Attack",
                "stat_value": 76,
            },
            {
                "stat_name": "Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 81,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "037",
                "name": "Vulpix"
            }
        ]
    },
    {
        "id": 39,
        "num": "039",
        "name": "Jigglypuff",
        "img": "imagenes/039.png",
        "type": [
            "Normal",
            "Fairy"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Poison"
        ],
        "resistance": [
            "Bug",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [
            "Dragon",
            "Ghost"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 115,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 20,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 20,
            },
        ],
        "next_evolution": [
            {
                "num": "040",
                "name": "Wigglytuff"
            }
        ]
    },
    {
        "id": 40,
        "num": "040",
        "name": "Wigglytuff",
        "img": "imagenes/040.png",
        "type": [
            "Normal",
            "Fairy"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Poison"
        ],
        "resistance": [
            "Bug",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [
            "Dragon",
            "Ghost"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 140,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "prev_evolution": [
            {
                "num": "039",
                "name": "Jigglypuff"
            }
        ]
    },
    {
        "id": 41,
        "num": "041",
        "name": "Zubat",
        "img": "imagenes/041.png",
        "type": [
            "Poison",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Psychic",
            "Rock"
        ],
        "resistance": [
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Bug",
            "Fighting",
            "Grass"
        ],
        "inmune": [
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "next_evolution": [
            {
                "num": "042",
                "name": "Golbat"
            }
        ]
    },
    {
        "id": 42,
        "num": "042",
        "name": "Golbat",
        "img": "imagenes/042.png",
        "type": [
            "Poison",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Psychic",
            "Rock"
        ],
        "resistance": [
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Bug",
            "Fighting",
            "Grass"
        ],
        "inmune": [
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 75,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "prev_evolution": [
            {
                "num": "041",
                "name": "Zubat"
            }
        ]
    },
    {
        "id": 43,
        "num": "043",
        "name": "Oddish",
        "img": "imagenes/043.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
        "next_evolution": [
            {
                "num": "044",
                "name": "Gloom"
            },
            {
                "num": "045",
                "name": "Vileplume"
            }
        ]
    },
    {
        "id": 44,
        "num": "044",
        "name": "Gloom",
        "img": "imagenes/044.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "prev_evolution": [
            {
                "num": "043",
                "name": "Oddish"
            }
        ],
        "next_evolution": [
            {
                "num": "045",
                "name": "Vileplume"
            }
        ]
    },
    {
        "id": 45,
        "num": "045",
        "name": "Vileplume",
        "img": "imagenes/045.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 75,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "prev_evolution": [
            {
                "num": "043",
                "name": "Oddish"
            },
            {
                "num": "044",
                "name": "Gloom"
            }
        ]
    },
    {
        "id": 46,
        "num": "046",
        "name": "Paras",
        "img": "imagenes/046.png",
        "type": [
            "Bug",
            "Grass"
        ],
        "hard_weakness": [
            "Fire",
            "Flying"
        ],
        "weakness": [
            "Bug",
            "Ice",
            "Rock",
            "Poison"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass",
            "Ground"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 25,
            },
        ],
        "next_evolution": [
            {
                "num": "047",
                "name": "Parasect"
            }
        ]
    },
    {
        "id": 47,
        "num": "047",
        "name": "Parasect",
        "img": "imagenes/047.png",
        "type": [
            "Bug",
            "Grass"
        ],
        "hard_weakness": [
            "Fire",
            "Flying"
        ],
        "weakness": [
            "Bug",
            "Ice",
            "Rock",
            "Poison"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass",
            "Ground"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
        "prev_evolution": [
            {
                "num": "046",
                "name": "Paras"
            }
        ]
    },
    {
        "id": 48,
        "num": "048",
        "name": "Venonat",
        "img": "imagenes/048.png",
        "type": [
            "Bug",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Psychic",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Grass",
            "Fighting"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "next_evolution": [
            {
                "num": "049",
                "name": "Venomoth"
            }
        ]
    },
    {
        "id": 49,
        "num": "049",
        "name": "Venomoth",
        "img": "imagenes/049.png",
        "type": [
            "Bug",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Psychic",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Poison"
        ],
        "hard_resistance": [
            "Grass",
            "Fighting"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "prev_evolution": [
            {
                "num": "048",
                "name": "Venonat"
            }
        ]
    },
    {
        "id": 50,
        "num": "050",
        "name": "Diglett",
        "img": "imagenes/050.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass",
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": ["Electric"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 10,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 95,
            },
        ],
        "next_evolution": [
            {
                "num": "051",
                "name": "Dugtrio"
            }
        ]
    },
    {
        "id": 51,
        "num": "051",
        "name": "Dugtrio",
        "img": "imagenes/051.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass",
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": ["Electric"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 120,
            },
        ],
        "prev_evolution": [
            {
                "num": "050",
                "name": "Diglett"
            }
        ]
    },
    {
        "id": 52,
        "num": "052",
        "name": "Meowth",
        "img": "imagenes/052.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "next_evolution": [
            {
                "num": "053",
                "name": "Persian"
            }
        ]
    },
    {
        "id": 53,
        "num": "053",
        "name": "Persian",
        "img": "imagenes/053.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 115,
            },
        ],
        "prev_evolution": [
            {
                "num": "052",
                "name": "Meowth"
            }
        ]
    },
    {
        "id": 54,
        "num": "054",
        "name": "Psyduck",
        "img": "imagenes/054.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 52,
            },
            {
                "stat_name": "Defense",
                "stat_value": 48,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "next_evolution": [
            {
                "num": "055",
                "name": "Golduck"
            }
        ]
    },
    {
        "id": 55,
        "num": "055",
        "name": "Golduck",
        "img": "imagenes/055.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 82,
            },
            {
                "stat_name": "Defense",
                "stat_value": 78,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
        "prev_evolution": [
            {
                "num": "054",
                "name": "Psyduck"
            }
        ]
    },
    {
        "id": 56,
        "num": "056",
        "name": "Mankey",
        "img": "imagenes/056.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 75,
            },
        ],
        "next_evolution": [
            {
                "num": "057",
                "name": "Primeape"
            }
        ]
    },
    {
        "id": 57,
        "num": "057",
        "name": "Primeape",
        "img": "imagenes/057.png",
        "type": [
            "Fighting"
        ],
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 95,
            },
        ],
        "prev_evolution": [
            {
                "num": "056",
                "name": "Mankey"
            }
        ]
    },
    {
        "id": 58,
        "num": "058",
        "name": "Growlithe",
        "img": "imagenes/058.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
        "next_evolution": [
            {
                "num": "059",
                "name": "Arcanine"
            }
        ]
    },
    {
        "id": 59,
        "num": "059",
        "name": "Arcanine",
        "img": "imagenes/059.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 95,
            },
        ],
        "prev_evolution": [
            {
                "num": "058",
                "name": "Growlithe"
            }
        ]
    },
    {
        "id": 60,
        "num": "060",
        "name": "Poliwag",
        "img": "imagenes/060.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "next_evolution": [
            {
                "num": "061",
                "name": "Poliwhirl"
            },
            {
                "num": "062",
                "name": "Poliwrath"
            }
        ]
    },
    {
        "id": 61,
        "num": "061",
        "name": "Poliwhirl",
        "img": "imagenes/061.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "prev_evolution": [
            {
                "num": "060",
                "name": "Poliwag"
            }
        ],
        "next_evolution": [
            {
                "num": "062",
                "name": "Poliwrath"
            }
        ]
    },
    {
        "id": 62,
        "num": "062",
        "name": "Poliwrath",
        "img": "imagenes/062.png",
        "type": [
            "Water",
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Bug",
            "Fire",
            "Ice",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "prev_evolution": [
            {
                "num": "060",
                "name": "Poliwag"
            },
            {
                "num": "061",
                "name": "Poliwhirl"
            }
        ]
    },
    {
        "id": 63,
        "num": "063",
        "name": "Abra",
        "img": "imagenes/063.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 25,
            },
            {
                "stat_name": "Attack",
                "stat_value": 20,
            },
            {
                "stat_name": "Defense",
                "stat_value": 15,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "next_evolution": [
            {
                "num": "064",
                "name": "Kadabra"
            },
            {
                "num": "065",
                "name": "Alakazam"
            }
        ]
    },
    {
        "id": 64,
        "num": "064",
        "name": "Kadabra",
        "img": "imagenes/064.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 120,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 105,
            },
        ],
        "prev_evolution": [
            {
                "num": "063",
                "name": "Abra"
            }
        ],
        "next_evolution": [
            {
                "num": "065",
                "name": "Alakazam"
            }
        ]
    },
    {
        "id": 65,
        "num": "065",
        "name": "Alakazam",
        "img": "imagenes/065.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 135,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 120,
            },
        ],
        "prev_evolution": [
            {
                "num": "063",
                "name": "Abra"
            },
            {
                "num": "064",
                "name": "Kadabra"
            }
        ]
    },
    {
        "id": 66,
        "num": "066",
        "name": "Machop",
        "img": "imagenes/066.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "next_evolution": [
            {
                "num": "067",
                "name": "Machoke"
            },
            {
                "num": "068",
                "name": "Machamp"
            }
        ]
    },
    {
        "id": 67,
        "num": "067",
        "name": "Machoke",
        "img": "imagenes/067.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "prev_evolution": [
            {
                "num": "066",
                "name": "Machop"
            }
        ],
        "next_evolution": [
            {
                "num": "068",
                "name": "Machamp"
            }
        ]
    },
    {
        "id": 68,
        "num": "068",
        "name": "Machamp",
        "img": "imagenes/068.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 130,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "prev_evolution": [
            {
                "num": "066",
                "name": "Machop"
            },
            {
                "num": "067",
                "name": "Machoke"
            }
        ]
    },
    {
        "id": 69,
        "num": "069",
        "name": "Bellsprout",
        "img": "imagenes/069.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "next_evolution": [
            {
                "num": "070",
                "name": "Weepinbell"
            },
            {
                "num": "071",
                "name": "Victreebel"
            }
        ]
    },
    {
        "id": 70,
        "num": "070",
        "name": "Weepinbell",
        "img": "imagenes/070.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "prev_evolution": [
            {
                "num": "069",
                "name": "Bellsprout"
            }
        ],
        "next_evolution": [
            {
                "num": "071",
                "name": "Victreebel"
            }
        ]
    },
    {
        "id": 71,
        "num": "071",
        "name": "Victreebel",
        "img": "imagenes/071.png",
        "type": [
            "Grass",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "069",
                "name": "Bellsprout"
            },
            {
                "num": "070",
                "name": "Weepinbell"
            }
        ]
    },
    {
        "id": 72,
        "num": "072",
        "name": "Tentacool",
        "img": "imagenes/072.png",
        "type": [
            "Water",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Fighting",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "next_evolution": [
            {
                "num": "073",
                "name": "Tentacruel"
            }
        ]
    },
    {
        "id": 73,
        "num": "073",
        "name": "Tentacruel",
        "img": "imagenes/073.png",
        "type": [
            "Water",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Fighting",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 120,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "072",
                "name": "Tentacool"
            }
        ]
    },
    {
        "id": 74,
        "num": "074",
        "name": "Geodude",
        "img": "imagenes/074.png",
        "type": [
            "Rock",
            "Ground"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Speed",
                "stat_value": 20,
            },
        ],
        "next_evolution": [
            {
                "num": "075",
                "name": "Graveler"
            },
            {
                "num": "076",
                "name": "Golem"
            }
        ]
    },
    {
        "id": 75,
        "num": "075",
        "name": "Graveler",
        "img": "imagenes/075.png",
        "type": [
            "Rock",
            "Ground"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "prev_evolution": [
            {
                "num": "074",
                "name": "Geodude"
            }
        ],
        "next_evolution": [
            {
                "num": "076",
                "name": "Golem"
            }
        ]
    },
    {
        "id": 76,
        "num": "076",
        "name": "Golem",
        "img": "imagenes/076.png",
        "type": [
            "Rock",
            "Ground"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 130,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "prev_evolution": [
            {
                "num": "074",
                "name": "Geodude"
            },
            {
                "num": "075",
                "name": "Graveler"
            }
        ]
    },
    {
        "id": 77,
        "num": "077",
        "name": "Ponyta",
        "img": "imagenes/077.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
        "next_evolution": [
            {
                "num": "078",
                "name": "Rapidash"
            }
        ]
    },
    {
        "id": 78,
        "num": "078",
        "name": "Rapidash",
        "img": "imagenes/078.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 105,
            },
        ],
        "prev_evolution": [
            {
                "num": "077",
                "name": "Ponyta"
            }
        ]
    },
    {
        "id": 79,
        "num": "079",
        "name": "Slowpoke",
        "img": "imagenes/079.png",
        "type": [
            "Water",
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Electric",
            "Ghost",
            "Grass",
            "Dark"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Fire",
            "Ice",
            "Fighting",
            "Psychic"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 15,
            },
        ],
        "next_evolution": [
            {
                "num": "080",
                "name": "Slowbro"
            }
        ]
    },
    {
        "id": 80,
        "num": "080",
        "name": "Slowbro",
        "img": "imagenes/080.png",
        "type": [
            "Water",
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Electric",
            "Ghost",
            "Grass",
            "Dark"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Fire",
            "Ice",
            "Fighting",
            "Psychic"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 95,
            },
            {
                "stat_name": "Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
        "prev_evolution": [
            {
                "num": "079",
                "name": "Slowpoke"
            }
        ]
    },
    {
        "id": 81,
        "num": "081",
        "name": "Magnemite",
        "img": "imagenes/081.png",
        "type": [
            "Electric",
            "Steel"
        ],
        "hard_weakness": [
            "Ground"
        ],
        "weakness": [
            "Fire",
            "Fighting"
        ],
        "resistance": [
            "Bug",
            "Dragon",
            "Electric",
            "Fairy",
            "Ice",
            "Normal",
            "Grass",
            "Psychic",
            "Rock"
        ],
        "hard_resistance": [
            "Steel",
            "Flying"
        ],
        "inmune": [
            "Poison"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 25,
            },
            {
                "stat_name": "Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "next_evolution": [
            {
                "num": "082",
                "name": "Magneton"
            }
        ]
    },
    {
        "id": 82,
        "num": "082",
        "name": "Magneton",
        "img": "imagenes/082.png",
        "type": [
            "Electric",
            "Steel"
        ],
        "hard_weakness": [
            "Ground"
        ],
        "weakness": [
            "Fire",
            "Fighting"
        ],
        "resistance": [
            "Bug",
            "Dragon",
            "Electric",
            "Fairy",
            "Ice",
            "Normal",
            "Grass",
            "Psychic",
            "Rock"
        ],
        "hard_resistance": [
            "Steel",
            "Flying"
        ],
        "inmune": [
            "Poison"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 120,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "081",
                "name": "Magnemite"
            }
        ]
    },
    {
        "id": 83,
        "num": "083",
        "name": "Farfetch'd",
        "img": "imagenes/083.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 52,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 58,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 62,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
    },
    {
        "id": 84,
        "num": "084",
        "name": "Doduo",
        "img": "imagenes/084.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Speed",
                "stat_value": 75,
            },
        ],
        "next_evolution": [
            {
                "num": "085",
                "name": "Dodrio"
            }
        ]
    },
    {
        "id": 85,
        "num": "085",
        "name": "Dodrio",
        "img": "imagenes/085.png",
        "type": [
            "Normal",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [
            "Ghost",
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "prev_evolution": [
            {
                "num": "084",
                "name": "Doduo"
            }
        ]
    },
    {
        "id": 86,
        "num": "086",
        "name": "Seel",
        "img": "imagenes/086.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "next_evolution": [
            {
                "num": "087",
                "name": "Dewgong"
            }
        ]
    },
    {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "img": "imagenes/087.png",
        "type": [
            "Water",
            "Ice"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
            "Rock",
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Water"
        ],
        "hard_resistance": [
            "Ice"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "086",
                "name": "Seel"
            }
        ]
    },
    {
        "id": 88,
        "num": "088",
        "name": "Grimer",
        "img": "imagenes/088.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 25,
            },
        ],
        "next_evolution": [
            {
                "num": "089",
                "name": "Muk"
            }
        ]
    },
    {
        "id": 89,
        "num": "089",
        "name": "Muk",
        "img": "imagenes/089.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 105,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "prev_evolution": [
            {
                "num": "088",
                "name": "Grimer"
            }
        ]
    },
    {
        "id": 90,
        "num": "090",
        "name": "Shellder",
        "img": "imagenes/090.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "next_evolution": [
            {
                "num": "091",
                "name": "Cloyster"
            }
        ]
    },
    {
        "id": 91,
        "num": "091",
        "name": "Cloyster",
        "img": "imagenes/091.png",
        "type": [
            "Water",
            "Ice"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
            "Rock",
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Water"
        ],
        "hard_resistance": [
            "Ice"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 180,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "090",
                "name": "Shellder"
            }
        ]
    },
    {
        "id": 92,
        "num": "092",
        "name": "Gastly",
        "img": "imagenes/092.png",
        "type": [
            "Ghost",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ghost",
            "Psychic",
            "Dark",
        ],
        "resistance": [
            "Dark",
            "Grass"
        ],
        "hard_resistance": [
            "Bug",
            "Poison"
        ],
        "inmune": [
            "Fighting",
            "Normal",
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "next_evolution": [
            {
                "num": "093",
                "name": "Haunter"
            },
            {
                "num": "094",
                "name": "Gengar"
            }
        ]
    },
    {
        "id": 93,
        "num": "093",
        "name": "Haunter",
        "img": "imagenes/093.png",
        "type": [
            "Ghost",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ghost",
            "Psychic",
            "Dark",
        ],
        "resistance": [
            "Dark",
            "Grass"
        ],
        "hard_resistance": [
            "Bug",
            "Poison"
        ],
        "inmune": [
            "Fighting",
            "Normal",
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 95,
            },
        ],
        "prev_evolution": [
            {
                "num": "092",
                "name": "Gastly"
            }
        ],
        "next_evolution": [
            {
                "num": "094",
                "name": "Gengar"
            }
        ]
    },
    {
        "id": 94,
        "num": "094",
        "name": "Gengar",
        "img": "imagenes/094.png",
        "type": [
            "Ghost",
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ghost",
            "Psychic",
            "Dark",
            "Ground"
        ],
        "resistance": [
            "Dark",
            "Grass"
        ],
        "hard_resistance": [
            "Bug",
            "Poison"
        ],
        "inmune": [
            "Fighting",
            "Normal"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 130,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 110,
            },
        ],
        "prev_evolution": [
            {
                "num": "092",
                "name": "Gastly"
            },
            {
                "num": "093",
                "name": "Haunter"
            }
        ]
    },
    {
        "id": 95,
        "num": "095",
        "name": "Onix",
        "img": "imagenes/095.png",
        "type": [
            "Rock",
            "Ground"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 160,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
    },
    {
        "id": 96,
        "num": "096",
        "name": "Drowzee",
        "img": "imagenes/096.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 48,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 43,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Speed",
                "stat_value": 42,
            },
        ],
        "next_evolution": [
            {
                "num": "097",
                "name": "Hypno"
            }
        ]
    },
    {
        "id": 97,
        "num": "097",
        "name": "Hypno",
        "img": "imagenes/097.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 85,
            },
            {
                "stat_name": "Attack",
                "stat_value": 73,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 73,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 115,
            },
            {
                "stat_name": "Speed",
                "stat_value": 67,
            },
        ],
        "prev_evolution": [
            {
                "num": "096",
                "name": "Drowzee"
            }
        ]
    },
    {
        "id": 98,
        "num": "098",
        "name": "Krabby",
        "img": "imagenes/098.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 25,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "next_evolution": [
            {
                "num": "099",
                "name": "Kingler"
            }
        ]
    },
    {
        "id": 99,
        "num": "099",
        "name": "Kingler",
        "img": "imagenes/099.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 130,
            },
            {
                "stat_name": "Defense",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 75,
            },
        ],
        "prev_evolution": [
            {
                "num": "098",
                "name": "Krabby"
            }
        ]
    },
    {
        "id": 100,
        "num": "100",
        "name": "Voltorb",
        "img": "imagenes/100.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
        "next_evolution": [
            {
                "num": "101",
                "name": "Electrode"
            }
        ]
    },
    {
        "id": 101,
        "num": "101",
        "name": "Electrode",
        "img": "imagenes/101.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 150,
            },
        ],
        "prev_evolution": [
            {
                "num": "100",
                "name": "Voltorb"
            }
        ]
    },
    {
        "id": 102,
        "num": "102",
        "name": "Exeggcute",
        "img": "imagenes/102.png",
        "type": [
            "Grass",
            "Psychic"
        ],
        "hard_weakness": [
            "Bug"
        ],
        "weakness": [
            "Ghost",
            "Fire",
            "Ice",
            "Dark",
            "Poison",
            "Flying"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fighting",
            "Grass",
            "Psychic",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "next_evolution": [
            {
                "num": "103",
                "name": "Exeggutor"
            }
        ]
    },
    {
        "id": 103,
        "num": "103",
        "name": "Exeggutor",
        "img": "imagenes/103.png",
        "type": [
            "Grass",
            "Psychic"
        ],
        "hard_weakness": [
            "Bug"
        ],
        "weakness": [
            "Ghost",
            "Fire",
            "Ice",
            "Dark",
            "Poison",
            "Flying"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fighting",
            "Grass",
            "Psychic",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 95,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 125,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "prev_evolution": [
            {
                "num": "102",
                "name": "Exeggcute"
            }
        ]
    },
    {
        "id": 104,
        "num": "104",
        "name": "Cubone",
        "img": "imagenes/104.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass"
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "next_evolution": [
            {
                "num": "105",
                "name": "Marowak"
            }
        ]
    },
    {
        "id": 105,
        "num": "105",
        "name": "Marowak",
        "img": "imagenes/105.png",
        "type": [
            "Ground"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Ice",
            "Grass"
        ],
        "resistance": [
            "Rock",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 45,
            },
        ],
        "prev_evolution": [
            {
                "num": "104",
                "name": "Cubone"
            }
        ]
    },
    {
        "id": 106,
        "num": "106",
        "name": "Hitmonlee",
        "img": "imagenes/106.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 120,
            },
            {
                "stat_name": "Defense",
                "stat_value": 53,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Speed",
                "stat_value": 87,
            },
        ],
    },
    {
        "id": 107,
        "num": "107",
        "name": "Hitmonchan",
        "img": "imagenes/107.png",
        "type": [
            "Fighting"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Psychic",
            "Flying"
        ],
        "resistance": [
            "Bug",
            "Rock",
            "Dark"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 50,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 79,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Speed",
                "stat_value": 76,
            },
        ],
    },
    {
        "id": 108,
        "num": "108",
        "name": "Lickitung",
        "img": "imagenes/108.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
    },
    {
        "id": 109,
        "num": "109",
        "name": "Koffing",
        "img": "imagenes/109.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "next_evolution": [
            {
                "num": "110",
                "name": "Weezing"
            }
        ]
    },
    {
        "id": 110,
        "num": "110",
        "name": "Weezing",
        "img": "imagenes/110.png",
        "type": [
            "Poison"
        ],
        "hard_weakness": [],
        "weakness": [
            "Psychic",
            "Ground"
        ],
        "resistance": [
            "Bug",
            "Fairy",
            "Fighting",
            "Grass",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 120,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
        "prev_evolution": [
            {
                "num": "109",
                "name": "Koffing"
            }
        ]
    },
    {
        "id": 111,
        "num": "111",
        "name": "Rhyhorn",
        "img": "imagenes/111.png",
        "type": [
            "Ground",
            "Rock"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 30,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 30,
            },
            {
                "stat_name": "Speed",
                "stat_value": 25,
            },
        ],
        "next_evolution": [
            {
                "num": "112",
                "name": "Rhydon"
            }
        ]
    },
    {
        "id": 112,
        "num": "112",
        "name": "Rhydon",
        "img": "imagenes/112.png",
        "type": [
            "Ground",
            "Rock"
        ],
        "hard_weakness": [
            "Water",
            "Ground"
        ],
        "weakness": [
            "Steel",
            "Ice",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Fire",
            "Normal",
            "Rock",
            "Flying"
        ],
        "hard_resistance": [
            "Poison"
        ],
        "inmune": [
            "Electric"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 105,
            },
            {
                "stat_name": "Attack",
                "stat_value": 130,
            },
            {
                "stat_name": "Defense",
                "stat_value": 120,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
        "prev_evolution": [
            {
                "num": "111",
                "name": "Rhyhorn"
            }
        ]
    },
    {
        "id": 113,
        "num": "113",
        "name": "Chansey",
        "img": "imagenes/113.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 250,
            },
            {
                "stat_name": "Attack",
                "stat_value": 5,
            },
            {
                "stat_name": "Defense",
                "stat_value": 5,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 105,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
    },
    {
        "id": 114,
        "num": "114",
        "name": "Tangela",
        "img": "imagenes/114.png",
        "type": [
            "Grass"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Fire",
            "Ice",
            "Flying",
            "Poison"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Grass",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 40,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
    },
    {
        "id": 115,
        "num": "115",
        "name": "Kangaskhan",
        "img": "imagenes/115.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 105,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
    },
    {
        "id": 116,
        "num": "116",
        "name": "Horsea",
        "img": "imagenes/116.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 25,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
        "next_evolution": [
            {
                "num": "117",
                "name": "Seadra"
            }
        ]
    },
    {
        "id": 117,
        "num": "117",
        "name": "Seadra",
        "img": "imagenes/117.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
        "prev_evolution": [
            {
                "num": "116",
                "name": "Horsea"
            }
        ]
    },
    {
        "id": 118,
        "num": "118",
        "name": "Goldeen",
        "img": "imagenes/118.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 45,
            },
            {
                "stat_name": "Attack",
                "stat_value": 67,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 63,
            },
        ],
        "next_evolution": [
            {
                "num": "119",
                "name": "Seaking"
            }
        ]
    },
    {
        "id": 119,
        "num": "119",
        "name": "Seaking",
        "img": "imagenes/119.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 92,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 68,
            },
        ],
        "prev_evolution": [
            {
                "num": "118",
                "name": "Goldeen"
            }
        ]
    },
    {
        "id": 120,
        "num": "120",
        "name": "Staryu",
        "img": "imagenes/120.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
        "next_evolution": [
            {
                "num": "121",
                "name": "Starmie"
            }
        ]
    },
    {
        "id": 121,
        "num": "121",
        "name": "Starmie",
        "img": "imagenes/121.png",
        "type": [
            "Water",
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Electric",
            "Ghost",
            "Grass",
            "Dark"
        ],
        "resistance": [
            "Steel",
            "Water",
            "Fire",
            "Ice",
            "Fighting",
            "Psychic"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 75,
            },
            {
                "stat_name": "Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 115,
            },
        ],
        "prev_evolution": [
            {
                "num": "120",
                "name": "Staryu"
            }
        ]
    },
    {
        "id": 122,
        "num": "122",
        "name": "Mr. Mime",
        "img": "imagenes/122.png",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Ghost",
            "Poison"
        ],
        "resistance": [
            "Psychic"
        ],
        "hard_resistance": [
            "Fighting"
        ],
        "inmune": [
            "Dragon"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 40,
            },
            {
                "stat_name": "Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 120,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
    },
    {
        "id": 123,
        "num": "123",
        "name": "Scyther",
        "img": "imagenes/123.png",
        "type": [
            "Bug",
            "Flying"
        ],
        "hard_weakness": [
            "Rock"
        ],
        "weakness": [
            "Electric",
            "Fire",
            "Ice",
            "Flying"
        ],
        "resistance": [
            "Bug"
        ],
        "hard_resistance": [
            "Fighting",
            "Grass"
        ],
        "inmune": [
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Speed",
                "stat_value": 105,
            },
        ],
    },
    {
        "id": 124,
        "num": "124",
        "name": "Jynx",
        "img": "imagenes/124.png",
        "type": [
            "Ice",
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Steel",
            "Fire",
            "Bug",
            "Ghost",
            "Rock",
            "Dark"
        ],
        "resistance": [
            "Ice",
            "Psychic"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Defense",
                "stat_value": 35,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Speed",
                "stat_value": 95,
            },
        ],
    },
    {
        "id": 125,
        "num": "125",
        "name": "Electabuzz",
        "img": "imagenes/125.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 83,
            },
            {
                "stat_name": "Defense",
                "stat_value": 57,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 105,
            },
        ],
    },
    {
        "id": 126,
        "num": "126",
        "name": "Magmar",
        "img": "imagenes/126.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Defense",
                "stat_value": 57,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 93,
            },
        ],
    },
    {
        "id": 127,
        "num": "127",
        "name": "Pinsir",
        "img": "imagenes/127.png",
        "type": [
            "Bug"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fire",
            "Rock",
            "Flying"
        ],
        "resistance": [
            "Fighting",
            "Grass",
            "Ground"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 125,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
    },
    {
        "id": 128,
        "num": "128",
        "name": "Tauros",
        "img": "imagenes/128.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 75,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
    },
    {
        "id": 129,
        "num": "129",
        "name": "Magikarp",
        "img": "imagenes/129.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 20,
            },
            {
                "stat_name": "Attack",
                "stat_value": 10,
            },
            {
                "stat_name": "Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 15,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 20,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "next_evolution": [
            {
                "num": "130",
                "name": "Gyarados"
            }
        ]
    },
    {
        "id": 130,
        "num": "130",
        "name": "Gyarados",
        "img": "imagenes/130.png",
        "type": [
            "Water",
            "Flying"
        ],
        "hard_weakness": [
            "Electric"
        ],
        "weakness": [
            "Rock",
        ],
        "resistance": [
            "Steel",
            "Water",
            "Bug",
            "Fire",
            "Fighting"
        ],
        "hard_resistance": [],
        "inmune": ["Ground"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 95,
            },
            {
                "stat_name": "Attack",
                "stat_value": 125,
            },
            {
                "stat_name": "Defense",
                "stat_value": 79,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 81,
            },
        ],
        "prev_evolution": [
            {
                "num": "129",
                "name": "Magikarp"
            }
        ]
    },
    {
        "id": 131,
        "num": "131",
        "name": "Lapras",
        "img": "imagenes/131.png",
        "type": [
            "Water",
            "Ice"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
            "Rock",
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Water"
        ],
        "hard_resistance": [
            "Ice"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 130,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 80,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Speed",
                "stat_value": 60,
            },
        ],
    },
    {
        "id": 132,
        "num": "132",
        "name": "Ditto",
        "img": "imagenes/132.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 48,
            },
            {
                "stat_name": "Attack",
                "stat_value": 48,
            },
            {
                "stat_name": "Defense",
                "stat_value": 48,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 48,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 48,
            },
            {
                "stat_name": "Speed",
                "stat_value": 48,
            },
        ],
    },
    {
        "id": 133,
        "num": "133",
        "name": "Eevee",
        "img": "imagenes/133.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 55,
            },
            {
                "stat_name": "Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "next_evolution": [
            {
                "num": "134",
                "name": "Vaporeon"
            },
            {
                "num": "135",
                "name": "Jolteon"
            },
            {
                "num": "136",
                "name": "Flareon"
            }
        ]
    },
    {
        "id": 134,
        "num": "134",
        "name": "Vaporeon",
        "img": "imagenes/134.png",
        "type": [
            "Water"
        ],
        "hard_weakness": [],
        "weakness": [
            "Grass",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Water",
            "Ice"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 130,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "prev_evolution": [
            {
                "num": "133",
                "name": "Eevee"
            }
        ]
    },
    {
        "id": 135,
        "num": "135",
        "name": "Jolteon",
        "img": "imagenes/135.png",
        "type": [
            "Electric"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Electric",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Speed",
                "stat_value": 130,
            },
        ],
        "prev_evolution": [
            {
                "num": "133",
                "name": "Eevee"
            }
        ]
    },
    {
        "id": 136,
        "num": "136",
        "name": "Flareon",
        "img": "imagenes/136.png",
        "type": [
            "Fire"
        ],
        "hard_weakness": [],
        "weakness": [
            "Water",
            "Rock",
            "Ground"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fire",
            "Fairy",
            "Ice",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 130,
            },
            {
                "stat_name": "Defense",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Speed",
                "stat_value": 65,
            },
        ],
        "prev_evolution": [
            {
                "num": "133",
                "name": "Eevee"
            }
        ]
    },
    {
        "id": 137,
        "num": "137",
        "name": "Porygon",
        "img": "imagenes/137.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 65,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 40,
            },
        ],
    },
    {
        "id": 138,
        "num": "138",
        "name": "Omanyte",
        "img": "imagenes/138.png",
        "type": [
            "Rock",
            "Water"
        ],
        "hard_weakness": [
            "Grass"
        ],
        "weakness": [
            "Electric",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Ice",
            "Normal",
            "Poison",
            "Flying"
        ],
        "hard_resistance": [
            "Fire"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 35,
            },
            {
                "stat_name": "Attack",
                "stat_value": 40,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 55,
            },
            {
                "stat_name": "Speed",
                "stat_value": 35,
            },
        ],
        "next_evolution": [
            {
                "num": "139",
                "name": "Omastar"
            }
        ]
    },
    {
        "id": 139,
        "num": "139",
        "name": "Omastar",
        "img": "imagenes/139.png",
        "type": [
            "Rock",
            "Water"
        ],
        "hard_weakness": [
            "Grass"
        ],
        "weakness": [
            "Electric",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Ice",
            "Normal",
            "Poison",
            "Flying"
        ],
        "hard_resistance": [
            "Fire"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 70,
            },
            {
                "stat_name": "Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Defense",
                "stat_value": 125,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 115,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "prev_evolution": [
            {
                "num": "138",
                "name": "Omanyte"
            }
        ]
    },
    {
        "id": 140,
        "num": "140",
        "name": "Kabuto",
        "img": "imagenes/140.png",
        "type": [
            "Rock",
            "Water"
        ],
        "hard_weakness": [
            "Grass"
        ],
        "weakness": [
            "Electric",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Ice",
            "Normal",
            "Poison",
            "Flying"
        ],
        "hard_resistance": [
            "Fire"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 30,
            },
            {
                "stat_name": "Attack",
                "stat_value": 80,
            },
            {
                "stat_name": "Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 55,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Speed",
                "stat_value": 55,
            },
        ],
        "next_evolution": [
            {
                "num": "141",
                "name": "Kabutops"
            }
        ]
    },
    {
        "id": 141,
        "num": "141",
        "name": "Kabutops",
        "img": "imagenes/141.png",
        "type": [
            "Rock",
            "Water"
        ],
        "hard_weakness": [
            "Grass"
        ],
        "weakness": [
            "Electric",
            "Fighting",
            "Ground"
        ],
        "resistance": [
            "Ice",
            "Normal",
            "Poison",
            "Flying"
        ],
        "hard_resistance": [
            "Fire"
        ],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 60,
            },
            {
                "stat_name": "Attack",
                "stat_value": 115,
            },
            {
                "stat_name": "Defense",
                "stat_value": 105,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "prev_evolution": [
            {
                "num": "140",
                "name": "Kabuto"
            }
        ]
    },
    {
        "id": 142,
        "num": "142",
        "name": "Aerodactyl",
        "img": "imagenes/142.png",
        "type": [
            "Rock",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Electric",
            "Steel",
            "Water",
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Bug",
            "Normal",
            "Fire",
            "Flying",
            "Poison"
        ],
        "hard_resistance": [],
        "inmune": ["Ground"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 80,
            },
            {
                "stat_name": "Attack",
                "stat_value": 105,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 60,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 75,
            },
            {
                "stat_name": "Speed",
                "stat_value": 130,
            },
        ],
    },
    {
        "id": 143,
        "num": "143",
        "name": "Snorlax",
        "img": "imagenes/143.png",
        "type": [
            "Normal"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fighting",
        ],
        "resistance": [],
        "hard_resistance": [],
        "inmune": ["Ghost"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 160,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 110,
            },
            {
                "stat_name": "Speed",
                "stat_value": 30,
            },
        ],
    },
    {
        "id": 144,
        "num": "144",
        "name": "Articuno",
        "img": "imagenes/144.png",
        "type": [
            "Ice",
            "Flying"
        ],
        "hard_weakness": [
            "Rock"
        ],
        "weakness": [
            "Steel",
            "Electric",
            "Fire"
        ],
        "resistance": [
            "Grass",
            "Bug"
        ],
        "hard_resistance": [],
        "inmune": ["Ground"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 85,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 125,
            },
            {
                "stat_name": "Speed",
                "stat_value": 85,
            },
        ],
    },
    {
        "id": 145,
        "num": "145",
        "name": "Zapdos",
        "img": "imagenes/145.png",
        "type": [
            "Electric",
            "Flying"
        ],
        "hard_weakness": [],
        "weakness": [
            "Ice",
            "Rock"
        ],
        "resistance": [
            "Steel",
            "Bug",
            "Fighting",
            "Grass",
            "Flying"
        ],
        "hard_resistance": [],
        "inmune": ["Ground"],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 90,
            },
            {
                "stat_name": "Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 125,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
    },
    {
        "id": 146,
        "num": "146",
        "name": "Moltres",
        "img": "imagenes/146.png",
        "type": [
            "Fire",
            "Flying"
        ],
        "hard_weakness": [
            "Rock",
        ],
        "weakness": [
            "Water",
            "Electric",
        ],
        "resistance": [
            "Steel",
            "Fire",
            "Fairy",
            "Fighting"
        ],
        "hard_resistance": [
            "Bug",
            "Grass",
        ],
        "inmune": [
            "Ground",
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 90,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 125,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 85,
            },
            {
                "stat_name": "Speed",
                "stat_value": 90,
            },
        ],
    },
    {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "imagenes/147.png",
        "type": [
            "Dragon"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Dragon",
            "Ice"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fire",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 41,
            },
            {
                "stat_name": "Attack",
                "stat_value": 64,
            },
            {
                "stat_name": "Defense",
                "stat_value": 45,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 50,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 50,
            },
            {
                "stat_name": "Speed",
                "stat_value": 50,
            },
        ],
        "next_evolution": [
            {
                "num": "148",
                "name": "Dragonair"
            },
            {
                "num": "149",
                "name": "Dragonite"
            }
        ]
    },
    {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "imagenes/148.png",
        "type": [
            "Dragon"
        ],
        "hard_weakness": [],
        "weakness": [
            "Fairy",
            "Dragon",
            "Ice"
        ],
        "resistance": [
            "Water",
            "Electric",
            "Fire",
            "Grass"
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 61,
            },
            {
                "stat_name": "Attack",
                "stat_value": 84,
            },
            {
                "stat_name": "Defense",
                "stat_value": 65,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 70,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 70,
            },
            {
                "stat_name": "Speed",
                "stat_value": 70,
            },
        ],
        "prev_evolution": [
            {
                "num": "147",
                "name": "Dratini"
            }
        ],
        "next_evolution": [
            {
                "num": "149",
                "name": "Dragonite"
            }
        ]
    },
    {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "imagenes/149.png",
        "type": [
            "Dragon",
            "Flying"
        ],
        "hard_weakness": [
            "Ice"
        ],
        "weakness": [
            "Fairy",
            "Dragon",
            "Rock"
        ],
        "resistance": [
            "Water",
            "Bug",
            "Fire",
            "Fighting"
        ],
        "hard_resistance": [
            "Grass"
        ],
        "inmune": [
            "Ground"
        ],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 91,
            },
            {
                "stat_name": "Attack",
                "stat_value": 134,
            },
            {
                "stat_name": "Defense",
                "stat_value": 95,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 80,
            },
        ],
        "prev_evolution": [
            {
                "num": "147",
                "name": "Dratini"
            },
            {
                "num": "148",
                "name": "Dragonair"
            }
        ]
    },
    {
        "id": 150,
        "num": "150",
        "name": "Mewtwo",
        "img": "imagenes/150.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 106,
            },
            {
                "stat_name": "Attack",
                "stat_value": 110,
            },
            {
                "stat_name": "Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 154,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 90,
            },
            {
                "stat_name": "Speed",
                "stat_value": 130,
            },
        ],
    },
    {
        "id": 151,
        "num": "151",
        "name": "Mew",
        "img": "imagenes/151.png",
        "type": [
            "Psychic"
        ],
        "hard_weakness": [],
        "weakness": [
            "Bug",
            "Ghost",
            "Dark"
        ],
        "resistance": [
            "Fighting",
            "Psychic",
        ],
        "hard_resistance": [],
        "inmune": [],
        "stats": [
            {
                "stat_name": "PS",
                "stat_value": 100,
            },
            {
                "stat_name": "Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Attack",
                "stat_value": 100,
            },
            {
                "stat_name": "Sp. Defense",
                "stat_value": 100,
            },
            {
                "stat_name": "Speed",
                "stat_value": 100,
            },
        ],
    }

]