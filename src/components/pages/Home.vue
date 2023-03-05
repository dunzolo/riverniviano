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
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">TORNEO MICHELE PEZZA</h1>
        <AppCategories/>
        <div class="container">
            <AppCalendar v-for="(item, index) in store.calendar" :key="index" :match="item" />
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