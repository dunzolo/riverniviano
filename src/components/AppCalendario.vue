<script>
import { store } from '../store.js'

export default {
    props: {
        match: Object,
    },
    data() {
        return {
            store
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
        }
    }
}
</script>

<template lang="">
    <div class="margin-top-1">
        <div class="day"><h4>{{ match.giorno }}</h4></div>
        <div class="container">
            <div class="margin-bottom-1" v-for="(item, index) in match.match" :key="index">
                <div class="row" :class=getBackgroundMatch(item.categoria)>
                    <div class="col">
                        <div class="logo"><img :src="getImage(item.nome_squadra_casa)" :alt="item.nome_squadra_casa"></div>
                        <div class="squad"><span>{{ item.nome_squadra_casa }}</span></div>
                        <div class="hour">
                            <p><strong>{{ item.campo }}</strong></p>
                            <p><strong>{{ item.orario }}</strong></p>
                        </div>
                        <div class="squad"><span>{{ item.nome_squadra_ospite }}</span></div>
                        <div class="logo"><img :src="getImage(item.nome_squadra_ospite)" :alt="item.nome_squadra_ospite"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 2vmin;
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
    border-radius: 100px;

    .col {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // flex-wrap: wrap;

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


}



// @media screen and (max-width: 576px){
//     // .margin-bottom-1{
//     //     width: 100%;
//     // }
// }

@media screen and (min-width: 576px) {
    .margin-bottom-1 {
        width: 49%;
    }

    .container {
        max-width: 991px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>