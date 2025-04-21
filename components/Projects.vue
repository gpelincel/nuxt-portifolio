<script setup>
const { data: projects } = await useFetch('/api/projects')

console.log(projects);
</script>

<template>
    <div id="projects" class="lg:px-12 px-4 my-8">
        <h1 class="font-semibold uppercase text-5xl">Meus Projetos</h1>
        <hr class="my-4">
        <div class="flex flex-col gap-12 h-full">
            <ProjectCard v-for="project in projects" :key="project.id" :title="project.title"
                :description="project.description" :link="project.link" :github="project.github" :image="project.image"/>
        </div>
    </div>
</template>