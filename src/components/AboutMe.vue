<script setup></script>
<template lang="pug">
.about
    .about__left
        .title Hi, I'm 
            span.highlight Maja
        .text
            p I’m an energetic and creative person who’s always up for a challenge. I love solving puzzles, getting artsy with hands-on projects, and staying active with sports, calisthenics, and the gym. Fitness and creativity are my happy places, but I’m also all about spending quality time with friends, it’s where I recharge and get inspired.
            p I’m always looking to learn something new and push myself to grow, whether it’s picking up a new skill or just trying to be a better version of myself every day.
            p Let’s create something 
                span.highlight amazing 
                | together!
    .about__right
        img(src="../../public/images/MePhoto.png")
</template>

<style lang="sass" scoped>
@import "../assets/main.sass"

.about
    gap: 80px
    display: flex
    padding: 0 40px
    margin-top: 32px
    align-items: center
    justify-content: space-between

    &__left
        max-width: 600px
        text-align: left

        .title
            font-size: 32px
            margin-bottom: 15px

        .text
            font-size: 18px
            line-height: 1.6
            color: #ffffff

    &__right
        display: flex
        justify-content: center
        img
            border-radius: 8px
            border: 1px solid rgba(158, 171, 255, 0.2)
            max-width: 400px

.highlight
    color: var(--orange)
</style>
