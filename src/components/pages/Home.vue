<script>
import { store } from '../../store.js';

import AppHeader from '../AppHeader.vue';
import AppCategories from '../AppCategories.vue';
import AppCalendario from '../AppCalendario.vue';
import AppMatch from '../AppMatch.vue';

export default {
    components: {
        AppHeader,
        AppCategories,
        AppCalendario,
        AppMatch
    },
    data() {
        return {
            store,
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
        <h1 class="title">MEMORIAL MICHELE PEZZA</h1>
        <AppCategories/>
        <div class="container">
            <!-- stampo tutte le giornate fino alle fasi finali -->
            <!-- all'interno del startFrom indico l'indice da cui partire a ciclare l'array di oggetti -->
            <AppCalendario v-for="(item, index) in this.startFrom(store.calendario.slice(0, -1), 10) " :key="index" :match="item"/>

            <!-- stampo partite fasi finali -->
            <AppCalendario v-for="(item, index) in store.calendario_fasi_finali" :key="index" :match="item"/>
            
            <!-- stampo solo la giornata finale -->
            <AppCalendario v-for="(item, index) in store.calendario.slice(-1)" :key="index" :match="item"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-family: 'Bangers';
    color: white;
    letter-spacing: .1rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    width: 100%;
    text-align: center;
    font-size: 5vmin;
    margin-bottom: 1rem;
}

.container {
    width: 90%;
    max-width: 991px;
    margin: 0 auto;
    padding-bottom: 1rem;
}

@media screen and (max-width:576px) {
    .title {
        font-size: 8vmin;
    }
}
</style>