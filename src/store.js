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
    calendar: [
        //'Martedì 2 maggio 2023'
        {
            giorno: 'Martedì 2 maggio 2023',
            categoria_partita_1: '2012',
            nome_squadra_1: 'RIVERNIVIANO',
            nome_squadra_2: 'VIGOLZONE',
            categoria_partita_2: '2013',
            nome_squadra_3: 'RIVERNIVIANO',
            nome_squadra_4: 'VIGOLZONE',
            categoria_partita_3: '2014',
            nome_squadra_5: 'RIVERNIVIANO VERDE',
            nome_squadra_6: 'BORGONOVESE',
            categoria_partita_4: '2014',
            nome_squadra_7: 'TRAVESE',
            nome_squadra_8: 'LUGAGNANESE',
        },
        //'Mercoledì 3 maggio 2023'
        {
            giorno: 'Mercoledì 3 maggio 2023',
            categoria_partita_1: '2013',
            nome_squadra_1: 'GOTICO',
            nome_squadra_2: 'VIGORCHERO',
            categoria_partita_2: '2012',
            nome_squadra_3: 'BOBBIESE',
            nome_squadra_4: 'LUGAGNANESE',
            categoria_partita_3: '2015',
            nome_squadra_5: 'RIVERNIVIANO VERDE',
            nome_squadra_6: 'BOBBIESE',
            categoria_partita_4: '2015',
            nome_squadra_7: 'GOTICO',
            nome_squadra_8: 'PODENZANO',
        },
        //'Giovedì 4 maggio 2023'
        {
            giorno: 'Giovedì 4 maggio 2023',
            categoria_partita_1: '2012',
            nome_squadra_1: 'JUNIOR CALENDASCO',
            nome_squadra_2: 'GOTICO',
            categoria_partita_2: '2012',
            nome_squadra_3: 'GOSSOLENGO PITTOLO',
            nome_squadra_4: 'AUDAX LIBERTAS',
            categoria_partita_3: '2014',
            nome_squadra_5: 'RIVERNIVIANO BLU',
            nome_squadra_6: 'AUDAX LIBERTAS',
            categoria_partita_4: '2014',
            nome_squadra_7: 'JUNIOR CALENDASCO',
            nome_squadra_8: 'GOTICO',
        },
        //'Venerdì 5 maggio 2023'
        {
            giorno: 'Venerdì 5 maggio 2023',
            categoria_partita_1: '2013',
            nome_squadra_1: 'PODENZANO',
            nome_squadra_2: 'JUNIOR CALENDASCO',
            categoria_partita_2: '2013',
            nome_squadra_3: 'BOBBIESE',
            nome_squadra_4: 'AUDAX LIBERTAS',
            categoria_partita_3: '2015',
            nome_squadra_5: 'RIVERNIVIANO BLU',
            nome_squadra_6: 'JUNIOR CALENDASCO',
            categoria_partita_4: '2015',
            nome_squadra_7: 'AUDAX LIBERTAS',
            nome_squadra_8: 'VIGOR CHERO',
        }
    ]
})