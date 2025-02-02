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
            MailLink
            .text Mail
        .link-box(@click="goTo('https://github.com/majaklysz')")
            GithubLink
            .text GitHub
        .link-box(@click="goTo('https://www.linkedin.com/in/maja-klysz-244708251/')")
            LinkedinLink
            .text LinkedIn
</template>

<style lang="sass" scoped>
@import ../assets/main.sass

.contact
    gap: 40px
    display: flex
    margin-top: 32px
    align-items: center
    flex-direction: column

.headline
    font-size: 36px
    font-family: 'Montserrat'

.links
    gap: 90px
    display: flex
    flex-direction: row

.link-box
    gap: 24px
    display: flex
    cursor: pointer
    align-items: center
    border-radius: 12px
    padding: 60px 114px
    flex-direction: column
    justify-content: center
    transition: transform 0.3s ease-out
    border: 1px solid rgba(158, 171, 255, 0.2)
    background: linear-gradient(180deg, rgba(163, 197, 255, 0.13), rgba(255,255,255,0))

    &:hover
        box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1)

        .text
            color: var(--orange)

        :deep(svg path)
            fill: var(--orange) !important

.text
    font-size: 24px
</style>
