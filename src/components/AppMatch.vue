<script>
import { store } from '../store.js'

export default {
    props: {
        match: Object,
        category: String
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
        <div class="day" v-if="match.categoria_partita_1 === category || match.categoria_partita_2 === category || match.categoria_partita_3 === category || match.categoria_partita_4 === category">
            <h4>{{ match.giorno }}</h4>
        </div>
        <div v-if="match.categoria_partita_1 === category">
            <div class="row margin-bottom-1" :class=getBackgroundMatch(match.categoria_partita_1) >
                <div class="logo"><img :src="getImage(match.nome_squadra_1)" :alt="match.nome_squadra_1"></div>
                <div class="hour"><p><strong>{{ getCampo1() }} - {{ getOrario18() }}</strong></p></div>
                <div class="squad"><span>{{ match.nome_squadra_1 }}</span></div>
                <div class="results">{{ match.risultato_squadra_1 }} - {{ match.risultato_squadra_2 }}</div>
                <div class="squad"><span>{{ match.nome_squadra_2 }}</span></div>
                <div class="logo"><img :src="getImage(match.nome_squadra_2)" :alt="match.nome_squadra_2"></div>
            </div>
        </div>
        <div v-if="match.categoria_partita_2 === category">
            <div class="row margin-bottom-1" :class=getBackgroundMatch(match.categoria_partita_2) >
                <div class="logo"><img :src="getImage(match.nome_squadra_3)" :alt="match.nome_squadra_3"></div>
                <div class="hour"><p><strong>{{ getCampo1() }} - {{ getOrario19() }}</strong></p></div>
                <div class="squad"><span>{{ match.nome_squadra_3 }}</span></div>
                <div class="results">{{ match.risultato_squadra_3 }} - {{ match.risultato_squadra_4 }}</div>
                <div class="squad"><span>{{ match.nome_squadra_4 }}</span></div>
                <div class="logo"><img :src="getImage(match.nome_squadra_4)" :alt="match.nome_squadra_4"></div>
            </div>
        </div>
        <div v-if="match.categoria_partita_3 === category">
            <div class="row margin-bottom-1" :class=getBackgroundMatch(match.categoria_partita_3) >
                <div class="logo"><img :src="getImage(match.nome_squadra_5)" :alt="match.nome_squadra_5"></div>
                <div class="hour"><p><strong>{{ getCampo2() }} - {{ getOrario18() }}</strong></p></div>
                <div class="squad"><span>{{ match.nome_squadra_5 }}</span></div>
                <div class="results">{{ match.risultato_squadra_5 }} - {{ match.risultato_squadra_6 }}</div>
                <div class="squad"><span>{{ match.nome_squadra_6 }}</span></div>
                <div class="logo"><img :src="getImage(match.nome_squadra_6)" :alt="match.nome_squadra_6"></div>
            </div>
        </div>
        <div v-if="match.categoria_partita_4 === category">
            <div class="row margin-bottom-1" :class=getBackgroundMatch(match.categoria_partita_4) >
                <div class="logo"><img :src="getImage(match.nome_squadra_7)" :alt="match.nome_squadra_7"></div>
                <div class="hour"><p><strong>{{ getCampo2() }} - {{ getOrario19() }}</strong></p></div>
                <div class="squad"><span>{{ match.nome_squadra_7 }}</span></div>
                <div class="results">{{ match.risultato_squadra_7 }} - {{ match.risultato_squadra_8 }}</div>
                <div class="squad"><span>{{ match.nome_squadra_8 }}</span></div>
                <div class="logo"><img :src="getImage(match.nome_squadra_8)" :alt="match.nome_squadra_8"></div>
            </div>
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
    position: relative;

    .logo {
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            scale: 1.5;
        }
    }

    .squad {
        width: calc((100% - 100px) / 3);
        text-align: center;
    }

    .hour {
        text-align: center;
        width: 100%;
        position: absolute;
        top: 0;
    }
}
</style>