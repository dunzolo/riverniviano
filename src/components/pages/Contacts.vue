<script>
import AppHeader from '../AppHeader.vue';

export default {
    data() {

    },
    components: {
        AppHeader
    },
}
</script>

<template lang="">
    <div>
        <AppHeader/>
        <h1 class="title">CONTATTI</h1>
        <div class="container">
            <ul>
                <li>
                    <i class="fa-solid fa-phone" style="color: #ffffff;"></i>
                    <div>
                        <span>ALBERTO ZECCA</span>
                        <span>347 036 2463</span>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-phone" style="color: #ffffff;"></i>
                    <div>
                        <span>DAVIDE ROSSI</span>
                        <span>334 56 13 152</span>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-phone" style="color: #ffffff;"></i>
                    <div>
                        <span>UGO BONGIORNO</span>
                        <span>339 433 0119</span>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-phone" style="color: #ffffff;"></i>
                    <div>
                        <span>FILIPPO SCABINI</span>
                        <span>348 013 0932</span>
                    </div>
                </li>
                <li>
                    <a href="https://instagram.com/fcd_riverniviano?igshid=MTIzZWQxMDU=">
                        <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                    </a>
                    <div>
                        <a href="https://instagram.com/fcd_riverniviano?igshid=MTIzZWQxMDU=">
                            <span>fcd_riverniviano</span>
                        </a>
                    </div>
                </li>
                <li>
                    <a href="https://www.facebook.com/fcniviano">
                        <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
                    </a>
                    <div>
                        <a href="https://www.facebook.com/fcniviano">
                            <span>FCD RiverNiviano</span>
                        </a>
                    </div>
                </li>
                <li>
                    <i class="fa-solid fa-envelope" style="color: #ffffff;"></i>
                    <div>
                        <span>riverniviano@gmail.com</span>
                    </div>
                </li>
            </ul>
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
    height: 80vh;
    max-width: 991px;
    margin: 0 auto;
    padding-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style-type: none;

        li {
            display: flex;
            align-items: center;

            i {
                scale: 2;
                padding: 2rem;

            }

            div {
                display: flex;
                flex-direction: column;
                color: white;

                span {
                    font-size: 2vmin;
                }

                a {
                    text-decoration: none;
                    color: white;
                }
            }
        }
    }
}

@media screen and (max-width:576px) {
    .title {
        font-size: 8vmin;
    }

    .container ul li {

        i {
            scale: 1.5
        }

        div span {
            font-size: 3.5vmin;
        }
    }
}
</style>