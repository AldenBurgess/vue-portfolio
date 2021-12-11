<template>
    <div>
        <section class="section">
            <div class="container-fliud">
                <img alt="Vue logo" class="rounded-circle" src="../assets/pp.png" width=30% height=30%>
                <h1 style="color:white;">Alden Burgess</h1>
                <p style="color:white;">Software Engineer, Web Developer, Game Programmer
                </p>
                <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button>
            </div>
        </section>
        <section class="portfolio">
            <h1>My Work</h1>
            <p>Projects I've created or contributed to</p>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/unity.png">
                                    <h2>Games</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        I'm a hobbyist Unity game developer, creating prototype games for fun and competition.
                                    </p>
                                    <router-link to="/games" class="btn btn-outline-secondary">Look</router-link>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/web.png">
                                    <h2>Web Apps</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        View web projects I've contributed to, from class assignments to hackathon submissions.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">See</button>
                                </div>
                            </div>
                        <br>
                    </div>  
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/questionmark.png">
                                <h2>Other Projects</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    IPhone apps! Video game mods! Even I don't know what all I'm putting in this category.
                                </p>
                                <button type="button" class="btn btn-outline-secondary">Observe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- modal for contact -->
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" 
                role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <contact/> <!-- where we utilized the newly imported component -->
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script lang="ts">
    import Contact from './Contact.vue'
    export default {
        name:'Lander',
        components:{
            Contact
        }  
    }
</script>

<style lang="css" scoped>
    .portfolio{
        background-image: url('../assets/portfoliobackground.png');
    }
    .section{
        padding-top: 5%;
        padding-bottom: 10%;
        background-image: url('../assets/ocean.png');
        background-color: #6fe0e8;
    }
    .portfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custom{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
</style>