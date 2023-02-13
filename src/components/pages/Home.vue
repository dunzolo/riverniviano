<script>
import AppHeader from '../AppHeader.vue';

export default {
    components: {
        AppHeader
    }
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <div class="container">
            <div class="row">
                <div class="category bg-green">
                    <span>PULCINI<br>2012</span>
                </div>
                <div class="category bg-yellow">
                    <span>PULCINI<br>2013</span>
                </div>
                <div class="category bg-light-brown">
                    <span>PRIMI CALCI 2014</span>
                </div>
                <div class="category bg-light-blue">
                    <span>PRIMI CALCI 2015</span>
                </div>
                <div class="category bg-red">
                    <span>ESORDIENTI</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 95%;
    height: 500px;
    border: 1px solid black;
    margin: 2rem auto 0;

    .row {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .category {
            width: calc(100% / 5 - 3px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            span {
                font-size: 12px;
            }
        }
    }
}
</style>