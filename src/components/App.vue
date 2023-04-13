<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store
    }
  },
  methods: {
    loader() {
        setTimeout(() => {
          store.is_loading = false;
        }, 5000)
      }
  },
  created() {
    this.loader();
  },
}
</script>
    
<template lang="">
  <div>
    <div v-if="store.is_loading">
      <!-- <img class="img-fluid loader" src="/public/riverniviano.png" alt=""> -->
      <img class="img-fluid" src="/public/others/loader-mobile.gif" alt="">
      <!-- <div class="container">
        <span class="loader"></span>
      </div> -->
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
    <!-- <div class="container">
  <div class="intro"> -->

    <!-- <h2>Welcome</h2> -->
  <!-- </div> -->
  <!-- <main> -->
    <!-- <router-view></router-view> -->
    <!-- <div class="content"> -->

      <!-- <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p> -->
    <!-- </div> -->
  <!-- </main>

</div>-->
  </div>
</template>

<style lang="scss">
@use '../style/generals.scss';

.img-fluid{
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  // top: 0;
  // bottom: 0;
  // right: 0;
  // left: 0;
  // margin: auto;
}

.loader {
  // position: relative;
  // width: 40px;
  // height: 60px;
  animation: heartBeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}

// .loader:before,
// .loader:after {
//   content: "";
//   background: #ff3d00 ;
//   width: 40px;
//   height: 60px;
//   border-radius: 50px 50px 0 0;
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   transform: rotate(45deg);
//   transform-origin: 50% 68%;
//   box-shadow: 5px 4px 5px #0004 inset;
// }
// .loader:after {
//   transform: rotate(-45deg);
// }

@keyframes heartBeat {
  0% { transform: scale(0.95) }
  5% { transform: scale(1.1) }
  39% { transform: scale(0.85) }
  45% { transform: scale(1) }
  60% { transform: scale(0.95) }
  100% { transform: scale(0.9) }
}

@media screen and (max-width: 576px) {
  .img-fluid{
    object-fit: cover;
    // object-position: 3% 3%;
    // left: 20%;
  }
}

</style>
