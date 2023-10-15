<script setup>
    import { RouterLink, useRouter } from 'vue-router';

    import datachainImg from '../assets/images/homePage.png';
    import monitor from '../assets/images/monitor.png';
    import notebook from '../assets/images/notebook.png';
    import studentAccountPageWithDegree from '../assets/images/studentAccountPageWithDegree.png';
    import IconBackArrow from '../components/icons/IconBackArrow.vue';
    import IconGoogleDrive from '../components/icons/IconGoogleDrive.vue';
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
                    <img class="datachain-image-project" :src="datachainImg" alt="Datachain" />
                    <img class="desktop-img" :src="monitor" alt="Monitor SVG" />
                </div>
                <div class="notebook-container">
                    <div class="blank-bg-project"></div>
                    <img class="studentAccountPageWithDegree-image" :src="studentAccountPageWithDegree" alt="Student Account Page with Degree" />
                    <img class="notebook-img-project" :src="notebook" alt="Notebook SVG" />
                </div>
            </div>

            <div class="title-container">
                <div class="title">
                    <h1>Datachain</h1>
                </div>

                <div class="buttons-container">
                    <div class="button">
                        <a href="https://github.com/joethompson1/Datachain" target="_blank">Github </a>
                        <div class="icon">
                            <IconGithub />
                        </div>
                    </div>
                    <div class="button">
                        <a href="https://drive.google.com/file/d/1ZvBKH6Ezdz7gkq5NJTThPwjUGQTCqliJ/view?usp=sharing" target="_blank">Project Report </a>
                        <div class="icon">
                            <IconGoogleDrive />
                        </div>
                    </div>
                </div>
            </div>

            <div class="contents__container">
                <div class="description-container">
                    <h3>Description:</h3>
                    <p>
                        This application was created to try and highlight to universities 
                        that the adoption of blockchain technology is not only beneficial to their organisation, 
                        but also to their past, present, and future students. This is because creating a digital 
                        degree brings with it added utility to both students and employers, whilst at the same 
                        time helping to prevent against the falsifying of degree qualifications.<br /><br />


                        Datachain makes use of a variety of languages and technologies in order to achieve this. 
                        By leveraging the HyperLedger Fabric permissioned blockchain network to deploy custom 
                        smart contracts written using the programming language Go, I was able to create an 
                        immutable record of transactions specifically for the distribution and viewing of digital 
                        degrees.<br /><br />

                        Using Express.Js and jinja, I created a frontend, allowing users to interact with the 
                        HyperLedger Fabric blockchain network. This was done via API calls to the smart contract, 
                        allowing users to award, view and share university degrees.
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
                                    <h4>CSS</h4>
                                    <div id="CSS" class="progressBar" style="width: 97.2%" />
                                    <small class="text-light">26.2%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>JavaScript</h4>
                                    <div id="JavaScript" class="progressBar" style="width: 100%" />
                                    <small class="text-light">28.8%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Go</h4>
                                    <div id="Go" class="progressBar" style="width: 9.7%" />
                                    <small class="text-light">2.6%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Shell</h4>
                                    <div id="Shell" class="progressBar" style="width: 73.6%" />
                                    <small class="text-light">26.4%</small>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>EJS</h4>
                                    <div id="Shell" class="progressBar" style="width: 73.6%" />
                                    <small class="text-light">17.9%</small>
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
                                    <h4>HyperLedger Fabric</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>MongoDB</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Mongoose</h4>
                                </div>
                            </div>
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Express</h4>
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
                            <div class="technologies__details">
                                <IconCheckMark
                                    class="checkmark-icon"
                                    :color="'var(--color-red)'"
                                />
                                <div class="languages-item-container">
                                    <h4>Docker</h4>
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
