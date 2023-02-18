<script>
export default {

}
</script>

<template lang="">
    <div class="margin-top-1">
        <div class="day"><h4>Martedì 9 maggio 2023</h4></div>
        <div class="row bg-yellow">
            <div class="logo"><img src="Fc_RiverNiviano_Logo.png" alt=""></div>
            <div class="squad"><span>RIVERNIVIANO</span></div>
            <div class="hour">
                <p><strong>CAMPO 1</strong></p>
                <p><strong>18:00</strong></p>
            </div>
            <div class="squad"><span>GOTICO</span></div>
            <div class="logo"><img src="gotico.png" alt=""></div>
        </div>
        <div class="row bg-yellow margin-top-1">
            <div class="logo"><img src="vigolzone.png" alt=""></div>
            <div class="squad"><span>VIGOLZONE</span></div>
            <div class="hour">
                <p><strong>CAMPO 1</strong></p>
                <p><strong>19:00</strong></p>
            </div>
            <div class="squad"><span>VIGOR CHERO</span></div>
            <div class="logo"><img src="vigorchero.png" alt=""></div>
        </div>
        <div class="row bg-light-blue margin-top-1">
            <div class="logo"><img src="/Fc_RiverNiviano_Logo.png" alt=""></div>
            <div class="squad"><span>RIVERNIVIANO VERDE</span></div>
            <div class="hour">
                <p><strong>CAMPO 2</strong></p>
                <p><strong>18:00</strong></p>
            </div>
            <div class="squad"><span>GOTICO</span></div>
            <div class="logo"><img src="gotico.png" alt=""></div>
        </div>
        <div class="row bg-light-blue margin-top-1">
            <div class="logo"><img src="bobbiese.png" alt=""></div>
            <div class="squad"><span>BOBBIESE</span></div>
            <div class="hour">
                <p><strong>CAMPO 2</strong></p>
                <p><strong>19:00</strong></p>
            </div>
            <div class="squad"><span>PODENZANO</span></div>
            <div class="logo"><img src="podenzano.png" alt=""></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span,
p {
    font-size: 12px;
}

h4 {
    color: white
}

.day {
    width: 100%;
    // border: 1px solid black;
    text-align: center;
    padding: 0.10rem 0;
}

.row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 100px;


    .logo {
        height: 50px;
        width: 50px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            scale: 1.5;
        }
    }

    .squad {
        width: calc((100% - 100px) / 3);
        text-align: center;
    }

    .hour {
        text-align: center;
    }
}
</style>