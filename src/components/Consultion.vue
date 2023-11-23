<script setup>
import FastButton from './FastButton.vue';
</script>
<template>
    <div class="h-screen w-full bg-Consultion-background bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
        <div class="">
            <span class=" font-Oswald px-1 text-3xl text-blue-300">Schedule a</span>
            <span class=" font-Oswald px-1 text-4xl text-red-500">Consultion</span>
        </div>
        <div class="w-4/5 md:w-1/3">
            <form class=" md:flex md:flex-col">
                <input class="my-2 rounded-sm w-72 lg:w-full py-1.5 px-1" type="text" name="#" placeholder="enter your number">
                <input class="my-2 rounded-sm w-72 lg:w-full py-1.5 px-1" type="text" name="#" placeholder="enter your full name">
                <textarea placeholder="Bio" class="my-4 textarea textarea-bordered textarea-md w-72 lg:w-full"></textarea>
            </form>
            <button class="btn btn-block text-white btn-error">Send</button>
        </div>
    </div>
</template>