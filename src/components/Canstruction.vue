<template>
    <div class="w-ful h-screen flex md:flex-row flex-col-reverse justify-around items-center px-3">
        <div class="h-full w-2/6 hidden md:block">
            <img src="../assets/images/high-rise-building-glass-facade-with-reflection-surrounding-buildings.jpg"
                alt="IMAGE" class="box-border h-full w-full object-cover">
        </div>
        <!-- text and image box -->
        <div class="md:w-3/6 flex h-80 flex-col justify-center items-start text-black">
            <div class="text-left py-2">
                <p class="text-xs md:text-sm font-Oswald">We are:</p>
                <p class="text-2xl md:text-4xl font-Oswald">Singapore's preferred <span class="text-red-500">Construction and
                        Maintenance Company</span></p>
                <p class="text-xs md:text-sm">All Angles Solutions is known for our innovative design and our ability to do anything
                    from rigging for
                    construction, to pulling cables
                    for electrical power lines, to rigging for offshore oil rigs. Our products are made from high-quality
                    materials that are operationally sound to take on every job.</p>
            </div>
            <div class="md:w-11/12 w-full my-8 flex flex-col ">
                <!-- image box -->
                <div class="w-full flex items-center justify-between flex-row py-4">
                    <div class="my-4"><img class="w-40 lg:w-72 h-full rounded-lg" src="../assets/images/C_image/close-up-construction-site-excavator.jpg" alt="IMAGE"><p class="text-xs font-Lato">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptatem!</p></div>
                    <div class="my-4"><img class="w-40 lg:w-72 h-full rounded-lg" src="../assets/images/C_image/excavator-construction-machine.jpg" alt="IMAGE"><p class="text-xs font-Lato">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptatem!</p></div>
                </div>
                <!-- image box -->
                <div class="w-full flex items-center justify-between flex-row ">
                    <div class="my-4"><img class="w-40 lg:w-72 h-full rounded-lg" src="../assets/images/C_image/three-factory-workers-safety-hats-discussing-manufacture-plan (1).jpg" alt="IMAGE"><p class="text-xs font-Lato">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptatem!</p></div>
                    <div class="my-4"><img class="w-40 lg:w-72 h-full rounded-lg" src="../assets/images/C_image/worker-blue-construction-helmet.jpg" alt="IMAGE"><p class="text-xs font-Lato">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, voluptatem!</p></div>
                </div>
                <FastButton text="book now" color="red"/>
            </div>
            
        </div>
    </div>
</template>
<script setup>
import FastButton from './FastButton.vue';


</script>