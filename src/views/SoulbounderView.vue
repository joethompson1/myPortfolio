<script setup>
    import { RouterLink, useRouter } from 'vue-router';

    import SoulbounderAnimation from '../components/SoulbounderAnimation.vue';
    import datachainImg from '../assets/images/homePage.png';
    import monitor from '../assets/images/monitor.png';
    import notebook from '../assets/images/notebook.png';
    import soulbounderCreateSBT from '../assets/images/soulbounderCreateSBT.png';
    import IconBackArrow from '../components/icons/IconBackArrow.vue';
    import IconGithub from '../components/icons/IconGithub.vue';
    import IconCheckMark from '../components/icons/IconCheckMark.vue';
</script>
<template>
    <section class="project">
        <div class="back-container" @click="$router.go(-1)">
            <IconBackArrow />
        </div>

        <div class="project-container">
            <div class="image-container">
                <div class="monitor-container">
                    <div class="blank-bg-monitor"></div>
                    <div id="soulbounderAnimation" className="loadingContainer-project">
                        <SoulbounderAnimation class="soulbounder-img"/>
                    </div>                    <img class="desktop-img" :src="monitor" alt="Monitor SVG" />
                </div>
                <div class="notebook-container">
                    <div class="blank-bg-project"></div>
                    <img class="studentAccountPageWithDegree-image" :src="soulbounderCreateSBT" alt="Student Account Page with Degree" />
                    <img class="notebook-img-project" :src="notebook" alt="Notebook SVG" />
                </div>
            </div>

            <div class="title-container">
                <div class="title">
                    <h1>Soulbounder</h1>
                </div>

                <div class="buttons-container">
                    <div class="button">
                        <a href="https://github.com/joethompson1/Soulbounder" target="_blank">Github </a>
                        <div class="icon">
                            <IconGithub />
                        </div>
                    </div>
                </div>
            </div>

            <div class="contents__container">
                <div class="description-container">
                    <h3>Description:</h3>
                    <p>
                        <i>This project is currently under development.</i><br /><br />

                        In 2022 Vitalik Buterin Co-authored a whitepaper called Decentralized Society: Finding Web3's Soul. 
                        Whereby he outlined his idea of introducing SoulBound Tokens (SBTs) to bring about a more decentralised society 
                        through the use of the blockchain. 
                        This is achieved through the use of a one time transfer token known as an SBT.<br /><br />

                        Working with this idea I am currently developing a website that would allow people to create and 
                        issue their own SBTs. These can come in a variety of different forms such as, 
                        proof of attendance, certificates, tickets and account login. 
                        This builds upon the work I did for my Datachain project, this time creating a more general 
                        purpose certificate which will be hosted on the Ethereum blockchain and utilising the cutting edge 
                        Soulbound Token smart contract, which is currently being developed by the Ethereum Foundation.<br /><br />

                        The premise of the project is to leverage blockchain technology as a way of improving 
                        the efficiency of every day digital life. One of the ways we are already seeing this is with the increase 
                        in utility of digital wallets. Soulbounder aims to provide an easy way of creating and sharing SBT's 
                        by bridging the gap between the blockchain and the every day user. SBT's have the ability to open up a 
                        whole world of potential possibilities for users wanting to add more functionality to 
                        their digital wallets.
                    </p>
                </div>

                <div class="contents-container">
                    <div class="languages-container">
                        <h3>Languages Used:</h3>
                        <div class="list-container">
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>HTML</h4>
                                    <div id="CSS" class="progressBar" style="width: 84.5%" />
                                    <small class="text-light">84.5%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>CSS</h4>
                                    <div id="JavaScript" class="progressBar" style="width: 30%" />
                                    <small class="text-light">9.4%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>JavaScript</h4>
                                    <div id="Go" class="progressBar" style="width: 15%" />
                                    <small class="text-light">3.2%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>EJS</h4>
                                    <div id="Go" class="progressBar" style="width: 12%" />
                                    <small class="text-light">2.6%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Solidity</h4>
                                    <div id="Shell" class="progressBar" style="width: 5%" />
                                    <small class="text-light">0.3%</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="languages-container">
                        <h3>Technologies Used:</h3>
                        <div class="list-container">
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Node.Js</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>IPFS</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Ether.js</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Web3.js</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Express.js</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>NPM</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>

