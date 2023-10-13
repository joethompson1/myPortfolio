<script setup>
    import { RouterLink, RouterView } from "vue-router";
    import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <body>
        <RouterView />
    </body>
</template>

<style lang="scss" scoped>
    body {
        overflow-x: hidden;
    }
    .dark-mode {
    }
</style>
