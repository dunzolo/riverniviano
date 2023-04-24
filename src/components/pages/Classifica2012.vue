<script>
import { store } from '../../store.js';
import pulcini_2012 from '../../datasets/pulcini_2012.json'

import AppHeader from '../AppHeader.vue';
import AppGroups from '../AppGroups.vue';
import AppMatch from '../AppMatch.vue';

export default {
    components: {
        AppHeader,
        AppGroups,
        AppMatch
    },
    data() {
        return {
            store,
            items: pulcini_2012,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        this.handleScroll();
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleScroll() {
            window.scrollTo(0, 0);
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">MEMORIAL MICHELE PEZZA</h1>
        <div class="container">
            <div class="row" >
                <div class="category bg-green"><span>PULCINI 2012</span></div>
            </div>
            <div class="container-groups">
                <AppGroups v-for="(item, index) in items.classifica" :key="index" :groups="item" :category="items.categoria" :gironi="items.gironi" :elem="index"/>
            </div>
            <div class="container-matches" v-if="this.window.width < 576">
                <AppMatch v-for="(item, index) in store.calendario" :key="index" :match="item" :category="items.categoria" :elem="0"/>
            </div>
            <div class="container-matches" v-if="this.window.width >= 576">
                <div class="container-matches-first">
                    <AppMatch v-for="(item, index) in store.calendario" :key="index" :match="item" :category="items.categoria" :elem="1"/>
                </div>
                <div class="container-matches-second">
                    <AppMatch v-for="(item, index) in store.calendario" :key="index" :match="item" :category="items.categoria" :elem="2"/>
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

.title {
    font-family: 'Bangers';
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    letter-spacing: .1rem;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.container {
    width: 90%;
    margin: 0 auto 1rem;

    .row {
        width: 100%;
        // display: flex;
        // align-items: center;
        // justify-content: space-around;
        // flex-wrap: wrap;
        // text-align: center;
        // border-radius: 100px;

        .category {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.10rem 0;
        }
    }
}
</style>