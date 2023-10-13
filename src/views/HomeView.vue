<script setup>
    import { ref, onMounted, onUnmounted } from "vue";
    import TitleSection from "../components/TitleSection.vue";
    import ExperienceSection from "../components/ExperienceSection.vue";

    import cloud from "../assets/images/cloud.png";

    const screenBottom = ref(null);
    const screenTop = ref(null);
    const cloudLayer = ref(null);
    const cloudLayer1Pos = ref(0);
    const cloudLayer2Pos = ref(0);
    const cloudLayer3Pos = ref(0);

    function scroll() {
        const screenHeight = window.innerHeight;
        screenBottom.value = window.scrollY + screenHeight;
        screenTop.value = screenBottom.value - screenHeight;

        if (cloudLayer) {
            cloudLayer1Pos.value =
                cloudLayer.value.getBoundingClientRect().bottom +
                window.scrollY -
                100;
            cloudLayer2Pos.value =
                cloudLayer.value.getBoundingClientRect().bottom +
                window.scrollY -
                100;
            cloudLayer3Pos.value =
                cloudLayer.value.getBoundingClientRect().bottom +
                window.scrollY -
                100;
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", () => {
            scroll();
        });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", scroll());
    });
</script>

<template>
    <section class="project-section">
        <div class="container">
            <div class="images-container"></div>
            <div class="projects-container">
                <div class="project" id="project1">
                    <h1>Datachain</h1>
                </div>
                <div class="project" id="project2">
                    <h1>Soulbounder</h1>
                </div>
                <div class="project" id="project3">
                    <h1>Pass the time</h1>
                </div>
                <div class="project" id="project4">
                    <h1>Plant medic</h1>
                </div>
            </div>
        </div>

        <div class="background-transition" ref="cloudLayer">
            <div
                class="cloud-layer"
                :style="{
                    top: '-9vw',
                    left: screenTop < cloudLayer1Pos ? '0vw' : '-15%',
                }"
            >
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
            </div>
            <div
                class="cloud-layer"
                :style="{
                    top: '-3vw',
                    left: screenTop < cloudLayer2Pos ? '-10vw' : '15%',
                }"
            >
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
            </div>
            <div
                class="cloud-layer"
                :style="{
                    top: '3vw',
                    left: screenTop < cloudLayer3Pos ? '0vw' : '-15%',
                }"
            >
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
                <img class="cloud" :src="cloud" alt="" />
            </div>
        </div>
    </section>

    <TitleSection />

    <ExperienceSection :screenBottom="screenBottom" />
</template>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap");

    .project-section {
        display: flex;
        flex-direction: column;
        background: #2e3842;
        min-height: 134vh;

        .container {
            width: 75%;
            margin: auto;
            display: flex;
            gap: 5vw;

            .images-container {
                min-height: 10vw;
                width: 100%;
                background: white;
            }

            .projects-container {
                min-height: 10vw;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1vw;

                .project {
                    font-size: 1.25vw;
                    color: white;
                    border-radius: 5vw;
                    padding: 1vw 2vw;
                    cursor: pointer;

                    &:hover {
                        background: #001528;
                        color: var(--color-red);
                        box-shadow: 0 0.2vw 0.7vw rgba(0, 0, 0, 0.5);
                    }

                    h1 {
                        font-weight: 300;
                    }
                }
            }
        }

        .background-transition {
            position: relative;
            margin-top: auto;
            width: 100%;
            height: 25vw;
            background: linear-gradient(
                #2e3842 0%,
                var(--color-background) 75%
            );

            .cloud-layer {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                transition: all 2s ease-in-out;

                .cloud {
                    flex: 1;
                    height: 100%;
                    top: 0;
                }
            }
        }
    }
</style>
