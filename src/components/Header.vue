<template>
    <div class="h-screen">
        <div class="w-full h-full lg:h-5/6 md:h-3/6  bg-header-bacground bg-right-bottom bg-cover bg-fixed">
            <div class="px-2 w-full h-full flex md:flex-row flex-col-reverse justify-around items-center bg-black/[.6]">
                <div class="md:w-2/6 flex h-80 flex-col justify-center items-start">
                    <div class="text-3xl font-Oswald md:text-3xl lg:text-5xl text-red-500 shadow-2xl capitalize w-full ">
                        {{ title }}
                    </div>
                    <div class="font-Lato text-white md:text-sm  shadow-2xl w-full my-4">
                        {{ title_dec }}
                    </div>
                    <FastButton text="Book a free 30 min consultation"/>
                </div>
                <div class="h-full w-2/6 hidden md:block">
                    <img src="../assets/images/headerbox.jpg" alt="IMAGE" class="box-border h-full w-full object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import FastButton from './FastButton.vue';
let title = "All angle Solutions";
let title_dec = "AAS is dedicated in helping ellants plan, mocuia &amp; multor all their construction engineering &amp; maintenance needs in providing practical and afficient solutions by exploring every angle possibles";
</script>