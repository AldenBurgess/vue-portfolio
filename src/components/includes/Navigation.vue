<template>
    <div class="scoped fix-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarTogglerDemo03" 
              aria-controls="navbarTogglerDemo03" 
              aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <span class="navbar-brand" href="#">Navbar</span>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">
                      Home 
                    <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/games">Games</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Webapps</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Other</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">About</a>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .fix-top{
        margin-top: -63px; 
        background-color: #173469;
    }
</style>