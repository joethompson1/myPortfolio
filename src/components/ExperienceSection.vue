<script setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const props = defineProps(["screenBottom"]);

    import Whale from "../assets/images/whale.svg";
    import waterBackground from "../assets/images/waterBackground.png";
    import hackathonPic from "../assets/images/hackathonPic.jpeg";
    import greatUniHack from "../assets/images/greatUniHack.png";
    import studentHack from "../assets/images/studentHackVII.png";
    import morganStanleyCoding from "../assets/images/morganStanleyCoding.png";
    import octopus from "../assets/images/octopus.svg";
    import hook from "../assets/images/hook.svg";
    import ixMobile from "../assets/images/IBM_iX.png";
    import IBMSvg from "../assets/images/ibmLogo.svg";
    import IconFish from "../components/icons/IconFish.vue";
    import IconFish2 from "../components/icons/IconFish2.vue";
    import IconSchoolFish from "../components/icons/IconSchoolFish.vue";
    import IconSchoolFishReverse from "../components/icons/IconSchoolFishReverse.vue";
    import IconCheckMark from "../components/icons/IconCheckMark.vue";

    const experienceSection = ref(null);
    const hookScrollPosition = ref(0);
    const conjoinContainer = ref(null);
    const conjoinContainerPos = ref(0);
    const ibmContainer = ref(null);
    const ibmContainerPos = ref(0);
    const hackathonTitleContainer = ref(null);
    const hackathonTitleContainerPos = ref(0);
    const guhContainer = ref(null);
    const guhContainerPos = ref(0);
    const msContainer = ref(null);
    const msContainerPos = ref(0);
    const shContainer = ref(null);
    const shContainerPos = ref(0);
    const ibmHackathonContainer = ref(null);
    const ibmHackathonContainerPos = ref(0);
    const languagesContainer = ref(null);
    const languagesContainerPos = ref(0);

    function scroll() {
        const screenHeight = window.innerHeight;

        if (experienceSection.value) {
            const containerTop =
                experienceSection.value.getBoundingClientRect().top +
                window.scrollY;
            hookScrollPosition.value =
                window.scrollY - containerTop + window.innerHeight / 2;
        }
        if (conjoinContainer.value) {
            conjoinContainerPos.value =
                conjoinContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (ibmContainer.value) {
            ibmContainerPos.value =
                ibmContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (hackathonTitleContainer.value) {
            hackathonTitleContainerPos.value =
                hackathonTitleContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (guhContainer.value) {
            guhContainerPos.value =
                guhContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (msContainer.value) {
            msContainerPos.value =
                msContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (shContainer.value) {
            shContainerPos.value =
                shContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (ibmHackathonContainer.value) {
            ibmHackathonContainerPos.value =
                ibmHackathonContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
        if (languagesContainer.value) {
            languagesContainerPos.value =
                languagesContainer.value.getBoundingClientRect().top +
                window.scrollY +
                100;
        }
    }

    onMounted(() => {
        window.addEventListener("scroll", scroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", scroll);
    });
</script>

<template>
    <section class="experience-section" ref="experienceSection">
        <div
            class="experience-bg"
            :style="{
                backgroundImage: `url(${waterBackground})`,
                backgroundSize: 'cover',
            }"
        >
            <div
                class="fishing-line"
                :style="{
                    height: hookScrollPosition + 'px',
                }"
            >
                <img class="fishing-hook" :src="hook" alt="" />
            </div>
        </div>

        <div class="experience-title">
            <div class="arrow-container">
                <div class="arrow-body">
                    <div class="arrow-tip arrow-left"></div>
                    <div class="arrow-tip arrow-right"></div>
                </div>
            </div>
            <h1>experience</h1>
        </div>

        <div class="fish-container">
            <IconFish
                :colorPrimary="'#E0E246'"
                :colorSecondary="'#40E1F0'"
                :delay="'1s'"
            />
            <IconFish2
                :colorPrimary="'#99D4F9'"
                :colorSecondary="'#5C98C0'"
                :delay="'0s'"
            />
            <div style="margin-top: 5vw; position: absolute; width: 80%">
                <IconFish
                    :colorPrimary="'orange'"
                    :colorSecondary="'green'"
                    :delay="'3s'"
                />
                <IconFish2
                    :colorPrimary="'grey'"
                    :colorSecondary="'pink'"
                    :delay="'8s'"
                />
            </div>
            <div style="margin-top: 15vw; position: absolute; width: 80%">
                <IconFish
                    :colorPrimary="'white'"
                    :colorSecondary="'purple'"
                    :delay="'6s'"
                />
                <IconFish2
                    :colorPrimary="'pink'"
                    :colorSecondary="'lightblue'"
                    :delay="'4s'"
                />
            </div>
        </div>

        <div
            :style="{
                opacity: props.screenBottom > conjoinContainerPos ? '1' : '0',
            }"
            class="work-container conjoin-container"
            ref="conjoinContainer"
        >
            <div class="title-container">
                <h1 class="title">Coinjoin AI</h1>
                <h2 class="role">Software Engineering Consultant</h2>
                <p class="dates">June 2023 - Present</p>
            </div>

            <div class="content-container">
                <p class="description">
                    I collaborate with the CEO and a professor of cognitive
                    science to create a demo showcasing a personal AI healthcare
                    assistant and a consumer reasoning engine. Our goal is to
                    secure funding for the initial seed round.
                    <br /><br />

                    In this role, I use PostgreSQL to store digital humans'
                    features and craft intricate SQL queries for comparative
                    analysis. <br /><br />

                    Furthermore, I work closely with a team of engineers in
                    India, where we use Python and FastAPI to interface with a
                    large language model for dynamic and data-intensive queries.
                </p>
            </div>
        </div>

        <div class="school-fish-container">
            <div
                style="
                    transform: translateY(-12vw);
                    position: absolute;
                    width: 80%;
                "
            >
                <IconFish
                    :colorPrimary="'lightcoral'"
                    :colorSecondary="'#40E1F0'"
                    :delay="'5s'"
                />
                <IconFish2
                    :colorPrimary="'orange'"
                    :colorSecondary="'lightgreen'"
                />
            </div>
        </div>

        <div class="work-container ibm-container" ref="ibmContainer">
            <img class="whale" :src="Whale" alt="" />
            <div
                class="image-container"
                :style="{
                    opacity: props.screenBottom > ibmContainerPos ? '1' : '0',
                }"
            >
                <img class="IBMSvg" :src="IBMSvg" alt="IBM SVG" />
            </div>
            <div
                class="text-container"
                :style="{
                    opacity: props.screenBottom > ibmContainerPos ? '1' : '0',
                }"
            >
                <h1 class="title">iX Mobile</h1>
                <h2 class="role">Software Engineer - placement</h2>
                <p class="dates">Sept 2020 - Sept 2021</p>
                <p class="description">
                    I formed part of the core team responsible for overseeing
                    the rebranding of iX Mobile's service offerings, and I
                    helped develop a dedicated microsite to house the updated
                    offerings.
                    <br /><br />

                    As a React Native developer, I joined two client-facing
                    projects to help the companies advance their mobile
                    presence. <br /><br />

                    I was also a member of the organising team responsible for
                    conceptualising, coordinating, and executing the first iX
                    mobile hackathon. Additionally, I participated in the
                    hackathon as a developer, where my team won first place for
                    our VR catalogue application.
                </p>
            </div>
        </div>

        <div class="school-fish-container">
            <IconSchoolFish />
            <IconSchoolFishReverse />
        </div>

        <div class="hackathon-container">
            <div
                class="title-container"
                ref="hackathonTitleContainer"
                :style="{
                    borderBottom:
                        props.screenBottom > hackathonTitleContainerPos
                            ? '0.5vw solid var(--color-red)'
                            : '0',
                }"
            >
                <img
                    class="hackathon-group-image"
                    :src="hackathonPic"
                    alt="Great Uni Hack Winning Photo"
                    :style="{
                        opacity:
                            props.screenBottom > hackathonTitleContainerPos
                                ? '1'
                                : '0',
                    }"
                />
                <h2
                    :style="{
                        opacity:
                            props.screenBottom > hackathonTitleContainerPos
                                ? '1'
                                : '0',
                    }"
                >
                    Hackathons
                </h2>
                <img class="octopus" :src="octopus" />
            </div>

            <div class="hackathon-tile" ref="guhContainer">
                <div
                    class="image-container"
                    :style="{
                        opacity:
                            props.screenBottom > guhContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > guhContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(5vw)',
                    }"
                >
                    <img
                        class="hackathon-image"
                        :src="greatUniHack"
                        alt="Great Uni Hack"
                        :style="{
                            transform:
                                props.screenBottom > guhContainerPos
                                    ? 'rotate(-10deg) rotateX(20deg) rotateY(20deg)'
                                    : 'rotate(0deg) rotateX(0deg) rotateY(0deg)',
                        }"
                    />
                </div>

                <div
                    class="contents-container"
                    :style="{
                        opacity:
                            props.screenBottom > guhContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > guhContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(-5vw)',
                    }"
                >
                    <h2>Great Uni Hack - 2019</h2>
                    <p>
                        Programmed an Android app which used machine learning to
                        classify images of plants using an API. The app also
                        included functionality for adding plants to a map using
                        the Google Maps API and providing users with information
                        on how often to water the plants and how much CO2 the
                        plants have absorbed.
                    </p>

                    <p class="prizes">
                        -
                        <i
                            >1st Place: Winner of the AstraZeneca Sustainability
                            Prize</i
                        >
                        <b
                            ><a
                                class=""
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/joethompson1"
                                >Github</a
                            ></b
                        >
                    </p>
                    <div class="technologies">
                        <span class=""
                            >Language: Java | Technologies: Android Studio,
                            Google Maps API, Machine Learning API
                        </span>
                    </div>
                </div>
            </div>

            <div class="hackathon-tile" ref="msContainer">
                <div
                    class="contents-container"
                    :style="{
                        opacity:
                            props.screenBottom > msContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > msContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(5vw)',
                    }"
                >
                    <h2>Morgan Stanley Coding Challenge - 2019</h2>
                    <p>
                        Created a bot that could play the game ultimate
                        tic-tac-toe using machine learning techniques. After the
                        allotted 2-hour development time frame was complete, my
                        team's bot went head-to-head and challenged the other
                        teams' bots through a series of elimination rounds.
                    </p>
                    <p class="prizes">- <i>3rd place</i></p>
                    <div class="technologies">
                        <span class="">Language: Python</span>
                    </div>
                </div>

                <div
                    class="image-container"
                    :style="{
                        opacity:
                            props.screenBottom > msContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > msContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(-5vw)',
                    }"
                >
                    <img
                        class="hackathon-image"
                        :src="morganStanleyCoding"
                        alt="Morgan Stanley"
                        :style="{
                            transform:
                                props.screenBottom > msContainerPos
                                    ? 'rotate(10deg) rotateX(20deg) rotateY(-20deg)'
                                    : 'rotate(0deg) rotateX(0deg) rotateY(0deg)',
                        }"
                    />
                </div>
            </div>

            <div class="hackathon-tile" ref="shContainer">
                <div
                    class="image-container"
                    :style="{
                        opacity:
                            props.screenBottom > shContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > shContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(5vw)',
                    }"
                >
                    <img
                        class="hackathon-image"
                        :src="studentHack"
                        alt="Student hackathon"
                        :style="{
                            transform:
                                props.screenBottom > shContainerPos
                                    ? 'rotate(-10deg) rotateX(20deg) rotateY(20deg)'
                                    : 'rotate(0deg) rotateX(0deg) rotateY(0deg)',
                        }"
                    />
                </div>

                <div
                    class="contents-container"
                    :style="{
                        opacity:
                            props.screenBottom > shContainerPos ? '1' : '0',
                        transform:
                            props.screenBottom > shContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(-5vw)',
                    }"
                >
                    <h2>Student Hack VII - 2020</h2>
                    <p>
                        Using Python, we programmed a Myo gesture-controlled
                        armband to be playable on an open-source Tetris game.
                        The Myo armband could detect three different forms of
                        hand motion, allowing the user to play the game without
                        any physical input.
                    </p>
                    <div class="technologies">
                        <span class="">
                            Language: Python | Technologies: InteliJ, Myo
                            Armband
                        </span>
                    </div>
                </div>
            </div>

            <div class="hackathon-tile" ref="ibmHackathonContainer">
                <div
                    class="contents-container"
                    :style="{
                        opacity:
                            props.screenBottom > ibmHackathonContainerPos
                                ? '1'
                                : '0',
                        transform:
                            props.screenBottom > ibmHackathonContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(5vw)',
                    }"
                >
                    <h2>IBM iX Mobile - 2021</h2>
                    <p>
                        Coded an iOS proof-of-concept mobile application for one
                        of IBM's clients. I developed the augmented reality
                        feature with the help of Apple's RealityKit. This was my
                        first time using the Swift programming language, so I
                        had to learn and adapt quickly to achieve our team's
                        objectives. The app showcased a catalog of items, giving
                        the user the ability to view the company's products from
                        the comfort of their home using the built-in AR
                        functionality.
                    </p>
                    <p class="prizes">- <i>Overall winners of hackathon</i></p>
                    <div class="technologies">
                        <span class="">
                            Language: Swift | Technologies: Xcode, RealityKit
                        </span>
                    </div>
                </div>

                <div
                    class="image-container"
                    :style="{
                        opacity:
                            props.screenBottom > ibmHackathonContainerPos
                                ? '1'
                                : '0',
                        transform:
                            props.screenBottom > ibmHackathonContainerPos
                                ? 'translateX(0vw)'
                                : 'translateX(-5vw)',
                    }"
                >
                    <img
                        class="hackathon-image"
                        :src="ixMobile"
                        alt="iX"
                        :style="{
                            transform:
                                props.screenBottom > ibmHackathonContainerPos
                                    ? 'rotate(10deg) rotateX(20deg) rotateY(-20deg)'
                                    : 'rotate(0deg) rotateX(0deg) rotateY(0deg)',
                        }"
                    />
                </div>
            </div>
        </div>

        <div class="school-fish-container">
            <IconSchoolFish />
            <IconSchoolFishReverse />
        </div>

        <div class="languages-technologies-container" ref="languagesContainer">
            <div
                class="container"
                :style="{
                    opacity:
                        props.screenBottom > languagesContainerPos ? '1' : '0',
                    transform:
                        props.screenBottom > languagesContainerPos
                            ? 'translateY(0vw)'
                            : 'translateY(5vw)',
                }"
            >
                <div class="title-container">
                    <div class="text-container">
                        <h3>Languages:</h3>
                    </div>
                </div>

                <div class="details-container">
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>HTML</h4>
                            <div
                                id="html"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '100%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~8 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>CSS</h4>
                            <div
                                id="css"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '100%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~8 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>Javascript</h4>
                            <div
                                id="javascript"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '100%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~8 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>Typescript</h4>
                            <div
                                id="typescript"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '37.5%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~3 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>SQL</h4>
                            <div
                                id="sql"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '87.5%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~7 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>Python</h4>
                            <div
                                id="python"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '100%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~8 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>C/C++</h4>
                            <div
                                id="c"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '50%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~4 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>Solidity</h4>
                            <div
                                id="solidity"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '25%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~2 Years</p>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div class="content">
                            <h4>Java</h4>
                            <div
                                id="java"
                                class="progressBar"
                                :style="{
                                    width:
                                        props.screenBottom >
                                        languagesContainerPos
                                            ? '65%'
                                            : '0%',
                                }"
                            ></div>
                            <p>~5 Years</p>
                        </div>
                    </article>
                </div>
            </div>

            <div
                class="container"
                :style="{
                    opacity:
                        props.screenBottom > languagesContainerPos ? '1' : '0',
                    transform:
                        props.screenBottom > languagesContainerPos
                            ? 'translateY(0vw)'
                            : 'translateY(-2.5vw)',
                }"
            >
                <h3>Technologies:</h3>
                <div class="details-container">
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Git</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Linux/Unix</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Numpy</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Android Studio</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Ether.js</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Web3.js</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>HyperLedger</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Node.js</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>MongoDB</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Express</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>NPM</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Ganache</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Truffle</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>React</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Vue</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>Svelte</h4>
                        </div>
                    </article>
                    <article class="details">
                        <IconCheckMark
                            class="check-icon"
                            :color="'var(--color-red)'"
                        />
                        <div>
                            <h4>React Native</h4>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    </section>
    
    <div class="footer">
        <a href="https://www.linkedin.com/in/1joethompson/" target="_blank">LinkedIn</a>
        <a href="https://github.com/joethompson1/" target="_blank">Github</a>
        <a href="https://drive.google.com/file/d/1YLfmQNUeXlMhRWCQSfrkbK9_W-NvcBA6/view?usp=sharing" target="_blank">CV</a>
    </div>
