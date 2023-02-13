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
            <div class="row margin-top-1">
                <div class="day">
                    <h4>Martedì 2 maggio 2023</h4>
                </div>
                <div class="row">
                    <div class="field">
                        <span><strong>CAMPO 1</strong></span>
                    </div>
                    <div class="matches">
                        <div class="row">
                            <div class="col-1">
                                <p><strong>ORA</strong></p>
                                <p>18:00</p>
                                <p>19:00</p>
                                <p>20:00</p>
                            </div>
                            <div class="col-4">
                                <p><strong>SQUADRA 1</strong></p>
                                <p class="bg-green">RIVERNIVIANO</p>
                                <p class="bg-green">BOBBIESE</p>
                                <p></p>
                            </div>
                            <div class="col-4">
                                <p><strong>SQUADRA 2</strong></p>
                                <p class="bg-green">VIGOLZONE</p>
                                <p class="bg-green">LUGAGNANESE</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="field">
                        <span><strong>CAMPO 2</strong></span>
                    </div>
                    <div class="matches">
                        <div class="row">
                            <div class="col-1">
                                <p><strong>ORA</strong></p>
                                <p>18:00</p>
                                <p>19:00</p>
                                <p>20:00</p>
                            </div>
                            <div class="col-4">
                                <p><strong>SQUADRA 1</strong></p>
                                <p class="bg-light-brown">RIVERNIVIANO verde</p>
                                <p class="bg-light-brown">TRAVESE</p>
                                <p></p>
                            </div>
                            <div class="col-4">
                                <p><strong>SQUADRA 2</strong></p>
                                <p class="bg-light-brown">BORGONOVESE</p>
                                <p class="bg-light-brown">LUGAGNANESE</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 95%;
    // height: 500px;
    margin: 2rem auto 0;

    span,
    p {
        font-size: 12px;
    }

    .row {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

        .category {
            width: calc(100% / 5 - 3px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0.10rem 0;
        }

        .day {
            width: 100%;
            border: 1px solid black;
            text-align: center;
            padding: 0.10rem 0;
        }

        .field {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;

        }

        .matches {
            width: 80%;
            border: 1px solid black;

        }

        .col-1 {
            width: 10%;
            text-align: center;

            P {
                outline: 1px solid black;
            }

        }

        .col-4 {
            width: 45%;
            text-align: center;

            P {
                outline: 1px solid black;
            }

        }


    }
}
</style>