<script>
import { store } from '../store.js';

export default {
    props: {
        groups: Object,
        gironi: Array,
        category: String,
        elem: Number
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImage(name_squad) {
            let name_path = name_squad.toLowerCase().replaceAll(" ", "");
            return '/riverniviano/' + name_path + '.png';
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
        sortArrays(arrays) {
            return arrays.sort((a, b) => {
                if (b.punti < a.punti) return -1;
                if (b.punti > a.punti) return 1;
                return 0;
            });
        }
    }
}
</script>

<template lang="">
    <div class="row margin-top-1">
        <div class="w-100" :class="getBackgroundMatch(category)">
            <p>GIRONE {{ gironi[elem] }}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-2"><span></span></div>
        <div class="col-5"><span><strong>NOME</strong></span></div>
        <div class="col-1"><span><strong>GF</strong></span></div>
        <div class="col-1"><span><strong>GS</strong></span></div>
        <div class="col-1"><span><strong>PT</strong></span></div>
    </div>
    <div class="row" v-for="(item, index) in sortArrays(groups)" :key="index">
        <div class="col-2">
            <div class="logo">
                <img :src="getImage(item.nome_squadra)" alt="">
            </div>
        </div>
        <div class="col-5"><span>{{ item.nome_squadra }}</span></div>
        <div class="col-1"><span>{{ item.goal_fatti}}</span></div>
        <div class="col-1"><span>{{ item.goal_subiti}}</span></div>
        <div class="col-1"><span>{{ item.punti}}</span></div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 12px;
}

.row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    // border-radius: 100px;
    background-color: white;

    .w-100 {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.10rem 0;
    }

    .col-1 {
        width: 10%;
    }

    .col-2 {
        width: 20%;
        display: flex;
        justify-content: center;

    }

    .col-5 {
        width: 50%;
    }

    .logo {
        height: 50px;
        width: 50px;
        background-color: white;
        // border-radius: 50%;
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