<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useRoute} from "vue-router";
import {database} from "../firebaseConfig";
import {ref as dbRef, get} from "firebase/database";
import ButtonComponent from "../components/ButtonComponent.vue";
import ContactBox from "../components/ContactBox.vue";
import Decor from "../components/icons/Decor.vue";

interface Project {
  id: string;
  name: string;
  challenges: string[];
  mockupImageUrl: string;
  overview: string;
  skills: string[];
  buttons: {[key: string]: string}[];
}

const route = useRoute();
const project = ref<Project | null>(null);

onMounted(async () => {
  const projectId = route.params.id as string;
  console.log("Fetching project with ID:", projectId);

  const snapshot = await get(dbRef(database, `projects/${projectId}`));

  if (snapshot.exists()) {
    project.value = snapshot.val();
    console.log("Fetched project data:", project.value);
  } else {
    console.log("No project found for ID:", projectId);
  }
});
</script>

<template lang="pug">
.view(v-if="project")
    .project-view
        img.mockup(:src="project.mockupImageUrl" :alt="project.name")
        .details
            .headline
                .name {{ project.name }}
                .buttons
                    ButtonComponent(v-for="button in project.buttons" 
                        :key="Object.keys(button)[0]"
                        :name="Object.keys(button)[0]"
                        :url="Object.values(button)[0]"
                    )
            .overview 
                .title Overview
                .overview__text {{ project.overview }}
            .box
                .title Challenges and Solutions
                .challenges
                    .challenge(v-for="challenge in project.challenges" :key="challenge") 
                        li {{ challenge }}
            .box
                .title Skills Gained and Applied
                .skills
                    .skill(v-for="skill in project.skills" :key="skill") {{ skill }}

    .decor-one
        Decor
    .decor-two
        Decor
    ContactBox
</template>

<style scoped lang="sass">
@import "../assets/screen.sass"

.view
    z-index: 0
    position: relative
    overflow: hidden

.project-view
    z-index: 2
    gap: 100px
    display: flex
    padding: 0 20px
    font-size: 16px
    max-width: 800px
    text-align: left
    margin: 10% auto
    line-height: 26px
    position: relative
    flex-direction: column

.mockup
    width: 40vw
    height: auto
    display: flex
    margin: 0 auto

.details
    gap: 35px
    display: flex
    flex-direction: column

.title
    font-size: 20px
    font-weight: 600
    line-height: 30px

.headline
    display: flex
    align-items: center
    flex-direction: row
    justify-content: space-between

.name
    font-size: 32px
    font-weight: 700
    font-family:'Montserrat'

.buttons
    gap: 32px
    display: flex
    align-items: center
    flex-direction: row

.overview
    gap: 8px
    display: flex
    white-space: pre-line
    flex-direction: column

.box
    gap: 8px
    display: flex
    flex-direction: column

.challenges
    gap: 10px
    display: flex
    padding-left: 20px
    list-style-type: disc
    flex-direction: column
    list-style-position: outside

.challenge
    text-indent: -20px

.skills
    gap: 8px
    display: flex
    flex-direction: column
    font-size: 18px

.decor-one, .decor-two
    position: absolute
    width: 150px
    height: auto
    opacity: 0.7
    z-index: 0
    pointer-events: none

.decor-one
    top: -70vh
    right: 130vw

.decor-two
    top: 100vh
    left: 75vw


+screen-is-xs
    .project-view
        gap: 50px
        margin: 30% auto
        padding: 0 24px

    .mockup
        width: 90vw

    .headline
        gap: 24px
        flex-direction: column
        .buttons
            gap: 16px
</style>
