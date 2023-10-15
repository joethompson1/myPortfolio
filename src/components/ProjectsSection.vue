<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    import cloud from "../assets/images/cloud.png";
    import jupiter from "../assets/images/jupiter.svg";
    import galaxy from "../assets/images/galaxy.svg";
    import mars from "../assets/images/mars.svg";
    import astronaut from "../assets/images/astronaut.svg";
    import spaceBits from "../assets/images/spaceBits.svg";
    import rocketShip from "../assets/images/rocketShip.svg";
    import spaceBackground from "../assets/images/spaceBackground.svg";
    import rocketShipBackground from "../assets/images/rocketShipBackground.svg";

    const props = defineProps(["screenBottom", "screenTop"]);


    const buttonClicked = ref(false);

    const cloudLayer = ref(null);
    const cloudLayer1Pos = ref(0);
    const cloudLayer2Pos = ref(0);
    const cloudLayer3Pos = ref(0);

    function scroll() {
        if (cloudLayer) {
            const cloudLayerBottom = cloudLayer.value.getBoundingClientRect().bottom + window.scrollY - 100;

            cloudLayer1Pos.value = cloudLayerBottom;
            cloudLayer2Pos.value = cloudLayerBottom;
            cloudLayer3Pos.value = cloudLayerBottom;
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', scroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", scroll);
    });
</script>

<template>
    <section class="project-section">
        <div class="project-container">
            

            <div class="container">
                <div class="projects-container">
                    <RouterLink 
                        to="/datachain" 
                        class="project"
                    >
                        <h1>Datachain</h1>
                    </RouterLink>
                    <RouterLink 
                        to="/soulbounder" 
                        class="project"
                    >
                        <h1>Soulbounder</h1>
                    </RouterLink>
                    <RouterLink 
                        to="/passthetime" 
                        class="project"
                    >
                        <h1>Pass the time</h1>
                    </RouterLink>
                    <RouterLink 
                        to="/plantmedic" 
                        class="project"
                    >
                        <h1>Plant medic</h1>
                    </RouterLink>
                </div>
            </div>

            <img class="jupiter" :src="jupiter">
            <img class="galaxy" :src="galaxy">
            <img class="moon" :src="rocketShipBackground">
            <img class="mars" :src="mars">
            <img class="spaceBits" :src="spaceBits">
            <img class="spaceBits2" :src="spaceBits">
            <div class="astronaut-container">
                <img class="astronaut" :src="astronaut">
                <img class="spaceLeash" :src="spaceBackground">
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
                    top: '-9vw',
                    left: screenTop < cloudLayer1Pos ? '-15%' : '0',
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
                    top: '-3vw',
                    left: screenTop < cloudLayer2Pos ? '15%' : '-10vw',
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
            <div
                class="cloud-layer"
                :style="{
                    top: '3vw',
                    left: screenTop < cloudLayer3Pos ? '-15%' : '0',
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
</template>

<style lang="scss" scoped>
    .project-section {
        position: relative;
        background: #2e3842;
        min-height: 154vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .project-container {
            position: relative;
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: 100%;
            margin: auto;

            .container {
                margin: auto;
                width: 35%;
                display: flex;
                z-index: 10;

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
                        text-decoration: none;
                        text-align: center;
                        background: #001528;
                        color: var(--color-red);
                        box-shadow: 0 0.2vw 0.7vw rgba(0, 0, 0, 0.5);
                        transition: all 0.3s ease;

                        &:hover {
                            transform: scale(1.05);
                        }

                        h1 {
                            font-weight: 300;
                        }
                    }
                }
            }

            .jupiter {
                position: absolute;
                top: -20%;
                left: -10%;
                width: 40%;
                z-index: 1;
            }

            .moon {
                position: absolute;
                top: -10%;
                left: 11%;
                width: 50%;
                z-index: 1;
            }

            .galaxy {
                position: absolute;
                top: 1%;
                right: 1%;
                width: 25%;
                z-index: 1;
            }

            .mars {
                position: absolute;
                bottom: -15%;
                left: 10%;
                width: 25%;
                z-index: 1;
            }

            .astronaut-container {
                position: absolute;
                bottom: -20%;
                right: 0%;
                width: 33vw;
                height: 33vw;
                // background: red;


                .astronaut {
                    position: absolute;
                    left: 0%;
                    top:0%; 
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 1;
                    animation-name: floating;
                    animation-duration: 5s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }

                .spaceLeash {
                    position: absolute;
                    top: 60%;
                    left: 100%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }
            }


            @keyframes floating {
                0% { transform: translate(0,  0); }
                50%  { transform: translate(-3%, 3%); }
                100%   { transform: translate(0, 0); }   
            }


            .spaceBits {
                position: absolute;
                bottom: -15%;
                left: 10%;
                width: 45%;
                z-index: 0;
            }

            .spaceBits2 {
                position: absolute;
                bottom: -10%;
                right: 10%;
                width: 45%;
                z-index: 0;
            }
        }

        .background-transition {
            position: relative;
            margin-top: auto;
            width: 100%;
            height: 25vw;
            background: linear-gradient(
                #2e3842 0%,
                var(--color-background) 85%
            );

            .cloud-layer {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                transition: left 10s ease-in,
                            right 10s ease-in;

                .cloud {
                    flex: 1;
                    height: 100%;
                    top: 0;
                    z-index: 10;
                }
            }
        }
    }





