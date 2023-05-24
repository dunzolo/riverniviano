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
                case null:
                    category = 'd-none'
                    break;
                default:
                    break;
            }
            return category
        },
        getImage(name_squad) {
            if (name_squad != null) {
                if (name_squad.includes('PERDENTE') || name_squad.includes('VINCENTE') || name_squad.includes('GIRONE')) {
                    return '/riverniviano/to-be-defined.png';
                }
                else {
                    let name_path = name_squad.toLowerCase().replaceAll(" ", "");
                    return '/riverniviano/' + name_path + '.png';
                }
            }
            else {
                return null;
            }
        },
        printDay(match) {
            if (store.storage == null)
                return true
            else {
                if (match.match.some(item => item.categoria == store.storage))
                    return true
            }
        }
    }
}
</script>

<template lang="">
    <div class="margin-top-1">
        <div class="day" v-if="printDay(match)"><h4>{{ match.giorno }}</h4></div>
        <div class="container">
            <div class="margin-bottom-1" v-for="(item, index) in match.match" :key="index" >
                <div v-if="store.storage == item.categoria || store.storage == null">
                    <div class="row" :class=getBackgroundMatch(item.categoria)>
                        <div class="col">
                            <div class="logo"><img :src="getImage(item.nome_squadra_casa)" :alt="item.nome_squadra_casa"></div>
                            <div class="squad"><span>{{ item.nome_squadra_casa }}</span></div>
                            <div class="hour" v-if="item.risultato_squadra_casa == null">
                                <p><strong>{{ item.campo }}</strong></p>
                                <p><strong>{{ item.orario }}</strong></p>
                            </div>
                            <div class="hour" v-if="item.risultato_squadra_casa == item.risultato_squadra_ospite">
                                <p><strong>{{ item.risultato_squadra_casa }} - {{ item.risultato_squadra_ospite }}</strong></p>
                                <p><strong>{{ item.vittoria }}</strong></p>
                            </div>
                            <div class="hour" v-else>
                                <p><strong>{{ item.risultato_squadra_casa }} - {{ item.risultato_squadra_ospite }}</strong></p>
                            </div>
                            <div class="squad"><span>{{ item.nome_squadra_ospite }}</span></div>
                            <div class="logo"><img :src="getImage(item.nome_squadra_ospite)" :alt="item.nome_squadra_ospite"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 2.8vmin;
}

h4 {
    color: white
}

.d-none {
    display: none;
}

.day {
    width: 100%;
    text-align: center;
    font-size: 3.8vmin;
    padding: 0.10rem 0;
}

.row {
    width: 100%;
    border-radius: 100px;

    .col {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            height: 12.5vmin;
            // height: 50px;
            width: 12.5vmin;
            // width: 50px;
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

@media screen and (min-width: 576px) {
    .margin-bottom-1 {
        width: 49%;
    }

    span,
    p {
        font-size: 1.5vmin;
    }

    .day {
        font-size: 3vmin;
    }

    .row .col .logo {
        height: 7vmin;
        width: 7vmin;
    }

    .container {
        max-width: 991px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>