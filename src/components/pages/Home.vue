<script>
import AppHeader from '../AppHeader.vue';
import AppCategories from '../AppCategories.vue';
import App2023_05_02 from '../days/App2023_05_02.vue';
import App2023_05_03 from '../days/App2023_05_03.vue';
import App2023_05_04 from '../days/App2023_05_04.vue';
import App2023_05_05 from '../days/App2023_05_05.vue';
import App2023_05_08 from '../days/App2023_05_08.vue';
import App2023_05_09 from '../days/App2023_05_09.vue';
import App2023_05_11 from '../days/App2023_05_11.vue';


export default {
    components: {
        AppHeader,
        AppCategories,
        App2023_05_02,
        App2023_05_03,
        App2023_05_04,
        App2023_05_05,
        App2023_05_08,
        App2023_05_09,
        App2023_05_11,
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">TORNEO MICHELE PEZZA</h1>
        <AppCategories/>
        <div class="container">
            <App2023_05_02/>
            <App2023_05_03/>
            <App2023_05_04/>
            <App2023_05_05/>
            <App2023_05_08/>
            <App2023_05_09/>
            <App2023_05_11/>
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