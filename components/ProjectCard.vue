<script setup lang="ts">
import { NuxtLink } from '#components';

const props = defineProps<{
    title: string,
    description: string,
    link: string,
    github: string,
    image: string
}>()
</script>
<template>
    <div class="grid lg:gap-2 gap-6 lg:grid-cols-[0.75fr_1fr]">
        <div>
            <img class="object-cover h-full w-full" :src="image" alt="">
        </div>
        <div class="flex flex-col">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <p class="mb-3">{{ description }}</p>
            <div class="flex gap-2 mt-auto">
                <NuxtLink class="uppercase font-bold bg-white w-fit px-2 lg:text-lg rounded text-black cursor-pointer" target="_blank" :to="link">Acessar
                    projeto</NuxtLink>
                <NuxtLink class="uppercase font-bold bg-blue text-white w-fit px-2 lg:text-lg rounded cursor-pointer" target="_blank" :to="github">Acessar
                    repositório</NuxtLink>
            </div>
        </div>
    </div>
</template>