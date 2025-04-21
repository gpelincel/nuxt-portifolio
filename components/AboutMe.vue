<template>
    <div id="about" class="grid lg:grid-cols-2 lg:gap-0 gap-6 items-center justify-items-center lg:px-0 px-4">
        <div class="rounded-full border border-2 border-white p-2">
            <img class="rounded-full w-64 h-64 object-cover bottom-0" src="~/assets/img/perfil-bg-gray.png" alt="">
        </div>
        <div class="text-justify lg:pr-12 text-lg">
            <h1 class="font-semibold uppercase text-5xl">Sobre mim</h1>
            <hr class="my-4">
            <p>Desenvolvedor Fullstack com experiência em sistemas web e aplicativos mobile. Atuei na Global Data como estagiário e como júnior na RPV Tecnologia. Graduado em Desenvolvimento de Sistemas e cursando Engenharia de Computação, destaco-me pela adaptabilidade, resolução de problemas e trabalho em equipe.</p>
        </div>
    </div>
    <div class="flex flex-col gap-16 mt-8">
        <Academics></Academics>
        <Work></Work>
    </div>
</template>