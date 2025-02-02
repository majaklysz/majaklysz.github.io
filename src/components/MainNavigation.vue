<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from "vue";
import {useRouter, useRoute} from "vue-router";
import MK from "../components/icons/MK.vue";

const router = useRouter();
const route = useRoute();

const isScrolled = ref(false);
const activeSection = ref("");

const sections = ["projects", "about", "contact"];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;

  let foundSection = "";
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        foundSection = section;
        break;
      }
    }
  }
  activeSection.value = foundSection;
};

const scrollToSection = (id: string) => {
  if (route.name !== "ProjectView") {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
};

const goToHome = () => {
  if (route.path === "/") {
    window.scrollTo({top: 0, behavior: "smooth"});
  } else {
    router.push("/");
  }
};

const computedActiveSection = computed(() => {
  return route.name === "project" ? null : activeSection.value;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template lang="pug">
nav.nav-box(:class="{ 'scrolled': isScrolled }")
    .nav-box__element(@click="goToHome", :class="{ 'active': computedActiveSection === '' }") Home
    .dot
    .nav-box__element(@click="scrollToSection('projects')", :class="{ 'active': computedActiveSection === 'projects' }") Projects
    .dot
    .nav-box__element(@click="goToHome") 
        MK
    .dot
    .nav-box__element(@click="scrollToSection('about')", :class="{ 'active': computedActiveSection === 'about' }") About Me
    .dot
    .nav-box__element(@click="scrollToSection('contact')", :class="{ 'active': computedActiveSection === 'contact' }") Contact
</template>

<style lang="sass" scoped>
@import "../assets/main.sass"

.nav-box
  gap: 60px
  display: flex
  z-index: 10000
  padding-top: 30px
  padding-bottom: 16px
  position: fixed
  align-items: center
  flex-direction: row
  justify-content: center
  width: 100%
  top: 0
  transition: background 0.15s ease-in-out

  &.scrolled
    background: var(--dark-blue)

  &__element
    width: 97px
    font-size: 20px
    cursor: pointer
    line-height: 45px
    transition: color 0.3s

    &:hover, &.active
      color: var(--orange)
      font-weight: 600

.dot
  width: 4px
  height: 4px
  flex-shrink: 0
  background: #8C939E
  border-radius: 50%
</style>
