<script>
import { store } from '../store.js'

const STORAGE_KEY = 'storage-key'

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
        },
        isActive(id) {
            if (store.storage != id) {
                store.storage = id;
            }
            else {
                store.storage = null;
            }
        },
        getBackground(category) {
            switch (category) {
                case '2012':
                    if (category == store.storage || store.storage == null)
                        category = 'bg-green';
                    else
                        category = 'not-selected';
                    break;
                case '2013':
                    if (category == store.storage || store.storage == null)
                        category = 'bg-yellow'
                    else
                        category = 'not-selected';
                    break;
                case '2014':
                    if (category == store.storage || store.storage == null)
                        category = 'bg-light-brown'
                    else
                        category = 'not-selected';
                    break;
                case '2015':
                    if (category == store.storage || store.storage == null)
                        category = 'bg-light-blue'
                    else
                        category = 'not-selected';
                    break;
                case 'Esordienti':
                    if (category == store.storage || store.storage == null)
                        category = 'bg-red'
                    else
                        category = 'not-selected';
                    break;
                default:
                    break;
            }
            return category
        },
    },
}
</script>

<template lang="">
    <div :class="showNavbar ? 'sticky' : ''">
    <div class="container">
            <div class="row" >
                <div class="category bg-green" :class="getBackground('2012')">
                    <button id="2012" type="button" @click="isActive($event.target.id)">
                        <!-- <span>PULCINI 2012</span> -->
                        PULCINI 2012
                    </button>
                </div>
                <div class="category bg-yellow" :class="getBackground('2013')">
                    <button id="2013" type="button" @click="isActive($event.target.id)">
                        <!-- <span>PULCINI 2012</span> -->
                        PULCINI 2013
                    </button>
                    <!-- <span>PULCINI 2013</span> -->
                </div>
                <div class="category bg-light-brown" :class="getBackground('2014')">
                    <button id="2014" type="button" @click="isActive($event.target.id)">
                        <!-- <span>PULCINI 2012</span> -->
                        PRIMI CALCI 2014
                    </button>
                    <!-- <span>PRIMI CALCI 2014</span> -->
                </div>
                <div class="category bg-light-blue" :class="getBackground('2015')">
                    <button id="2015" type="button" @click="isActive($event.target.id)">
                        <!-- <span>PULCINI 2012</span> -->
                        PRIMI CALCI 2015
                    </button>
                    <!-- <span>PRIMI CALCI 2015</span> -->
                </div>
                <div class="category bg-red" :class="getBackground('Esordienti')">
                    <button id="Esordienti" type="button" @click="isActive($event.target.id)">
                        <!-- <span>PULCINI 2012</span> -->
                        ESORDIENTI
                    </button>
                    <!-- <span>ESORDIENTI</span> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.not-selected {
    background-color: grey;
}

.sticky {
    backdrop-filter: blur(10px);
    // background-image: url('/public/background/TECHSTORE.jpg');
    // background-size: cover;
    // background-position: center;
    background-color: rgba(3, 84, 160, 0.7);
    padding-bottom: 1rem;
    position: sticky;
    // z-index: 1;
    top: 70px;
    // box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
}

span,
p {
    // font-size: 12px;
    font-size: 2.8vmin;
}

.container {
    width: 90%;
    max-width: 991px;
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

        button {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 2.8vmin;
        }

    }
}

@media screen and (min-width:576px) {

    span,
    p {
        font-size: 2vmin;
    }

    .row .category button {
        font-size: 2vmin;

    }
}
</style>