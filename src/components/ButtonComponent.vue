<script setup lang="ts">
import {defineProps, computed} from "vue";
import FigmaIcon from "../components/icons/FigmaIcon.vue";
import GithubIcon from "../components/icons/GithubIcon.vue";
import GlobeIcon from "../components/icons/GlobeIcon.vue";

const props = defineProps<{name: string; url: string}>();

// Map button names to their respective icons and text
const buttonConfig = {
  github: {text: "See Code", icon: GithubIcon},
  figma: {text: "See Figma", icon: FigmaIcon},
  website: {text: "See Solution", icon: GlobeIcon},
};

const buttonData = computed(
  () => buttonConfig[props.name.toLowerCase()] || {text: props.name, icon: null}
);
</script>

<template lang="pug">
  a(:href="url" target="_blank" class="button")
    component(:is="buttonData.icon" class="icon" v-if="buttonData.icon") 
    span(class="text") {{ buttonData.text }}
</template>

<style scoped lang="sass">
.button
  gap: 16px
  color: white
  display: flex
  font-size: 16px
  transition: 0.3s
  padding: 14px 24px
  border-radius: 8px
  align-items: center
  justify-content: center
  text-decoration: none
  border: 1px solid white

  &:hover
    background-color: #21273C

.icon
  width: 20px
  height: 20px
</style>
