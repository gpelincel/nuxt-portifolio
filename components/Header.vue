<template>
    <header class="p-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center justify-center font-semibold gap-2 hover:scale-104 transition-transform">
                <i class="fi fi-rr-square-terminal text-3xl mb-[-5px]"></i>
                <h1 class="uppercase text-xl">Gabriel Pelincel</h1>
            </div>

            <!-- Botão hamburger (mobile) -->
            <button class="lg:hidden text-3xl focus:outline-none" @click="isOpen = !isOpen" aria-label="Abrir menu">
                <i v-if="!isOpen" class="fi fi-rr-menu-burger"></i>
                <i v-else class="fi fi-rr-cross"></i>
            </button>

            <!-- Menu desktop -->
            <nav class="hidden lg:flex items-center gap-2">
                <ul class="navbar flex gap-6 w-full uppercase font-semibold text-xl">
                    <li><a href="">Home</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contacts">Contatos</a></li>
                </ul>
                <p class="text-5xl">|</p>
                <ul class="flex gap-3 text-2xl mb-[-5px]">
                    <li><a target="_blank" href="https://www.linkedin.com/in/gabriel-pelincel/"><i class="fi fi-brands-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://github.com/gpelincel"><i class="fi fi-brands-github"></i></a></li>
                </ul>
            </nav>
        </div>

        <!-- Menu mobile -->
        <div v-if="isOpen" class="lg:hidden mt-4 space-y-4 text-center">
            <ul class="flex flex-col gap-4 uppercase font-semibold text-lg">
                <li><a href="">Home</a></li>
                <li><a href="#about">Sobre mim</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contacts">Contatos</a></li>
            </ul>
            <div class="border-t pt-4">
                <ul class="flex justify-center gap-6 text-2xl">
                    <li><a target="_blank" href="https://www.linkedin.com/in/gabriel-pelincel/"><i class="fi fi-brands-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://github.com/gpelincel"><i class="fi fi-brands-github"></i></a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>