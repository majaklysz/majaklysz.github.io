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
.project-view(v-if="project")
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
ContactBox
.decor-one
    Decor
.decor-two
    Decor


</template>

<style scoped lang="sass">
@import ../assets/main.sass

.project-view
    margin: 10% auto
    padding: 0 20px
    max-width: 800px
    text-align: left
    line-height: 26px
    font-size: 16px
    display: flex
    flex-direction: column
    gap: 100px

.mockup
    display: flex
    width: 600px
    height: auto
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
    white-space: pre-line
    display: flex
    flex-direction: column
    gap: 8px

.box
    display: flex
    flex-direction: column
    gap: 8px

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
    z-index: 0
</style>
