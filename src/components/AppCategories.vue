<script>
export default {

}
</script>

<template lang="">
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
</template>

<style lang="scss" scoped>
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
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0.10rem 0;

    }
}
</style>