</template>

<style lang="scss" scoped>
    .experience-section {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 10vw;
        width: 100%;
        z-index: 2;
        padding: 12%;
        overflow: hidden;

        .fish-container {
            top: 10vw;
            width: 100%;
        }

        .school-fish-container {
            width: 100%;
        }

        .fishing-line {
            position: absolute;
            width: 0.05%;
            left: 40%;
            top: 0.2%;
            height: 10%;
            opacity: 0.8;
            background: black;
        }

        .fishing-hook {
            position: absolute;
            bottom: calc(0% - 1.35vw);
            left: -1490%;
            width: 3000%;
        }

        .experience-title {
            position: absolute;
            top: 5vw;
            left: 50%;
            width: 11vw;
            z-index: 0;
            display: flex;
            flex-direction: column;
            opacity: 0.3;

            .arrow-container {
                position: relative;

                .arrow-body {
                    position: absolute;
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
                position: relative;
                font-size: 2vw;
                top: 8.5vw;
                color: darkgrey;
            }
        }

        .work-container {
            position: relative;
            width: 100%;
            padding: 4vw 6vw;
            border-radius: 2vw;
            display: flex;
            backdrop-filter: blur(2px);
            gap: 6vw;

            .description {
                position: relative;
                margin-top: 0.75vw;
                font-size: 1vw;
            }
        }

        .conjoin-container {
            background: rgba(0, 0, 0, 0.03);
            transition: all 1s ease-in-out;
            z-index: 10;

            .title-container {
                margin: auto 0;
                flex: 1;
            }

            .content-container {
                flex: 2;
            }

            .title {
                font-size: 2.7vw;
                color: var(--color-red);
                font-weight: 300;
            }

            .role {
                position: relative;
                font-size: 1.7vw;
            }

            .dates {
                position: relative;
                margin-top: 0.2vw;
                font-size: 1vw;
                font-style: italic;
                font-weight: 100;
            }
        }

        .ibm-container {
            background: rgba(255, 255, 240, 0.6);
            transition: all 1s ease-in-out;

            .whale {
                position: absolute;
                top: 0%;
                transform: translateY(-74%) scaleX(-1);
                left: 0;
                width: 25vw;
                height: 30vw;
            }

            .image-container {
                display: flex;
                flex: 1;
                transition: all 2s ease-in-out;

                .IBMSvg {
                    transform: scale(1.5);
                    margin: auto;
                    width: 100%;
                }
            }

            .text-container {
                flex: 2;
                display: flex;
                flex-direction: column;
                transition: all 2s ease-in-out;

                .title {
                    font-size: 2vw;
                    color: var(--color-red);
                    font-weight: 300;
                }

                .role {
                    font-size: 1.5vw;
                }

                .dates {
                    font-size: 0.9vw;
                    font-style: italic;
                    font-weight: 100;
                }
            }
        }

        .hackathon-container {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 2vw;
            z-index: 2;

            .title-container {
                position: relative;
                width: 100%;
                height: max-content;
                border-radius: 3vw 3vw 0.5vw 4vw;
                border-bottom: 0.5vw solid var(--color-red);
                backdrop-filter: blur(2px);

                .hackathon-group-image {
                    width: 100%;
                    -webkit-mask-image: -webkit-gradient(
                        linear,
                        left top,
                        left bottom,
                        from(rgba(0, 0, 0, 1)),
                        color-stop(1, rgba(0, 0, 0, 0)),
                        to(rgba(0, 0, 0, 0))
                    );
                    border-radius: 3vw 3vw 0vw 3vw;
                    transition: all 1s ease-in-out;
                }

                h2 {
                    position: absolute;
                    bottom: 0%;
                    left: 5%;
                    color: var(--color-background);
                    font-size: 2.8vw;
                    font-weight: 400;
                    transition: all 1.5s ease-in-out;
                }

                .octopus {
                    position: absolute;
                    width: 18vw;
                    right: -12%;
                    top: 35%;
                    transform: rotate(35deg);
                    z-index: -1;
                }
            }

            .hackathon-tile {
                position: relative;
                width: 100%;
                // margin-top: 2vw;
                border-radius: 3vw;
                gap: 6vw;
                display: flex;
                z-index: -2;

                .image-container {
                    flex: 1;
                    position: relative;
                    display: flex;
                    transition: all 2s ease-in-out;
                    perspective: 1000px;

                    .hackathon-image {
                        width: 100%;
                        margin: auto;
                        transition: all 2s ease-in-out;
                        transform: rotate(-10deg) rotateX(20deg) rotateY(20deg);
                    }
                }

                .contents-container {
                    flex: 3;
                    padding: 2vw 3vw 1vw 3vw;
                    border-radius: 3vw 3vw 3vw 1.5vw;
                    background: var(--color-dark-blue);
                    display: flex;
                    flex-direction: column;
                    transition: all 2s ease-in-out;

                    h2 {
                        color: var(--color-background);
                        padding-bottom: 2%;
                        font-size: 1.4vw;
                    }

                    p {
                        color: var(--color-background);
                        padding-left: 0%;
                        padding-right: 4%;
                        font-size: 0.9vw;
                    }

                    .prizes {
                        margin: 1vw 0;
                    }

                    a {
                        margin-left: 3%;
                        padding-left: 2%;
                        padding-right: 2%;
                        padding-top: 0.5%;
                        padding-bottom: 0.5%;
                        border-radius: 1vw;
                        color: var(--color-background);
                        background-color: var(--color-primary-variant);
                        font-size: 0.9vw;

                        &:hover {
                            color: var(--color-red);
                        }
                    }

                    .technologies {
                        color: var(--color-red);
                        font-weight: bold;
                        margin-top: auto;

                        span {
                            font-size: 0.89vw;
                            font-weight: 600;
                        }
                    }
                }
            }
        }

        .experience-bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.9;
        }

        .languages-technologies-container {
            position: relative;
            display: flex;
            gap: 4vw;

            .container {
                flex: 1;
                background: var(--color-dark-blue);
                padding: 2.5vw 5vw;
                border-radius: 2vw;
                color: var(--color-red);
                transition: all 1s ease-in-out;
                // display: flex;

                h3 {
                    text-align: center;
                    margin-bottom: 2vw;
                    color: var(--color-blue);
                    font-size: 1.5vw;
                    font-weight: 500;
                }

                .details-container {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1vw;
                    align-content: start;

                    .details {
                        display: flex;
                        gap: 1vw;
                        width: 100%;

                        .check-icon {
                            width: 1.25vw;
                        }

                        h4 {
                            font-weight: 600;
                            font-size: 1.1vw;
                        }

                        .content {
                            width: 100%;

                            .progressBar {
                                border-radius: 2vw;
                                height: 0.75vw;
                                background-color: green;
                                transition: all 4s ease-in-out;
                                width: 0%;
                            }

                            p {
                                color: rgb(255, 255, 255, 0.6);
                                font-size: 0.9vw;
                            }
                        }
                    }
                }
            }
        }

    }
    
    .footer {
        border-top: 1px solid var(--color-red);
        z-index: 1;
        width: 100%;
        display: flex;
        // gap: 10%;
        // padding: 10%;

        a {
            flex: 1;
            text-align: center;
            font-size: 1vw;
            padding: 2vw 0;
            color: var(--color-red);
            cursor: pointer;
            text-decoration: none;

            &:hover {
                background: var(--color-red);
                color: white;
                text-decoration: underline
            }

        }
    }




