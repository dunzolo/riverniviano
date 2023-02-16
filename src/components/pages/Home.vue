<script>
import AppHeader from '../AppHeader.vue';
import AppCategories from '../AppCategories.vue';
import App2023_05_02 from '../days/App2023_05_02.vue';
import App2023_05_03 from '../days/App2023_05_03.vue';
import App2023_05_04 from '../days/App2023_05_04.vue';


export default {
    components: {
        AppHeader,
        AppCategories,
        App2023_05_02,
        App2023_05_03,
        App2023_05_04,
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <div class="container">
            <AppCategories/>
            <App2023_05_02/>
            <App2023_05_03/>
            <App2023_05_04/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 90%;
    margin: 2rem auto;
}
</style>