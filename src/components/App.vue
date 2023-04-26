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
    },
    animation() {
      setTimeout(() => {
        store.is_animated = false;
      }, 4000)
    }
  },
  created() {
    this.loader();
    this.animation();
  },
}
</script>
    
<template lang="">
  <div>
    <div v-if="store.is_loading" class="animated">
      <!-- <img class="img-fluid" src="/public/others/loader-mobile.gif" alt=""> -->
      <div class="img-opacity">
        <img class="img-background animate__animated" :class="store.is_animated ? 'animate__zoomIn' :  'animate__fadeOut'" src="/public/riverniviano.png" alt="">
        <!-- <img class="img-background animate__animated" src="/public/riverniviano.png" alt=""> -->
      </div>
      <div class="img-fluid">
        <img class="animate__animated" :class="store.is_animated ? 'animate__fadeInLeft animate__delay-1s' : 'animate__fadeOutLeft'" src="/public/riverniviano.png" alt="">
        <!-- <img class="animate__animated" src="/public/riverniviano.png" alt=""> -->
      </div>
      <div class="text">
        <div class="d-flex animate__animated" :class="store.is_animated ? 'animate__fadeInRight animate__delay-1s' : 'animate__fadeOutRight'">
        <!-- <div class="animate__animated"> -->
          <h1 class="title">MEMORIAL</h1>
          <h1 class="title">MICHELE</h1>
          <h1 class="title">PEZZA</h1>
        </div>
        <div>
          <h2 class="title animate__animated" :class="store.is_animated ? 'animate__lightSpeedInRight animate__delay-2s' : 'animate__lightSpeedOutRight animate__fast'">
            dal <span class="green">2</span> al <span class="green">26</span> maggio 2023
          </h2>
        </div>
      </div>
    </div>
    <div v-else class="animate__animated animate__fadeIn">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss">
@use '../style/generals.scss';

.animated {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .img-opacity {
    opacity: 0.1;

    .img-background {
      width: 100%;
      height: 100%;
      // overflow: hidden;
      scale: 1.5;
      position: absolute;
      object-fit: cover;
      object-position: 60%;
      top: 0;
      left: -15%;
    }
  }

  .text {
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    // border: 1px solid red;

    .d-flex {
      display: flex;
    }

    .title {
      font-family: 'Bangers';
      color: white;
      letter-spacing: .2rem;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      width: 100%;
      font-size: 8vmin;
      padding-right: 1rem;
      // margin-bottom: 1rem;
    }
  }


}


.img-fluid {
  width: 50vmin;
  height: 50vmin;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 15%;
  transform: translateY(-50%);
  // border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    // border: 1px solid red;
    scale: 1.5;

  }

}

@media screen and (max-width: 991px) {
  .text .d-flex {
    flex-direction: column;
  }

  .img-fluid {
    left: 0;
  }

  .animated .text {
    left: 50%;
    width: 50%;

    .animate__animated {
      margin-bottom: 1rem;
      padding-right: 0;

    }

    .title {
      font-size: 7vmin;
      margin-bottom: 0;
    }

  }


}
</style>
