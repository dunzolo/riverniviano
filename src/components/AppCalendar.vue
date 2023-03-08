<script>
import { store } from '../store.js'

export default {
    props: {
        match: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCampo1() {
            return store.campo_1;
        },
        getCampo2() {
            return store.campo_2;
        },
        getOrario18() {
            return store.orario_18_00;
        },
        getOrario19() {
            return store.orario_19_00;
        },
        getBackgroundMatch(category) {
            switch (category) {
                case '2012':
                    category = 'bg-green'
                    break;
                case '2013':
                    category = 'bg-yellow'
                    break;
                case '2014':
                    category = 'bg-light-brown'
                    break;
                case '2015':
                    category = 'bg-light-blue'
                    break;
                case 'Esordienti':
                    category = 'bg-red'
                    break;
                default:
                    break;
            }
            return category
        },
        getImage(name_squad) {
            let name_path = name_squad.toLowerCase().replaceAll(" ", "");
            return '/riverniviano/' + name_path + '.png';
        }
    }
}
</script>

<template lang="">
    <div class="margin-top-1">
        <div class="day"><h4>{{ match.giorno }}</h4></div>
        <div class="row" :class=getBackgroundMatch(match.categoria_partita_1)>
            <div class="logo"><img :src="getImage(match.nome_squadra_1)" :alt="match.nome_squadra_1"></div>
            <div class="squad"><span>{{ match.nome_squadra_1 }}</span></div>
            <div class="hour">
                <p><strong>{{ getCampo1() }}</strong></p>
                <p><strong>{{ getOrario18() }}</strong></p>
            </div>
            <div class="squad"><span>{{ match.nome_squadra_2 }}</span></div>
            <div class="logo"><img :src="getImage(match.nome_squadra_2)" :alt="match.nome_squadra_2"></div>
        </div>
        <div class="row margin-top-1" :class=getBackgroundMatch(match.categoria_partita_2)>
            <div class="logo"><img :src="getImage(match.nome_squadra_3)" :alt="match.nome_squadra_3"></div>
            <div class="squad"><span>{{ match.nome_squadra_3 }}</span></div>
            <div class="hour">
                <p><strong>{{ getCampo1() }}</strong></p>
                <p><strong>{{ getOrario19() }}</strong></p>
            </div>
            <div class="squad"><span>{{ match.nome_squadra_4}}</span></div>
            <div class="logo"><img :src="getImage(match.nome_squadra_4)" :alt="match.nome_squadra_4"></div>
        </div>
        <div class="row margin-top-1" :class=getBackgroundMatch(match.categoria_partita_3)>
            <div class="logo"><img :src="getImage(match.nome_squadra_5)" :alt="match.nome_squadra_5"></div>
            <div class="squad"><span>{{ match.nome_squadra_5}}</span></div>
            <div class="hour">
                <p><strong>{{ getCampo2() }}</strong></p>
                <p><strong>{{ getOrario18() }}</strong></p>
            </div>
            <div class="squad"><span>{{ match.nome_squadra_6}}</span></div>
            <div class="logo"><img :src="getImage(match.nome_squadra_6)" :alt="match.nome_squadra_6"></div>
        </div>
        <div class="row margin-top-1" :class=getBackgroundMatch(match.categoria_partita_4)>
            <div class="logo"><img :src="getImage(match.nome_squadra_7)" :alt="match.nome_squadra_7"></div>
            <div class="squad"><span>{{ match.nome_squadra_7}}</span></div>
            <div class="hour">
                <p><strong>{{ getCampo2() }}</strong></p>
                <p><strong>{{ getOrario19() }}</strong></p>
            </div>
            <div class="squad"><span>{{ match.nome_squadra_8}}</span></div>
            <div class="logo"><img :src="getImage(match.nome_squadra_8)" :alt="match.nome_squadra_8"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 12px;
}

h4 {
    color: white
}

.day {
    width: 100%;
    // border: 1px solid black;
    text-align: center;
    padding: 0.10rem 0;
}

.row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 100px;


    .logo {
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 100%;
            // scale: 1.5;
        }
    }

    .squad {
        width: calc((100% - 100px) / 3);
        text-align: center;
    }

    .hour {
        text-align: center;
    }
}
</style>