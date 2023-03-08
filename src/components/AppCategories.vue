<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
            showNavbar: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            window.pageYOffset > 60 ? this.showNavbar = true : this.showNavbar = false;
        }
    },
}
</script>

<template lang="">
    <div :class="showNavbar ? 'sticky' : ''">
    <div class="container">
            <div class="row" >
                <div class="category bg-green">
                    <span>PULCINI 2012</span>
                </div>
                <div class="category bg-yellow">
                    <span>PULCINI 2013</span>
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
.sticky {
    backdrop-filter: blur(10px);
    // background-color: rgba(0, 106, 255, 0.6);
    padding-bottom: 1rem;
    position: sticky;
    // z-index: 1;
    top: 70px;
    // box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
}

span,
p {
    font-size: 12px;
}

.container {
    width: 90%;
    margin: 0 auto;
}

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
        padding: 0.10rem 0;

    }
}
</style>