<script>
import { store } from '../../store.js';

import AppHeader from '../AppHeader.vue';
import AppCategories from '../AppCategories.vue';
import AppCalendar from '../AppCalendar.vue';

export default {
    components: {
        AppHeader,
        AppCategories,
        AppCalendar
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
        },
        startFrom(array, index) {
            //In base all'indice, ritorna array filtrato
            return array.slice(index);
        }

    },
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">TORNEO MICHELE PEZZA</h1>
        <AppCategories/>
        <div class="container">
            <AppCalendar v-for="(item, index) in this.startFrom(store.calendar, 0) " :key="index" :match="item" /> //TODO INCREMENTARE
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    margin: 0 auto;
    padding-bottom: 1rem;
}
</style>