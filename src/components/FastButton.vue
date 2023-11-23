<template>
    <div class="text-white">
        <button :class="`text-${color}-500`" class="border border-red-500 p-2 uppercase font-Oswald hover:bg-red-500 hover:text-white rounded-md">
            {{ text }}
        </button>
    </div>
</template>
<script setup>
defineProps({
  text: String,
  color:String
})
</script>
