<script>
import { store } from '../store.js'

export default {
    props: {
        match: Object,
        category: String,
        elem: Number
    },
    data() {
        return {
            store,
            found_cat: false,
            found_gir: false,

        }
    },
    methods: {
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
        },
        printDay(){
            if(this.elem == 0 && this.match.match.some(item => item.categoria == this.category))
                return true
            else{
                
                return this.match.match.some((item) => {
                    if(item.categoria == this.category){
                        if(item.girone === this.elem)
                            return true
                    }
                });
            }
        }
    }
}
</script>

<template lang="">
    <div class="margin-top-1">
        <div class="day" v-if="printDay()">
            <h4>{{ match.giorno }}</h4>
        </div>
        <div v-for="(item, index) in match.match" :key="index">
            <div v-if="item.categoria === category">
                <div v-if="item.girone == elem" class="row margin-bottom-1" :class=getBackgroundMatch(item.categoria)>
                    <div class="logo"><img :src="getImage(item.nome_squadra_casa)" :alt="item.nome_squadra_casa"></div>
                    <div class="hour"><p><strong>{{ item.campo }} - {{ item.orario }}</strong></p></div>
                    <div class="squad"><span>{{ item.nome_squadra_casa }}</span></div>
                    <div class="results">{{ item.risultato_squadra_casa }} - {{ item.risultato_squadra_ospite }}</div>
                    <div class="squad"><span>{{ item.nome_squadra_ospite }}</span></div>
                    <div class="logo"><img :src="getImage(item.nome_squadra_ospite)" :alt="item.nome_squadra_ospite"></div>
                </div>
                <div v-if="elem == 0" class="row margin-bottom-1" :class=getBackgroundMatch(item.categoria)>
                    <div class="logo"><img :src="getImage(item.nome_squadra_casa)" :alt="item.nome_squadra_casa"></div>
                    <div class="hour"><p><strong>{{ item.campo }} - {{ item.orario }}</strong></p></div>
                    <div class="squad"><span>{{ item.nome_squadra_casa }}</span></div>
                    <div class="results">{{ item.risultato_squadra_casa }} - {{ item.risultato_squadra_ospite }}</div>
                    <div class="squad"><span>{{ item.nome_squadra_ospite }}</span></div>
                    <div class="logo"><img :src="getImage(item.nome_squadra_ospite)" :alt="item.nome_squadra_ospite"></div>
                </div>
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
        width: 100%;
        position: absolute;
        top: 0;
    }
}

@media screen and (min-width: 576px) {

    .full-container{
        display: flex;
        justify-content: space-between;
        .container{
            width: 49%;
        }
    }
}
</style>