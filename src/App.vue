<template>
  <div id="app">
    <navigation/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from './components/includes/Navigation.vue'

import Vue from 'vue';
import App from './App.vue'
import router from './router'; //import router.js into main.js
new Vue({
  render: h => h(App),
  //store,(where does this come in?)
  router //added router instance
}).$mount('#app')

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
