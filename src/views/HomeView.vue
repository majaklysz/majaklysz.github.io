<script setup>
import HeroSection from "../components/HeroSection.vue";
import CardsComposition from "../components/CardsComposition.vue";
import AboutMe from "../components/AboutMe.vue";
import Contact from "../components/Contact.vue";
import Decor from "../components/icons/Decor.vue";
</script>

<template lang="pug">
.view
    HeroSection
    .content
        #projects 
            CardsComposition
        #about
            AboutMe
        #contact
            Contact
.decor-one
    Decor
.decor-two
    Decor

</template>

<style lang="sass" scoped>
.view
    position: relative
    overflow: hidden

.content
    margin: 0 10%
    display: flex
    flex-direction: column
    margin-bottom: 15%
    position: relative
    z-index: 2

#projects, #about, #contact
    padding: 100px 50px

.decor-one, .decor-two
    position: absolute
    width: 150px
    height: auto
    opacity: 0.7
    z-index: 1
    pointer-events: none

.decor-one
    top: 120vh
    left: 70vw

.decor-two
    top: 250vh
    right: 130vw
</style>
