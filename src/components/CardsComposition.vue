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
.cards-composition
    display: flex
    align-items: center
    margin-top: 32px

.project-grid
    display: flex
    row-gap: 60px
    flex-wrap: wrap
    column-gap: 60px
    align-items: center
    align-content: center
    justify-content: center
</style>
