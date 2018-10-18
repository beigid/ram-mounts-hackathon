<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>"

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

window.onload = function () {
 var logo = document.querySelector(".logo");
var btn = document.querySelector(".navbar-toggler");
btn.addEventListener("click", function(){
  logo.classList.add("hideShow");
  setTimeout(function(){
    logo.classList.remove("hideShow");
    }, 4000);
});
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.hello {
  margin-top:30px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.elementToFadeInAndOut {
    animation: fadeInOut 4s linear forwards;
}

.hideShow {
  display:none;
}

@keyframes fadeInOut {
 0% { opacity:0; }
 50% { opacity:1; } 
 100% { opacity:0; } 
}
</style>
