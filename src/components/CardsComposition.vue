<script setup lang="ts">
import {useProjects} from "../composables/useProjects";
import ProjectCard from "../components/ProjectCard.vue";

const {projects} = useProjects();
</script>

<template lang="pug">
.cards-composition
  .project-grid
    ProjectCard(v-for="project in projects" :key="project.id" :project="project")
</template>

<style scoped lang="sass">
@import "../assets/screen.sass"

.cards-composition
    display: flex
    margin-top: 32px
    align-items: center

.project-grid
    display: flex
    row-gap: 60px
    flex-wrap: wrap
    column-gap: 60px
    align-items: center
    align-content: center
    justify-content: center

+screen-is-xs
    .cards-composition
        margin-top: 0

    .project-grid
        row-gap: 30px
</style>
