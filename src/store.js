import { reactive } from 'vue';

export const store = reactive({
    //CAMPI
    campo_1: 'CAMPO 1',
    campo_2: 'CAMPO 2',

    //ORARI
    orario_18_00: '18:00',
    orario_18_20: '18:20',
    orario_19_00: '19:00',
    orario_19_20: '19:20',
    orario_20_00: '20:00',
    orario_20_20: '20:20',

    //CATEGORIE
    categoria_esordienti: 'Esordienti',

    //GIRONI e CATEGORIE
    pulcini_2012: {
        categoria: '2012',
        gironi: ["A", "B"],
        items: [
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "BOBBIESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "VIGOLZONE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "LUGAGNANESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ],
            [
                {
                    id: 1,
                    nome_squadra: "JUNIOR CALENDASCO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "GOTICO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "GOSSOLENGO PITTOLO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "AUDAX LIBERTAS",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ]
        ]
    },
    pulcini_2013: {
        categoria: '2013',
        gironi: ["C", "D"],
        items: [
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "VIGOLZONE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "GOTICO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "VIGOR CHERO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ],
            [
                {
                    id: 1,
                    nome_squadra: "PODENZANO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "JUNIOR CALENDASCO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "BOBBIESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "AUDAX LIBERTAS",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ]
        ]
    },
    primi_calci_2014: {
        categoria: '2014',
        gironi: ["E", "F"],
        items: [
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO VERDE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 9
                },
                {
                    id: 2,
                    nome_squadra: "BORGONOVESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "TRAVESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 6
                },
                {
                    id: 4,
                    nome_squadra: "LUGAGNANESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 6
                }
            ],
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO BLU",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "AUDAX LIBERTAS",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "JUNIOR CALENDASCO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "GOTICO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ]
        ]
    },
    primi_calci_2015: {
        categoria: '2015',
        gironi: ["G", "H"],
        items: [
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO VERDE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "BOBBIESE",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "GOTICO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "PODENZANO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ],
            [
                {
                    id: 1,
                    nome_squadra: "RIVERNIVIANO BLU",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 2,
                    nome_squadra: "AUDAX LIBERTAS",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 3,
                    nome_squadra: "JUNIOR CALENDASCO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                },
                {
                    id: 4,
                    nome_squadra: "VIGOR CHERO",
                    goal_fatti: 0,
                    goal_subiti: 0,
                    punti: 0
                }
            ]
        ]
    },

    //CALENDARIO PARTITE
    calendar: [
        //'Martedì 2 maggio 2023'
        {
            giorno: 'Martedì 2 maggio 2023',

            categoria_partita_1: '2012',
            nome_squadra_1: 'RIVERNIVIANO',
            risultato_squadra_1: null,
            nome_squadra_2: 'VIGOLZONE',
            risultato_squadra_2: null,

            categoria_partita_2: '2013',
            nome_squadra_3: 'RIVERNIVIANO',
            risultato_squadra_3: null,
            nome_squadra_4: 'VIGOLZONE',
            risultato_squadra_4: null,

            categoria_partita_3: '2014',
            nome_squadra_5: 'RIVERNIVIANO VERDE',
            risultato_squadra_5: null,
            nome_squadra_6: 'BORGONOVESE',
            risultato_squadra_6: null,

            categoria_partita_4: '2014',
            nome_squadra_7: 'TRAVESE',
            risultato_squadra_7: null,
            nome_squadra_8: 'LUGAGNANESE',
            risultato_squadra_8: null,
        },
        //'Mercoledì 3 maggio 2023'
        {
            giorno: 'Mercoledì 3 maggio 2023',

            categoria_partita_1: '2013',
            nome_squadra_1: 'GOTICO',
            risultato_squadra_1: null,
            nome_squadra_2: 'VIGORCHERO',
            risultato_squadra_: null,

            categoria_partita_2: '2012',
            nome_squadra_3: 'BOBBIESE',
            risultato_squadra_3: null,
            nome_squadra_4: 'LUGAGNANESE',
            risultato_squadra_4: null,

            categoria_partita_3: '2015',
            nome_squadra_5: 'RIVERNIVIANO VERDE',
            risultato_squadra_5: null,
            nome_squadra_6: 'BOBBIESE',
            risultato_squadra_6: null,

            categoria_partita_4: '2015',
            nome_squadra_7: 'GOTICO',
            risultato_squadra_7: null,
            nome_squadra_8: 'PODENZANO',
            risultato_squadra_8: null,
        },
        //'Giovedì 4 maggio 2023'
        {
            giorno: 'Giovedì 4 maggio 2023',

            categoria_partita_1: '2012',
            nome_squadra_1: 'JUNIOR CALENDASCO',
            risultato_squadra_1: null,
            nome_squadra_2: 'GOTICO',
            risultato_squadra_2: null,

            categoria_partita_2: '2012',
            nome_squadra_3: 'GOSSOLENGO PITTOLO',
            risultato_squadra_3: null,
            nome_squadra_4: 'AUDAX LIBERTAS',
            risultato_squadra_4: null,

            categoria_partita_3: '2014',
            nome_squadra_5: 'RIVERNIVIANO BLU',
            risultato_squadra_5: null,
            nome_squadra_6: 'AUDAX LIBERTAS',
            risultato_squadra_6: null,

            categoria_partita_4: '2014',
            nome_squadra_7: 'JUNIOR CALENDASCO',
            risultato_squadra_7: null,
            nome_squadra_8: 'GOTICO',
            risultato_squadra_8: null,
        },
        //'Venerdì 5 maggio 2023'
        {
            giorno: 'Venerdì 5 maggio 2023',

            categoria_partita_1: '2013',
            nome_squadra_1: 'PODENZANO',
            risultato_squadra_1: null,
            nome_squadra_2: 'JUNIOR CALENDASCO',
            risultato_squadra_2: null,

            categoria_partita_2: '2013',
            nome_squadra_3: 'BOBBIESE',
            risultato_squadra_3: null,
            nome_squadra_4: 'AUDAX LIBERTAS',
            risultato_squadra_4: null,

            categoria_partita_3: '2015',
            nome_squadra_5: 'RIVERNIVIANO BLU',
            risultato_squadra_5: null,
            nome_squadra_6: 'JUNIOR CALENDASCO',
            risultato_squadra_6: null,

            categoria_partita_4: '2015',
            nome_squadra_7: 'AUDAX LIBERTAS',
            risultato_squadra_7: null,
            nome_squadra_8: 'VIGOR CHERO',
            risultato_squadra_8: null,
        }
    ],
})