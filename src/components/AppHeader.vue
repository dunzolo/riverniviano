<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
            navOpen: false,
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
            window.pageYOffset > 0 ? this.showNavbar = true : this.showNavbar = false;
        }
    },
}
</script>

<template lang="">
    <header :class="showNavbar ? 'sticky' : ''">
        <div class="logo">
            <img src="/riverniviano.png" alt="logo">
        </div>
        <div id="sidemenu">
            <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                <span class="top" :class="showNavbar ? 'color-black' : ''"></span>
                <span class="mid" :class="showNavbar ? 'color-black' : ''"></span>
                <span class="bottom" :class="showNavbar ? 'color-black' : ''"></span>
            </button>
            <transition name="translateX">
                <nav v-show="navOpen">
                <div class="sidemenu__wrapper">
                    <ul class="sidemenu__list">
                        <li class="sidemenu__item"><router-link to="/riverniviano/">Home</router-link></li>
                        <li class="sidemenu__item"><router-link to="/riverniviano/contacts">Contacts</router-link></li>
                        <li class="sidemenu__item"><router-link to="/riverniviano/classifica2015">Classifica 2015</router-link></li>
                        <li class="sidemenu__item"><router-link to="/riverniviano/classifica2014">Classifica 2014</router-link></li>
                        <li class="sidemenu__item"><router-link to="/riverniviano/classifica2013">Classifica 2013</router-link></li>
                        <li class="sidemenu__item"><router-link to="/riverniviano/classifica2012">Classifica 2012</router-link></li>
                    </ul>
                </div>
                </nav>
            </transition>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.sticky {
    backdrop-filter: blur(10px);
    transition: all .4s ease;

    // background-color: rgba(0, 106, 255, 0.6);
    // box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
}

header {
    height: 70px;
    width: 100%;
    // background-color: $light_blue;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: sticky;
    z-index: 1;
    top: 0;


    .logo {
        height: 100%;

        img {
            height: 100%;
        }
    }

    #sidemenu {
        nav {
            width: 100vw;
            height: 100vh;
            // height: calc(100% - #{$headerHeight} - #{$footerHeight});
            // background: rgba(128, 128, 128);

            background-image: url('/public/pexels-el??na-ar??ja-3377405.jpg'); //cambiato path
            backdrop-filter: blur(10px);
            background-size: cover;
            // background-size: contain;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 99;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            // box-shadow: 2px 0 3px$grey-6;
            // overflow-y: scroll;

        }

        .sidemenu {
            &__btn {
                display: block;
                width: 50px;
                height: 50px;
                background: transparent;
                border: none;
                position: relative;
                z-index: 100;
                appearance: none;
                cursor: pointer;
                outline: none;

                span {
                    display: block;
                    width: 20px;
                    height: 3px;
                    margin: auto;
                    background: white;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    transition: all .4s ease;

                    &.top {
                        transform: translateY(-8px);
                    }

                    &.bottom {
                        transform: translateY(8px);
                    }

                    &.color-black {
                        transition: all 1s ease;

                        background-color: black;
                    }
                }

                &.active {
                    .top {
                        transform: rotate(-45deg);
                    }

                    .mid {
                        transform: translateX(-20px) rotate(360deg);
                        opacity: 0;
                    }

                    .bottom {
                        transform: rotate(45deg);
                    }
                }

            }

            &__list {
                padding-top: 50px;
                list-style: none;
                padding: 0;
                margin: 0;
                text-align: center;
            }

            &__item {
                a {
                    text-decoration: none;
                    line-height: 1.6em;
                    font-size: 1.6em;
                    padding: .5em;
                    display: block;
                    color: white;
                    transition: .4s ease;

                    &:hover {
                        background: lightgrey;
                        color: dimgrey;
                    }

                    &:active {
                        background: lightgrey;
                        color: dimgrey;
                    }
                }
            }
        }
    }

    .translateX-enter {
        transform: translateX(-200px);
        opacity: 0;
    }

    .translateX-enter-active,
    .translateX-leave-active {
        transform-origin: top left 0;
        transition: .4s ease;
    }

    .translateX-leave-to {
        transform: translateX(-200px);
        opacity: 0;
    }
}
</style>