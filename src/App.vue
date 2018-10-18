<template>
  <div id="app">
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white">Nevigate to your needs!</h4>   
            <br><router-link to="/">Home</router-link>
            <br><router-link to="/Order">Order</router-link>
            <br><router-link to="/Inventory">Inventory</router-link>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <img src="../src/assets/ram-mounts.jpg" class="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    <router-view/>
  </div>
</template>




<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-decoration:none;
}

.navbar {
  display: inherit;
  text-align:right;
}

img.logo {
    width: 100%;
    max-width: 150px;
    position: absolute;
    left: 10px;
}

.elementToFadeInAndOut {
    animation: fadeInOut 4s linear forwards;
}
</style>