.project {
    background: var(--color-background);
    padding: 5vw;
}

.project-container {
    min-height: 100vh !important;
    width: 75%;
    margin: 0 auto;
    position: relative;
    padding-top: 5vw;
    padding-left: 5vw;
    padding-right: 5vw;
    padding-left: 0vw;
    padding-right: 0vw;
}

.back-container {
    position: fixed;
    top: 0.8vw;
    left: 0.8vw;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    border: .22vw solid black;
    cursor: pointer;
}


.desktop-img {
    position: relative;
    padding-top: 10%;
    left: 0%;
    width: 100%;
}






/* ----------------- Project Images ----------------- */

.image-container {
    position: relative;
    margin: 0 auto;
    width: 25vw;
    height: 25vw;
}

.monitor-container {
    position: absolute;
    width: 100%;
    transform: translate(30%, -10%);
}


.notebook-container {
    position: absolute;
    width: 110%;
    transform: translate(-40%, 0%);
}


.phone-container {
    position: absolute;
    width: 70%;
    transform: translate(-45%, 33%);
}


.notebook-img-project {
    position: relative;
    left: -3%;
    padding-top: 19%;
    width: 100%;
} 


.loadingContainer-project {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    padding: 3%;
    margin-top: 5%;
    width: 25%;
}



.datachain-image-project {
    position: absolute;
    z-index: -1;
    width: 90%;
    top: 16.9%;
    left: 5%;
}


.studentAccountPageWithDegree-image {
    position: absolute;
    z-index: -1;
    top: 34%;
    left: 10%;
    width: 73%;
}



.soulbounderCreateSBT {
    position: absolute;
    z-index: -1;
    top: 35%;
    left: 10.5%;
    width: 77%; 
}



.passTheTimeGooglePlayStore {
    position: absolute;
    z-index: -1;
    top: 18%;
    left: 5%;
    width: 92%; 
}


.GUHwebpage {
    position: absolute;
    z-index: -1;
    top: 18%;
    left: 4%;
    width: 92%; 
}


.passTheTime-Img {
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
}



.blank-bg-sbt {
    position: absolute;
    width: 80%;
    height: 60%;
    z-index: -2;
    background: #fcfcfc;
    top: 30%;
    left: 8%;
}


.blank-bg-monitor {
    position: absolute;
    width: 94%;
    height: 64%;
    z-index: -2;
    background: white;
    top: 15%;
    left: 3%;
}


.blank-bg-project {
    position: absolute;
    z-index: -2;
    background: white;
    width: 78%;
    height: 63%;
    top: 28%;
    left: 9%;
}


.blank-bg-phone-project {
    position: absolute;
    background: #fafafa;
    width: 45%;
    height: 89.5%;
    top: 2.5%;
    left: 27%;
    border-radius: 1vw;
}


.color-bg-phone-project {
    position: absolute;
    background: var(--color-red);
    width: 45%;
    height: 89.5%;
    top: 2.5%;
    left: 27%;
    border-radius: 1vw;
}






/* --------------- Project Title -------------------- */



.title-container {
    background: var(--color-dark-blue);
    border-radius: 1.5vw;
    display: flex;
    gap: 0%;
    padding: 2vw 4vw;
    box-shadow: 0vw .25vw .5vw 0vw rgba(0,0,0,0.5);
    
    .title {
        position: relative;
        width: 100%;
        margin: auto 0;
        
        h1 {
            font-size: 3vw;
            text-align: left;
            margin: 0;
            color: var(--color-background);
        }
    }

    .buttons-container {
        display: flex;
        gap: 2vw;
        cursor: pointer;

        .button {
            display: flex;
            flex: 1;
            align-items: center;
            text-align: center;
            border-radius: 1vw;
            width: max-content;
            transition: 0.3s ease all;
            background: var(--color-red);
            box-shadow: 0vw 1vw 2vw 0vw rgba(0,0,0,0.5);
            padding: 1vw 1.7vw;
            gap: .5vw;

            &:hover {
                transform: scale(1.05);
                box-shadow: 0vw 1vw 3vw 0vw rgba(0,0,0,0.9);
            }

            a {
                font-size: 0.9vw;
                color: white;
                text-decoration: none;
            }

            .icon {
                display: flex;
                width: 1.5vw;
                margin: auto;
            }
        }

    }
}












