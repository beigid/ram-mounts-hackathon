<template>
  <div id="app">
<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bgdark p-4">
      <h4 class="text-white">Navigate to different views!</h4>   
            <br><router-link to="/" class="link">Home</router-link>
            <br><router-link to="/Inventory" class="link">Inventory</router-link>
            <br><router-link to="/Promos" class="link">Promotions</router-link>        
            <br><router-link to="/Shipping" class="link">Shipping</router-link>
            <br><router-link to="/Order" class="link">Order</router-link>
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

  </div>  
</template>




<script>
export default {
  name: 'App'
}

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".logo").fadeToggle()
    });
});

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

a {
  color: #d9eaee !important;
}

.link {
  display: inline-block;
}

.link:after {
  content: '';
  width: 0px;
  height: 1px;
  display: block;
  background: white;
  transition: 300ms;
}

.link:hover:after {
  width: 99%;
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
    max-width: 120px;
    position: absolute;
    left: 10px;
    top:5px;
}

#myFooter{
    padding-top:20px;
    width: 100%;
	background-color: #373a48;
	color:white;
}

h1 {
  padding: 40px 0 20px 0;
}

	#myFooter {
		text-align: center;
    padding-bottom:20px
	}

button.navbar-toggler {
      position: absolute;
    right: 10px;
}

.fa {
  padding: 10px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


@media (max-width:500px) {
#myFooter {
  position: fixed;
  bottom: 0;
}
}
</style>
