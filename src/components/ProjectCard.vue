<script setup lang="ts">
import {defineProps, computed} from "vue";

interface Project {
  id: string;
  name: string;
  coverImageUrl: string;
  type: "laptop" | "phone";
}

const props = defineProps<{project: Project}>();

const typeClass = computed(() => {
  return props.project.type === "laptop" ? "laptop-image" : "phone-image";
});
</script>

<template lang="pug">
.card(v-if="project" @click="$router.push({ name: 'project', params: { id: project.id } })")
    img.card__image(:src="project.coverImageUrl" :alt="project.name" :class="typeClass")
    .card__details
        .name {{ project.name }}
        .link See More

</template>

<style scoped lang="sass">
@import ../assets/main.sass

.card
  width: 268px
  height: 338px
  display: flex
  border-radius: 12px
  align-items: center
  flex-direction: column
  justify-content: flex-end
  border: 1px solid rgba(158, 171, 255, 0.2)
  background: linear-gradient(180deg, rgba(163, 197, 255, 0.13), rgba(255,255,255,0))
  transition: transform 0.3s ease-out

  &__details
    gap: 8px
    z-index: 1
    width: 100%
    display: flex
    position: relative
    align-items: center
    flex-direction: column
    justify-content: center
    padding: 24px 0px 32px 0px
    border-radius: 0 0 12px 12px
    background: linear-gradient(0deg, #00071F 60%, rgba(0, 7, 31, 0.75) 75%, rgb(0 7 31 / 51%) 87%, rgb(0 7 31 / 17%) 95%, rgba(0, 7, 31, 0) 100%)

  &:hover
    cursor: pointer
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1)

  &:hover
      .link
        text-decoration: underline
        text-underline-offset: 10px
.name
  font-size: 20px
  font-weight: 600

.link
  font-size: 16px
  color: var(--orange)

.laptop-image
  width: 258px
  height: auto
  transform: translateX(5px)
  transition: transform 0.3s ease-out

.phone-image
  width: 213px
  height: auto
  position: absolute
  transform: translateY(-10px)
  transition: transform 0.3s ease-out

.card:hover .phone-image
  transform: translateY(-40px) scale(1.05)

.card:hover .laptop-image
  transform: translateX(-5px) scale(1.08)
</style>
