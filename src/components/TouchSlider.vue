<template>
    <div>
        <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }" :pagination="false" :modules="modules" class="mySwiper">
        <swiper-slide><img src="../assets/images/Slider/slide1.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/Slider/slide2.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/Slider/slide3.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/Slider/slide4.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/ProductServices00001.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/ProductServices00002.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/ProductServices00003.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
        <swiper-slide><img src="../assets/images/ProductServices00004.jpg" /><div class="p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, inventore.</div></swiper-slide>
    </swiper>
    <div class="text-center w-full my-6">
        <FastButton text="show More" color="red"/>
    </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import FastButton from './FastButton.vue';

export default {
    components: {
    Swiper,
    SwiperSlide,
    FastButton
},
    setup() {
        return {
            modules: [EffectCoverflow, Pagination],
        };
    },
};
</script>
<style scoped>
#app {
    height: 100%
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}

.swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
}

.swiper-slide img {
    display: block;
    width: 100%;
}
</style>