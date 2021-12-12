<template>
    <div>
        <section class="banner">
            <div class="container-fliud">
                <img alt="Vue logo" src="../assets/gamesbanner.png" width=100% height=48%>
                
            </div>
        </section>
        <section class="portfolio">
            <h1>Games I've Created</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/unity.png">
                                    <h2>Braham</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Strategy
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">
                                        Look
                                    </button>
                                </div>
                            </div>
                        <br>
                    </div>
                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/web.png">
                                    <h2>Wheely Stealy</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        VR Wheelchair Sim
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary">See</button>
                                </div>
                            </div>
                        <br>
                    </div>  
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/questionmark.png">
                                <h2>Hook, Line and Dexter</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    Platformer
                                </p>
                                <button type="button" class="btn btn-outline-secondary">Observe</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-head">
                                <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/questionmark.png">
                                <h2>Rock Game</h2>
                            </div>
                            <hr>
                            <div class="card-body">
                                <p>
                                    Arcade 
                                </p>
                                <button type="button" class="btn btn-outline-secondary">Observe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    
</template>

<script>
    export default { 
        name: 'Games'
    }
</script>

<style lang="css" scoped>
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