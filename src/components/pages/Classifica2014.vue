<script>
import { store } from '../../store.js';

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
            store
        }
    },
    created() {
        this.handleScroll();
    },
    methods: {
        handleScroll() {
            window.scrollTo(0, 0);
        }
    },
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">TORNEO MICHELE PEZZA</h1>
        <div class="container">
            <div class="row" >
                <div class="category bg-light-brown"><span>PRIMI CALCI 2014</span></div>
            </div>
            <AppGroups v-for="(item, index) in store.primi_calci_2014.items" :key="index" :groups="item" :category="store.primi_calci_2014.categoria" :gironi="store.primi_calci_2014.gironi"/>
            <AppMatch v-for="(item, index) in store.calendar" :key="index" :match="item" :category="store.primi_calci_2014.categoria"/>
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