import { reactive } from 'vue';

export const store = reactive({

    //CATEGORIE
    categoria_esordienti: 'Esordienti',

    //CALENDARIO PARTITE
    calendario: [
        //'Martedì 2 maggio 2023'
        {
            giorno: 'Martedì 2 maggio 2023',

            match: [
                // squadre che giocano alle 18:00
                {
                    categoria: '2012',
                    campo: "CAMPO 1",
                    orario: "18:00",
                    girone: 1,
                    nome_squadra_casa: 'RIVERNIVIANO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'VIGOLZONE',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 18:20
                {
                    categoria: '2014',
                    campo: "CAMPO 2",
                    orario: "18:20",
                    girone: 1,
                    nome_squadra_casa: 'RIVERNIVIANO VERDE',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'BORGONOVESE',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:00
                {
                    categoria: '2013',
                    campo: "CAMPO 1",
                    orario: "19:00",
                    girone: 1,
                    nome_squadra_casa: 'RIVERNIVIANO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'VIGOLZONE',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:20
                {
                    categoria: '2014',
                    campo: "CAMPO 2",
                    orario: "19:20",
                    girone: 1,
                    nome_squadra_casa: 'TRAVESE',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'LUGAGNANESE',
                    risultato_squadra_ospite: null,
                }
            ]
        },
        //'Mercoledì 3 maggio 2023'
        {
            giorno: 'Mercoledì 3 maggio 2023',

            match: [
                // squadre che giocano alle 18:00
                {
                    categoria: '2013',
                    campo: "CAMPO 1",
                    orario: "18:00",
                    girone: 1,
                    nome_squadra_casa: 'GOTICO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'VIGOR CHERO',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 18:20
                {
                    categoria: '2015',
                    campo: "CAMPO 2",
                    orario: "18:20",
                    girone: 1,
                    nome_squadra_casa: 'RIVERNIVIANO VERDE',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'BOBBIESE',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:00
                {
                    categoria: '2012',
                    campo: "CAMPO 1",
                    orario: "19:00",
                    girone: 1,
                    nome_squadra_casa: 'BOBBIESE',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'LUGAGNANESE',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:20
                {
                    categoria: '2015',
                    campo: "CAMPO 2",
                    orario: "19:20",
                    girone: 1,
                    nome_squadra_casa: 'GOTICO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'PODENZANO',
                    risultato_squadra_ospite: null,
                }
            ]
        },
        //'Giovedì 4 maggio 2023'
        {
            giorno: 'Giovedì 4 maggio 2023',

            match: [
                // squadre che giocano alle 18:00
                {
                    categoria: '2012',
                    campo: "CAMPO 1",
                    orario: "18:00",
                    girone: 2,
                    nome_squadra_casa: 'JUNIOR CALENDASCO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'GOTICO',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 18:20
                {
                    categoria: '2015',
                    campo: "CAMPO 2",
                    orario: "18:20",
                    girone: 2,
                    nome_squadra_casa: 'RIVERNIVIANO BLU',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'AUDAX LIBERTAS',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:00
                {
                    categoria: '2012',
                    campo: "CAMPO 1",
                    orario: "19:00",
                    girone: 2,
                    nome_squadra_casa: 'GOSSOLENGO PITTOLO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'AUDAX LIBERTAS',
                    risultato_squadra_ospite: null,
                },
                // squadre che giocano alle 19:20
                {
                    categoria: '2014',
                    campo: "CAMPO 2",
                    orario: "19:20",
                    girone: 2,
                    nome_squadra_casa: 'JUNIOR CALENDASCO',
                    risultato_squadra_casa: null,
                    nome_squadra_ospite: 'GOTICO',
                    risultato_squadra_ospite: null,
                }
            ]
        }
    ],
})