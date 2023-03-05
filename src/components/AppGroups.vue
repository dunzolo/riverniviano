<script>
import { store } from '../store.js';

export default {
    props: {
        groups: Object,
        category: String
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getImage(name_squad) {
            let name_path = name_squad.toLowerCase().replaceAll(" ", "");
            return `/${name_path}.png`
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
    }
}
</script>

<template lang="">
    <div class="row margin-top-1">
        <div class="w-100" :class="getBackgroundMatch(category)">
            <p>GIRONE {{groups.girone}}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-2"><span></span></div>
        <div class="col-5"><span><strong>NOME</strong></span></div>
        <div class="col-1"><span><strong>GF</strong></span></div>
        <div class="col-1"><span><strong>GS</strong></span></div>
        <div class="col-1"><span><strong>PT</strong></span></div>
    </div>
    <div class="row">
        <div class="col-2">
            <div class="logo">
                <img :src="getImage(groups.nome_squadra_1)" alt="">
            </div>
        </div>
        <div class="col-5"><span>{{groups.nome_squadra_1}}</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
    </div>
    <div class="row">
        <div class="col-2">
            <div class="logo">
                <img :src="getImage(groups.nome_squadra_2)" alt="">
            </div>
        </div>
        <div class="col-5"><span>{{groups.nome_squadra_2}}</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
    </div>
    <div class="row">
        <div class="col-2">
            <div class="logo">
                <img :src="getImage(groups.nome_squadra_3)" alt="">
            </div>
        </div>
        <div class="col-5"><span>{{groups.nome_squadra_3}}</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
    </div>
    <div class="row">
        <div class="col-2">
            <div class="logo">
                <img :src="getImage(groups.nome_squadra_4)" alt="">
            </div>
        </div>
        <div class="col-5"><span>{{groups.nome_squadra_4}}</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
        <div class="col-1"><span>0</span></div>
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
    }
}
</style>