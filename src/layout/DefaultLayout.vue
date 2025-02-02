<script setup>
import MainNavigation from "../components/MainNavigation.vue";
</script>

<template lang="pug">
    MainNavigation
    RouterView(v-slot="{ Component }")
        transition
            Component(:is="Component")
</template>

<style lang="sass" scoped></style>
