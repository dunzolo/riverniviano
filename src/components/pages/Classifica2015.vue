<script>
import { store } from '../../store.js';

import AppHeader from '../AppHeader.vue';

export default {
    components: {
        AppHeader
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
        }
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">TORNEO MICHELE PEZZA</h1>
        <div class="container">
            <div class="row" >
                <div class="category bg-light-blue"><span>PRIMI CALCI 2015</span></div>
            </div>
            <div class="row">
                <div class="col-2"><span></span></div>
                <div class="col-5"><span>NOME</span></div>
                <div class="col-1"><span>GF</span></div>
                <div class="col-1"><span>GS</span></div>
                <div class="col-1"><span>PT</span></div>
            </div>
            <div class="row">
                <div class="col-2">
                    <div class="logo">
                        <img :src="getImage('RIVERNIVIANO')" alt="">
                    </div>
                </div>
                <div class="col-5"><span>RIVERNIVIANO</span></div>
                <div class="col-1"><span>10</span></div>
                <div class="col-1"><span>8</span></div>
                <div class="col-1"><span>3</span></div>
            </div>
            <div class="row">
                <div class="col-2">
                    <div class="logo">
                        <img :src="getImage('RIVERNIVIANO')" alt="">
                    </div>
                </div>
                <div class="col-5"><span>RIVERNIVIANO</span></div>
                <div class="col-1"><span>10</span></div>
                <div class="col-1"><span>8</span></div>
                <div class="col-1"><span>3</span></div>
            </div>
            <div class="row">
                <div class="col-2">
                    <div class="logo">
                        <img :src="getImage('RIVERNIVIANO')" alt="">
                    </div>
                </div>
                <div class="col-5"><span>RIVERNIVIANO</span></div>
                <div class="col-1"><span>10</span></div>
                <div class="col-1"><span>8</span></div>
                <div class="col-1"><span>3</span></div>
            </div>
            <div class="row">
                <div class="col-2">
                    <div class="logo">
                        <img :src="getImage('RIVERNIVIANO')" alt="">
                    </div>
                </div>
                <div class="col-5"><span>RIVERNIVIANO</span></div>
                <div class="col-1"><span>10</span></div>
                <div class="col-1"><span>8</span></div>
                <div class="col-1"><span>3</span></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 12px;
}

.title {
    font-family: 'Bangers';
    color: white;
    width: 100%;
    text-align: center;
    font-size: 40px;
    margin-bottom: 1rem;
}

.container {
    width: 90%;
    margin: 0 auto 1rem;

    .row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        text-align: center;
        // border-radius: 100px;
        background-color: white;

        .category {
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
}
</style>