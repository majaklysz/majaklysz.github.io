<script setup lang="ts">
import MailLink from "./icons/MailLink.vue";
import GithubLink from "./icons/GithubLink.vue";
import LinkedinLink from "./icons/LinkedinLink.vue";

const goTo = (url) => {
  window.open(url, "_blank"); // Opens in a new tab
};
</script>

<template lang="pug">
.contact
    .headline Get in Touch
    .links
        .link-box(@click="goTo('mailto:klyszmaja@gmail.com')")
            .icon 
                MailLink
            .text Mail
        .link-box(@click="goTo('https://github.com/majaklysz')")
            .icon 
                GithubLink
            .text GitHub
        .link-box(@click="goTo('https://www.linkedin.com/in/maja-klysz-244708251/')")
            .icon 
                LinkedinLink
            .text LinkedIn
</template>

<style lang="sass" scoped>
@import "../assets/screen.sass"

.contact
    gap: 40px
    display: flex
    margin-top: 32px
    margin-bottom: 5%
    align-items: center
    flex-direction: column

.headline
    font-size: 36px
    font-family: 'Montserrat'

.links
    gap: 32px
    display: flex
    flex-direction: row

.link-box
    gap: 24px
    display: flex
    cursor: pointer
    width: 20vw
    height: 30vh
    align-items: center
    border-radius: 12px
    flex-direction: column
    justify-content: center
    transition: transform 0.3s ease-out
    border: 1px solid rgba(158, 171, 255, 0.2)
    background: linear-gradient(180deg, rgb(9 31 70), rgb(3 7 29))

    &:hover
        box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1)

        .text
            color: var(--orange)
            font-size: 24px

        :deep(svg path)
            fill: var(--orange) !important

.text
    font-size: 24px


+screen-is-xs
    .links
        gap: 20px
        flex-direction: row
        flex-wrap: wrap
        justify-content: center

    .link-box
        gap: 8px
        width: 45vw
        height: 25vh

        .text
            font-size: 20px

        .icon :deep(svg)
            width: 40px
            height: 40px

+screen-is-md
    .link-box
        gap: 8px
        width: 38vw
        height: 25vh

    .text
        font-size: 20px

    .icon :deep(svg)
        width: 40px
        height: 40px
</style>
