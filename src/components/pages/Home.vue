<script>
import AppHeader from '../AppHeader.vue';
import AppCategories from '../AppCategories.vue';
import App2023_05_02 from '../days/App2023_05_02.vue';

export default {
    components: {
        AppHeader,
        AppCategories,
        App2023_05_02
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <div class="container">
            <AppCategories/>
            <App2023_05_02/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 95%;
    margin: 2rem auto 0;
}
</style>