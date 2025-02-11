<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed, watch} from "vue";
import {useRouter, useRoute} from "vue-router";
import MK from "../components/icons/MK.vue";
import BurgerMenuIcon from "../components/icons/BurgerMenuIcon.vue"; // Import burger icon

const router = useRouter();
const route = useRoute();

const isScrolled = ref(false);
const activeSection = ref("");
const isMenuOpen = ref(false); // State for mobile menu

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
  isMenuOpen.value = false; // Close menu on selection
  if (route.path !== "/") {
    router.push("/").then(() => {
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({behavior: "smooth", block: "start"});
      }, 300);
    });
  } else {
    document
      .getElementById(id)
      ?.scrollIntoView({behavior: "smooth", block: "start"});
  }
};

const goToHome = () => {
  isMenuOpen.value = false; // Close menu
  router.push("/").then(() => {
    window.scrollTo(0, 0);
  });
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0);
  }
);

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
.nav-box(:class="{ 'scrolled': isScrolled }")
    // Desktop Navigation
    template(v-if="!isMenuOpen")
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

// Mobile Navigation (Burger Menu)
.burger-menu(:class="{ 'scrolled': isScrolled }")
  MK(@click="goToHome") 
  BurgerMenuIcon(@click="toggleMenu")
  transition(name="slide-fade")
    .mobile-nav(v-if="isMenuOpen")
      .mobile-nav__close(@click="toggleMenu") ✖
      .mobile-nav__logo(@click="goToHome") 
        MK
      .mobile-nav__element(@click="goToHome") Home
      .mobile-nav__element(@click="scrollToSection('projects')") Projects
      .mobile-nav__element(@click="scrollToSection('about')") About Me
      .mobile-nav__element(@click="scrollToSection('contact')") Contact
</template>

<style lang="sass" scoped>
@import "../assets/screen.sass"

.nav-box
  top: 0
  gap: 60px
  width: 100vw
  display: flex
  z-index: 10000
  position: fixed
  padding-top: 30px
  align-items: center
  flex-direction: row
  padding-bottom: 16px
  justify-content: center
  transition: background 0.15s ease-in-out

  &.scrolled
    background: var(--dark-blue)

  &__element
    width: 97px
    font-size: 20px
    cursor: pointer
    line-height: 45px
    transition: color 0.3s
    text-align: center

    &:hover, &.active
      color: var(--orange)
      font-weight: 600

.dot
  width: 4px
  height: 4px
  flex-shrink: 0
  background: #8C939E
  border-radius: 50%

// Burger Menu

.burger-menu
  padding: 20px
  display: none
  z-index: 10001
  cursor: pointer
  position: fixed
  flex-direction: row
  width: -webkit-fill-available
  justify-content: space-between

  &.scrolled
    background: var(--dark-blue)

.mobile-nav
  top: 0
  left: 0
  gap: 20px
  width: 100vw
  height: 100vh
  display: flex
  position: fixed
  align-items: center
  flex-direction: column
  justify-content: center
  //background: var(--dark-blue)
  background-position: center
  background-repeat: no-repeat
  background-image: linear-gradient(0deg, rgba(0, 7, 31, 0.90) 0%, rgba(0, 7, 31, 0.90) 100%), url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/157/230/original/gory.jpg?1739265410")

  &__close
    top: 20px
    right: 20px
    font-size: 24px
    cursor: pointer
    position: absolute

  &__element
    color: white
    font-size: 24px
    cursor: pointer

  &__logo
    margin-bottom: 8px

+screen-is-xs
  .nav-box
    display: none

  .burger-menu
    display: flex !important

.slide-fade-enter-active, .slide-fade-leave-active
  transition: opacity 0.4s ease, transform 0.4s ease

.slide-fade-enter-from, .slide-fade-leave-to
  opacity: 0
  transform: translateX(100%) // Slide in from right
</style>