/* ---------------- Project contents ---------------- */

.contents__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
    padding: 2vw 0 6vw 0;
}


.description-container {
    padding: 1vw;

    h3 {
        margin-bottom: 1vw;
        font-size: 1.2vw;
    }

    p {
        font-size: .9vw;
    }
}


.contents-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5vw;
    
    .languages-container {
        width: 100%;
        background: var(--color-dark-blue);
        padding: 1.5vw 3vw;
        border-radius: 2vw;
        border: 2px solid transparent;
        transition: var(--transition);
        box-shadow: 0vw 1vw 2vw 0vw rgba(0,0,0,0.3);

        
        h3 {
            color: white;
            margin-bottom: 2vw;
            font-size: 1.2vw;
        }

        .list-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1vw;
            
            .technologies__details {
                display: flex;
                width: 100%;
                gap: 0.8vw;
            }

            .checkmark-icon {
                width: 1vw;
            }

            .languages-item-container {
                width: 100%;

                h4 {
                    color: var(--color-red);
                    font-size: .9vw;
                }
                
                .progressBar {
                    border-radius: 2vw;
                    height: 0.8vw;
                    background-color: green;
                    margin-bottom: 0.25vw;
                    margin-top: 0.2vw;
                }

                .text-light {
                    font-size: 0.9vw;
                    color: lightgrey;
                }
            }
        }

    }
}












/* ------------------ Media Queries (Large devices) -------------------- */

@media screen and (min-width: 1700px) {

    .project-container {
        padding-left: 5vw;
        padding-right: 5vw;
    }


    .back-container {
        position: fixed;
        top: 0.8vw;
        left: 0.8vw;
        width: 100px;
        height: 100px;
        border: .3vw solid black;
    }



    /* ----------------- Project Images ----------------- */

    .image-container {
        width: 600px;
        height: 600px;
    }



    /* --------------- Project Title -------------------- */



    .title-container {
        border-radius: 20px;
        gap: 10px;
        padding: 30px 60px;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,0.5);
        
        .title {   
            h1 {
                font-size: 50px !important;
            }
        }

        .buttons-container {
            gap: 30px;

            .button {
                border-radius: 15px;
                box-shadow: 0 10px 20px 0 rgba(0,0,0,0.5);
                padding: 15px 27px;
                gap: .5vw;

                &:hover {
                    transform: scale(1.05);
                    box-shadow: 0 10px 50px 0 rgba(0,0,0,0.9);
                }

                a {
                    font-size: 18px;
                }

                .icon {
                    width: 30px;
                }
            }

        }
    }


    /* ---------------- Project contents ---------------- */

    .contents__container {
        gap: 40px;
        padding: 50px 0 100px 0;
    }


    .description-container {
        padding: 20px;

        h3 {
            margin-bottom: 20px;
            font-size: 28px;
        }

        p {
            font-size: 18px;
        }
    }


    .contents-container {
        gap: 40px;
        
        .languages-container {
            padding: 25px 50px;
            border-radius: 25px;
            box-shadow: 0vw 10px 20px 0vw rgba(0,0,0,0.6);

            
            h3 {
                margin-bottom: 30px;
                font-size: 24px;
            }

            .list-container {
                gap: 15px;
                
                .technologies__details {
                    gap: 12px;
                }

                .checkmark-icon {
                    width: 20px;
                }

                .languages-item-container {
                    width: 100%;

                    h4 {
                        font-size: 17px;
                    }
                    
                    .progressBar {
                        border-radius: 25px;
                        height: 14px;
                        margin-bottom: 5px;
                        margin-top: 5px;
                    }

                    .text-light {
                        font-size: 16px;
                    }
                }
            }

        }
    }



}







