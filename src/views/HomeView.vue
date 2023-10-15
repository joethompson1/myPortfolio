<script setup>
    import { ref, onMounted, onUnmounted } from "vue";
    import { RouterLink, useRouter } from 'vue-router';
    import TitleSection from "../components/TitleSection.vue";
    import ExperienceSection from "../components/ExperienceSection.vue";
    import ProjectsSection from "../components/ProjectsSection.vue";

    const screenBottom = ref(null);
    const screenTop = ref(null);

    function scroll() {
        const screenHeight = window.innerHeight;
        screenBottom.value = window.scrollY + screenHeight;
        screenTop.value = screenBottom.value - screenHeight;
    }

    onMounted(() => {
        window.addEventListener("scroll", scroll);
        const titleSection = document.getElementById("titleSection");
        titleSection.scrollIntoView({ behavior: "instant" });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", scroll);
    });
</script>

<template>
    <ProjectsSection :screenBottom="screenBottom" :screenTop="screenTop" />

    <TitleSection id="titleSection" />

    <ExperienceSection :screenBottom="screenBottom" />
</template>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

    
</style>
