<template>
    <div
        class="h-screen w-full bg-Consultion-background bg-cover bg-center bg-fixed flex flex-col justify-center items-center">
        <div class="btn btn-ghost w-4/5 md:w-72">
            <span class=" font-Oswald text-2xl text-blue-100">Schedule a</span>
            <span class=" font-Oswald text-2xl text-red-500">Consultion</span>
        </div>
        <div class="w-4/5 md:w-1/3">
            <form class="w-full md:flex md:flex-col">
                <input class="my-2 rounded-sm w-full lg:w-full py-1.5 px-1" type="text" name="#"
                    placeholder="enter your number">
                <input class="my-2 rounded-sm w-full lg:w-full py-1.5 px-1" type="text" name="#"
                    placeholder="enter your full name">
                <textarea placeholder="Bio" class="my-4 textarea textarea-bordered textarea-md w-full lg:w-full"></textarea>
            </form>
            <button class="btn btn-block text-white btn-warning">Send</button>
        </div>
</div></template>