/* ------------------ Media Queries (Medium devices) -------------------- */





@media screen and (max-width: 1024px) {
    .project-section {
        min-height: 120vh;

        .project-container {
            height: 50vh;

            .container {
                width: 55%;

                .projects-container {
                    min-height: 10vw;
                    gap: 2.5vw;

                    .project {
                        font-size: 1.75vw;
                        color: white;
                        border-radius: 5vw;
                        padding: 2vw 4vw;
                        cursor: pointer;
                        text-decoration: none;
                        text-align: center;
                        background: #001528;
                        color: var(--color-red);
                        box-shadow: 0 0.2vw 0.7vw rgba(0, 0, 0, 0.5);
                        transition: all 0.3s ease;

                        &:hover {
                            transform: scale(1.05);
                        }

                        h1 {
                            font-weight: 300;
                        }
                    }
                }
            }

            .jupiter {
                position: absolute;
                top: -35%;
                left: -15%;
                width: 55%;
                z-index: 1;
            }

            .moon {
                position: absolute;
                top: -15%;
                left: 11%;
                width: 60%;
                z-index: 1;
            }

            .galaxy {
                position: absolute;
                top: -25%;
                right: -5%;
                width: 35%;
                z-index: 1;
            }

            .mars {
                position: absolute;
                bottom: -80%;
                left: -5%;
                width: 45%;
                z-index: 1;
            }

            .astronaut-container {
                position: absolute;
                bottom: -30%;
                right: -10%;
                width: 50%;
                height: 50%;
                // background: red;


                .astronaut {
                    position: absolute;
                    left: 0%;
                    top:0%; 
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 1;
                    animation-name: floating;
                    animation-duration: 5s;
                    animation-iteration-count: infinite;
                    animation-timing-function: ease-in-out;
                }

                .spaceLeash {
                    position: absolute;
                    top: 80%;
                    left: 100%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }
            }


            @keyframes floating {
                0% { transform: translate(0,  0); }
                50%  { transform: translate(-3%, 3%); }
                100%   { transform: translate(0, 0); }   
            }


            .spaceBits {
                position: absolute;
                bottom: -15%;
                left: 10%;
                width: 45%;
                z-index: 0;
            }

            .spaceBits2 {
                position: absolute;
                bottom: -10%;
                right: 10%;
                width: 45%;
                z-index: 0;
            }
        }

        .background-transition {
            position: relative;
            margin-top: auto;
            width: 100%;
            height: 25vw;
            background: linear-gradient(
                #2e3842 0%,
                var(--color-background) 85%
            );

            .cloud-layer {
                position: absolute;
                display: flex;
                width: 100%;
                height: 100%;
                transition: left 10s ease-in,
                            right 10s ease-in;

                .cloud {
                    flex: 1;
                    height: 100%;
                    top: 0;
                    z-index: 10;
                }
            }
        }
    }

}








/* ------------------ Media Queries (Small devices) -------------------- */

@media screen and (max-width: 600px) {

    
}
</style>