/* ------------------ Media Queries (Medium devices) -------------------- */





@media screen and (max-width: 1024px) {

    .back-container {
        top: 1.5vw;
        left: 1.5vw;
        width: 8vw;
        height: 8vw;
    }





    /* ----------------- Project Images ----------------- */

    .image-container {
        width: 40vw;
        height: 40vw;
        margin-top: 5vw;
    }

    .monitor-container {
        transform: translate(35%, -10%);
    }


    .notebook-container {
        transform: translate(-30%, 0%);
    }




    /* --------------- Project Title -------------------- */

    .title-container {
        padding: 2vw 4vw;
        
        .title {  
            h1 {
                font-size: 3.5vw;
            }
        }

        .buttons-container {
            .button {
                padding: 1vw;

                a {
                    flex: 2;
                    font-size: 1.5vw;
                    line-height: 1;
                }

                .icon {
                    flex: 1;
                    width: 2vw;
                    height: 2vw;
                }
            }

        }
    }



    /* ---------------- Project contents ---------------- */

    .contents__container {
        margin-top: 2vw;
        grid-template-columns: 1fr;
        grid-template-rows: 45% 50%;
        gap:5%;
        padding-bottom: 15vw;

        .description-container {
            height: 100%;
            padding: 0vw 1vw 0 1vw;
            
            h3 {
                margin-bottom: 1vw;
                font-size: 2.2vw;
                color: var(--color-primary-variant);
            }

            p {
                font-size: 1.6vw;
            }
        }

        .contents-container {
            gap: 5vw;

            .languages-container {
                padding-top: 3vw;
                padding-bottom: 3vw;
                
                h3 {
                    font-size: 1.7vw;
                }

                .technologies__details {
                    gap: 1vw;

                    h4 {
                        font-size: 1.5vw !important;
                    }
                    
                    .checkmark-icon {
                        width: 1.5vw;
                        font-size: 1.2vw;
                        transform: translateY(14%);
                    }

                    .progressBar {
                        border-radius: 2vw;
                        height: 1.5vw;
                        margin-bottom: 0.5vw;
                    }

                    .text-light {
                        font-size: 1.5vw !important;
                    }
                }
            }
        }
    }
}








/* ------------------ Media Queries (Small devices) -------------------- */

@media screen and (max-width: 600px) {

    .project {
        padding: 2vw 0vw;
    }

    .back-container {
        width: 10vw;
        height: 10vw;
        border-width: .75vw;
    }





    /* ----------------- Project Images ----------------- */

    .image-container {
        width: 42vw;
        height: 42vw;
    }




    /* --------------- Project Title -------------------- */

    .title-container {
        padding: 2vw 4vw;
        
        .title {  
            h1 {
                font-size: 4.7vw;
            }
        }

        .buttons-container {
            .button {
                padding: 1vw;

                a {
                    flex: 2;
                    font-size: 2.1vw;
                    line-height: 1;
                }

                .icon {
                    flex: 1;
                    width: 3vw;
                    height: 3vw;
                }
            }

        }
    }





    /* ---------------- Project contents ---------------- */

    .contents__container {
        display: flex;
        flex-direction: column;
        gap: 10vw;

        .description-container {
            height: 100%;
            padding: 0vw 1vw 0 1vw;
            
            h3 {
                margin-bottom: 1.4vw;
                margin-top: 1.4vw;
                font-size: 3.5vw;
            }

            p {
                font-size: 2.8vw;
            }
        }

        .contents-container {
            gap: 8vw;

            .languages-container {
                padding-top: 3vw;
                padding-bottom: 3vw;
                
                h3 {
                    font-size: 3.2vw !important;
                }

                .technologies__details {
                    gap: 1.5vw;

                    h4 {
                        font-size: 2.6vw !important;
                    }
                    
                    .checkmark-icon {
                        width: 2.5vw;
                        font-size: 2.5vw;
                        transform: translateY(5%);
                    }

                    .progressBar {
                        height: 2vw;
                    }

                    .text-light {
                        font-size: 2.2vw !important;
                    }
                }
            }
        }
    }
}





</style>
