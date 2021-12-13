<template>
    <div>
        <section class="banner">
            <div class="container-fliud">
                <img alt="Vue logo" src="../assets/gamesbanner.png" width=100% height=48%>
                
            </div>
        </section>
        <section class="portfolio">
            <h1 style="color:white">Games I've Created</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                            <div class="card gameframe" >
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/braham.png">
                                    <h2>Braham</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Keep your island afloat amongst merciless wind currents!
                                    </p>
                                    <a class="btn btn-outline-secondary" href="https://alden-burgess.itch.io/braham">
                                        Itch.io
                                    </a>
                                </div>
                            </div>
                        <br>
                    </div>
                    <div class="col-md-6">
                            <div class="card gameframe" >
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/wheelchair.png">
                                    <h2>Wheely Stealy</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Roll your wheelchair around in a VR shopping spree!
                                    </p>
                                    <a class="btn btn-outline-secondary" href="https://alden-burgess.itch.io/wheely-stealy">
                                        Itch.io
                                    </a>
                                </div>
                            </div>
                        <br>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-md-6">
                            <div class="card gameframe" >
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/hooklinedexter.png">
                                    <h2>Hook, Line, and Dexter</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        A puzzle platformer featuring Dexter and his trusty bird.
                                    </p>
                                    <a class="btn btn-outline-secondary" href="https://alden-burgess.itch.io/hook-line-and-dexter">
                                        Itch.io
                                    </a>
                                </div>
                            </div>
                        <br>
                    </div> 
                    <div class="col-md-6">
                            <div class="card gameframe" >
                                <div class="card-head">
                                    <img alt="Vue logo" class="rounded-circle img-custom" src="../assets/rock.png">
                                    <h2>Rock Game</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Chuck rocks into the ocean!
                                    </p>
                                    <a class="btn btn-outline-secondary" href="https://alden-burgess.itch.io/rock-game">
                                        Itch.io
                                    </a>
                                </div>
                            </div>
                        <br>
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
    .gameframe{
        background-image: url('../assets/gameframe.png');
        background-size: contains;
    }
    .section{
        padding-top: 5%;
        padding-bottom: 10%;
        background-image: url('../assets/ocean.png');
        background-color: #6fe0e8;
    }
    .portfolio{
        background-color: #181818;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }
    .img-custom{
        width: 140px;
        height: 140px;
    }
</style>