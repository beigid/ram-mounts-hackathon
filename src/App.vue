<template>
  <div id="app">
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bgdark p-4">
      <h4 class="text-white">Navigate to your needs!</h4>   
            <br><router-link to="/">Home</router-link>
            <br><router-link to="/Order">Order</router-link>
            <br><router-link to="/Inventory">Inventory</router-link>
    </div>
  </div>
  <nav class="navbar navbar-dark">
    <img src="../src/assets/ram-mounts.jpg" class="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    <router-view/>

<!-- Footer -->
<footer id="myFooter">
       
        <div class="footer-copyright">
            <p>© 2018 Darya's cool project </p>
        </div>
    </footer>
  <!-- Footer -->

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

#app a:hover {
  text-decoration:none;
}

.navbar {
  display: inherit;
  text-align:right;
}

.navbar-dark, .bgdark {
  background-color: #373a48 !important;
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

#myFooter{
    left: 0;
    padding-top:20px;
    position: absolute;
    width: 100%;
	background-color: #373a48;
	color:white;
}




@media screen and (max-width: 767px){
	#myFooter {
		text-align: center;
	}
}
</style>
