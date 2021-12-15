<template>
    <div>
        <section class="portfolio">
            <h1>Webapps</h1>
            <p>Web development projects I've worked on</p>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/unity.png">
                                    <h2>Highlite</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Online dyslexia reading aid
                                    </p>
                                    <router-link to="/games" class="btn btn-outline-secondary">Github</router-link>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-4">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/web.png">
                                    <h2>"The Farm" PET</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Webapp for requesting, sending and receiving peer review feedback
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">Github</button>
                                </div>
                            </div>
                        <br>
                    </div>  
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/questionmark.png">
                                <h2>Message in a Bottle</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    WIP app for leaving AR notes for other users, tied to real world locations.
                                </p>
                                <button type="button" class="btn btn-outline-secondary">Github</button>
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
        name:'Webapps',
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