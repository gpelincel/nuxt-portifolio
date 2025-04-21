<template>
    <div class="relative w-10 h-10 cursor-pointer group">
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-gray-900">
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-gray-900">
        </div>
        <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1 w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300 group-hover:bg-gray-900">
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const hamburger = this.$el;
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            const middleBar = hamburger.querySelector(':nth-child(1)');
            const topBar = hamburger.querySelector(':nth-child(2)');
            const bottomBar = hamburger.querySelector(':nth-child(3)');

            if (hamburger.classList.contains('open')) {
                topBar.style.transform = 'translateY(6px) rotate(45deg)';
                middleBar.style.opacity = '0';
                bottomBar.style.transform = 'translateY(-6px) rotate(-45deg)';
            } else {
                topBar.style.transform = 'translateY(-2px) rotate(0deg)';
                middleBar.style.opacity = '1';
                bottomBar.style.transform = 'translateY(1px) rotate(0deg)';
            }
        });
    }
}
</script>

<style scoped>
/* Você pode adicionar estilos específicos do componente aqui, se necessário */
</style>