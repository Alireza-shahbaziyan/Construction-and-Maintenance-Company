<template>
    <div class="">
        <nav class="bg-zinc-800 absolute w-full">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../assets/a-logo-zip-file/a-high-resolution-logo-transparent.png" alt="IAMGE" class="w-4"/>
                    <!-- <button
                        class="font-Oswald text-xl uppercase border border-zinc-800 p-1 rounded-md hover:text-red-500">persian
                    </button> -->
                </a>
                <button @click="showMenu()" data-collapse-toggle="navbar-default" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 bg-zinc-700  text-gray-400 hover:bg-zinc-600 focus:ring-gray-600"
                    aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div :class="[Open ? 'block' : 'hidden']" class="w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="font-bold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                        <li v-for="item in navlinks" :key="item.id">
                            <a :href="item.link"
                                class="hover:text-red-500 block py-2 px-3 text-white  rounded md:bg-transparent "
                                aria-current="page">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { ref } from 'vue'
// methode
export default {
    data() {
        return {

        }
    },
    setup() {
        const Open = ref(false)
        let navlinks = [
            { id: 0, name: "Home", link: "#" },
            { id: 1, name: "About Us", link: "#" },
            { id: 2, name: "Shop", link: "#" },
            { id: 3, name: "Protfollo", link: "#" },
            { id: 4, name: "Contact", link: "#" },
        ]
        function showMenu() {
            Open.value = !Open.value
        }
        return { navlinks, Open, showMenu }
    }
}
</script>