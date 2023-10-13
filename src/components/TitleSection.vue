<script setup>
    import fisherThem from "../assets/images/fisherthem.svg";
    import fishingRod from "../assets/images/fishingRod.svg";
</script>

<template>
    <section class="title-section" id="titleSection" ref="titleSection">
        <div class="projects-title">
            <div class="arrow-container">
                <div class="arrow-body">
                    <div class="arrow-tip arrow-left"></div>
                    <div class="arrow-tip arrow-right"></div>
                </div>
            </div>
            <h1>projects</h1>
        </div>
        <div class="title-container">
            <div class="fisherthem-container">
                <img class="fisherThem" :src="fisherThem" alt="" />
                <img class="fishingRod" :src="fishingRod" alt="" />
            </div>
            <h1 class="title">
                My <br />
                portfolio
            </h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .title-section {
        position: relative;
        min-height: 50vh;
        display: flex;
        background: var(--color-background);

        .title-container {
            display: flex;
            margin-top: auto;
            width: 90%;

            .fisherthem-container {
                display: flex;
                flex: 1;
                position: relative;

                .fisherThem {
                    position: absolute;
                    left: 35%;
                    top: -45%;
                    width: 20vw;
                    margin: auto;
                    z-index: 1;
                    animation: bobbing 5s infinite linear;
                }

                .fishingRod {
                    position: absolute;
                    left: 16%;
                    top: -175%;
                    width: 45vw;
                    z-index: 0;
                    animation: bobbingRod 5s infinite linear;
                }
            }

            .title {
                flex: 1;
                font-family: "Bungee Shade", cursive;
                font-size: 4vw;
                color: var(--color-red);
            }
        }

        .projects-title {
            position: absolute;
            width: 11vw;
            top: 2.5vw;
            left: 50%;
            z-index: -1;
            display: flex;
            flex-direction: column;
            z-index: 10;

            .arrow-container {
                position: relative;
                transform: scaleY(-1);

                .arrow-body {
                    position: absolute;
                    top: -11.5vw;
                    left: 50%;
                    height: 8vw;
                    width: 0.175vw;
                    border-radius: 1vw;
                    background: darkgrey;

                    .arrow-tip {
                        position: absolute;
                        top: 6.9vw;
                        width: 0.175vw;
                        height: 1vw;
                        background: darkgrey;
                    }

                    .arrow-left {
                        transform: rotate(-45deg) translateX(-0.43vw);
                    }

                    .arrow-right {
                        transform: rotate(45deg) translateX(0.43vw);
                    }
                }
            }

            h1 {
                margin: auto;
                position: relative;
                font-size: 2vw;
                // top: 8.5vw;
                color: darkgrey;
            }
        }
    }

    @keyframes bobbing {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        30% {
            transform: translateY(1%) rotate(4deg);
        }
        66% {
            transform: translateY(-1%) rotate(-5deg);
        }
        100% {
            transform: translateY(0) rotate(0deg);
        }
    }

    @keyframes bobbingRod {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        30% {
            transform: translateY(1%) rotate(0deg);
        }
        66% {
            transform: translateY(-0.5%) rotate(1deg);
        }
        100% {
            transform: translateY(0) rotate(0deg);
        }
    }
</style>
