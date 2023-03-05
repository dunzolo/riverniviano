import { reactive } from 'vue';

export const store = reactive({
    campo_1: 'CAMPO 1',
    campo_2: 'CAMPO 2',
    orario_18_00: '18:00',
    orario_18_20: '18:20',
    orario_19_00: '19:00',
    orario_19_20: '19:20',
    orario_20_00: '20:00',
    orario_20_20: '20:20',
    categoria_2012: '2012',
    categoria_2013: '2013',
    categoria_2014: '2014',
    categoria_2015: '2015',
    categoria_esordienti: 'Esordienti',
    pulcini_2012: [
        {
            girone: 'A',
            nome_squadra_1: 'RIVERNIVIANO',
            nome_squadra_2: 'VIGOLZONE',
            nome_squadra_3: 'BOBBIESE',
            nome_squadra_4: 'LUGAGNANESE',
        },
        {
            girone: 'B',
            nome_squadra_1: 'GOSSOLENGO PITTOLO',
            nome_squadra_2: 'JUNIOR CALENDASCO',
            nome_squadra_3: 'GOTICO',
            nome_squadra_4: 'AUDAX LIBERTAS',
        }
    ],
    pulcini_2013: [
        {
            girone: 'C',
            nome_squadra_1: 'RIVERNIVIANO',
            nome_squadra_2: 'VIGOLZONE',
            nome_squadra_3: 'GOTICO',
            nome_squadra_4: 'VIGORCHERO',
        },
        {
            girone: 'F',
            nome_squadra_1: 'PODENZANO',
            nome_squadra_2: 'JUNIOR CALENDASCO',
            nome_squadra_3: 'BOBBIESE',
            nome_squadra_4: 'AUDAX LIBERTAS',
        }
    ],
    primi_calci_2014: [
        {
            girone: 'E',
            nome_squadra_1: 'RIVERNIVIANO VERDE',
            nome_squadra_2: 'BORGONOVESE',
            nome_squadra_3: 'TRAVESE',
            nome_squadra_4: 'LUGAGNANESE',
        },
        {
            girone: 'F',
            nome_squadra_1: 'RIVERNIVIANO BLU',
            nome_squadra_2: 'AUDAX LIBERTAS',
            nome_squadra_3: 'JUNIOR CALENDASCO',
            nome_squadra_4: 'GOTICO',
        }
    ],
    primi_calci_2015: [
        {
            girone: 'G',
            nome_squadra_1: 'RIVERNIVIANO VERDE',
            nome_squadra_2: 'BOBBIESE',
            nome_squadra_3: 'GOTICO',
            nome_squadra_4: 'PODENZANO',
        },
        {
            girone: 'H',
            nome_squadra_1: 'RIVERNIVIANO BLU',
            nome_squadra_2: 'AUDAX LIBERTAS',
            nome_squadra_3: 'JUNIOR CALENDASCO',
            nome_squadra_4: 'VIGOR CHERO',
        }
    ],
    // NB: DA FARE COPIA INCOLLA PER PARTITE GIRONI
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
    calendar_groups: [
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