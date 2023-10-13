<script setup>
    const props = defineProps(["colorPrimary", "colorSecondary", "delay"]);
</script>

<template>
    <svg
        width="107px"
        height="77px"
        viewBox="0 0 107 77"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        id="fish1"
        :style="{
            animationDelay: props.delay,
        }"
    >
        <title>fish-1</title>
        <defs></defs>
        <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
        >
            <g id="Artboard" transform="translate(-142.000000, -48.000000)">
                <g id="fish-1" transform="translate(138.000000, 44.000000)">
                    <circle
                        id="bubble-1"
                        fill="#FFFFFF"
                        opacity="0.5"
                        cx="10"
                        cy="42"
                        r="5"
                    ></circle>
                    <circle
                        id="bubble-2"
                        fill="#FFFFFF"
                        opacity="0.5"
                        cx="10"
                        cy="42"
                        r="5"
                    ></circle>
                    <circle
                        id="bubble-3"
                        fill="#FFFFFF"
                        opacity="0.5"
                        cx="10"
                        cy="42"
                        r="5"
                    ></circle>
                    <rect
                        id="Rectangle"
                        :fill="props.colorPrimary"
                        transform="translate(42.426407, 42.426407) rotate(45.000000) translate(-42.426407, -42.426407) "
                        x="12.4264069"
                        y="12.4264069"
                        width="60"
                        height="60"
                        rx="10"
                    ></rect>
                    <rect
                        id="Rectangle-Copy-3"
                        :fill="props.colorSecondary"
                        transform="translate(33.998737, 33.911165) rotate(45.000000) translate(-33.998737, -33.911165) "
                        x="28.9987373"
                        y="3.91116524"
                        width="10"
                        height="60"
                    ></rect>
                    <path
                        d="M47.6776695,18.6776695 L57.6776695,18.6776695 L57.6776695,53.6776695 L57.6776695,53.6776695 C57.6776695,56.4390933 55.4390933,58.6776695 52.6776695,58.6776695 L47.6776695,58.6776695 L47.6776695,18.6776695 Z"
                        id="Rectangle-Copy-4"
                        :fill="props.colorSecondary"
                        transform="translate(52.677670, 38.677670) rotate(45.000000) translate(-52.677670, -38.677670) "
                    ></path>
                    <rect
                        id="Rectangle-Copy"
                        :fill="props.colorPrimary"
                        transform="translate(98.000000, 42.000000) rotate(45.000000) translate(-98.000000, -42.000000) "
                        x="88"
                        y="32"
                        width="20"
                        height="20"
                        rx="5"
                    ></rect>
                    <path
                        d="M99.131728,36.631728 L104.131728,36.631728 L104.131728,36.631728 C106.893152,36.631728 109.131728,38.8703042 109.131728,41.631728 L109.131728,49.631728 L99.131728,49.631728 L99.131728,36.631728 Z"
                        id="Rectangle-Copy-4"
                        :fill="props.colorSecondary"
                        transform="translate(104.131728, 43.131728) rotate(45.000000) translate(-104.131728, -43.131728) "
                    ></path>
                    <circle
                        id="Oval"
                        fill="#3B3838"
                        cx="23"
                        cy="37"
                        r="5"
                    ></circle>
                </g>
            </g>
        </g>
    </svg>
</template>

<style lang="scss" scoped>
    #fish1 {
        overflow: hidden;
        position: relative;
        animation:
            swim 15s linear infinite,
            swimv 8s ease infinite alternate;
        left: 120%;
        top: 5%;
        width: 4%;
        will-change: transform;
    }

    @keyframes swim {
        0% {
            left: 110%;
        }
        100% {
            left: -20%;
        }
    }

    @keyframes swimv {
        0% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(30px);
        }
        50% {
            transform: translateY(0px);
        }
        75% {
            transform: translateY(50px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    #bubble-1 {
        animation: bubble 5s infinite;
        opacity: 0;
        transform: translate(-20px, -50px);
    }

    #bubble-2 {
        animation: bubble 5s 1s infinite;
        opacity: 0;
        transform: translate(-30px, -40px);
    }

    #bubble-3 {
        animation: bubble 5s 3s infinite;
        opacity: 0;
        transform: translate(-20px, -30px);
    }

    @keyframes bubble {
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
        }
    }
</style>