/* ------------------ Media Queries (Medium devices) -------------------- */
@media screen and (max-width: 1024px) {

    .experience-section {
        padding: 12% 5%;

        .fish-container {
            top: 10vw;
        }

        .fishing-line {
            position: absolute;
            width: 0.05%;
            left: 40%;
            top: 0.2%;
            height: 10%;
            opacity: 0.8;
            background: black;
        }

        .fishing-hook {
            position: absolute;
            bottom: calc(0% - 1.35vw);
            left: -1490%;
            width: 3000%;
        }

        .experience-title {
            position: absolute;
            top: 5vw;
            left: 50%;
            width: 11vw;

            .arrow-container {

                .arrow-body {
                    left: 50%;
                    height: 10vw;
                    width: 0.3vw;

                    .arrow-tip {
                        top: 9vw;
                        width: 0.3vw;
                        height: 1vw;
                    }
                }
            }

            h1 {
                font-size: 3.3vw;
                top: 10vw;
                left: -3vw;
            }
        }

        .work-container {
            flex-direction: column;
            gap: 1vw;

            .description {
                font-size: 2vw;
            }
        }

        .conjoin-container {

            .title-container {
                margin: auto 0;
                // flex: 1;
            }

            .content-container {
                // flex: 2;
            }

            .title {
                font-size: 4.2vw;
            }

            .role {
                font-size: 2.5vw;
            }

            .dates {
                font-size: 2vw;
            }
        }

        .ibm-container {

            .whale {
            }

            .image-container {

                .IBMSvg {
                    transform: scale(2.5);
                    width: 25%;
                }
            }

            .text-container {

                .title {
                    font-size: 4.2vw;
                }

                .role {
                    font-size: 2.5vw;
                }

                .dates {
                    font-size: 2vw;
                }
            }
        }

        .hackathon-container {

            .title-container {

                .hackathon-group-image {
                }

                h2 {
                    font-size: 4.8vw;
                }

                .octopus {
                }
            }

            .hackathon-tile {

                .image-container {

                    .hackathon-image {
                    }
                }

                .contents-container {
                    gap: 1vw;
                    margin: 0;
                    padding: 2vw 3vw 2vw 3vw;

                    h2 {
                        font-size: 2.2vw;
                    }

                    p {
                        font-size: 1.9vw;
                    }

                    .prizes {
                    }

                    a {
                        font-size: 1.9vw;
                    }

                    .technologies {

                        span {
                            font-size: 2vw;
                        }
                    }
                }
            }
        }

        .experience-bg {
        }

        .languages-technologies-container {
            flex-direction: column;

            .container {

                h3 {
                    margin-bottom: 2vw;
                    font-size: 2.8vw;
                }

                .details-container {
                    gap: 2vw;

                    .details {
                        gap: 2vw;

                        .check-icon {
                            width: 2.75vw;
                        }

                        h4 {
                            font-size: 2vw;
                        }

                        .content {
                            width: 80%;

                            .progressBar {
                                height: 1.5vw;
                            }

                            p {
                                font-size: 1.9vw;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>
