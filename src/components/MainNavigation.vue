<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref, onMounted, onUnmounted} from "vue";
import MK from "../components/icons/MK.vue";

const router = useRouter();
const isScrolled = ref(false);
const activeSection = ref("");

const goToHome = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({behavior: "smooth"});
  } else {
    router.push("/").then(() => {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({behavior: "smooth"});
      }, 300);
    });
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  updateActiveSection();
};

const updateActiveSection = () => {
  const sections = ["projects", "about", "contact"];
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

  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
    foundSection = "contact";
  }

  activeSection.value = foundSection;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template lang="pug">
nav.nav-box(:class="{ 'scrolled': isScrolled }")
    .nav-box__element(@click="goToHome", :class="{ 'active': activeSection === '' }") Home
    .dot
    .nav-box__element(@click="scrollToSection('projects')", :class="{ 'active': activeSection === 'projects' }") Projects
    .dot
    .nav-box__element(@click="goToHome") 
        MK
    .dot
    .nav-box__element(@click="scrollToSection('about')", :class="{ 'active': activeSection === 'about' }") About Me
    .dot
    .nav-box__element(@click="scrollToSection('contact')", :class="{ 'active': activeSection === 'contact' }") Contact
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
  transition: background 0.3s ease-in-out

  &.scrolled
    background: var(--dark-blue)

  &__element
    width: 97px
    font-size: 20px
    cursor: pointer
    line-height: 45px
    transition: color 0.3s

    &:hover
      color: var(--orange)
      font-weight: 600

    &.active
      color: var(--orange)
      font-weight: 600

.dot
  width: 4px
  height: 4px
  flex-shrink: 0
  background: #8C939E
  border-radius: 50%
</style>
