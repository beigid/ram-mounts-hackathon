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
      msg: 'Welcome to my Hackathon Project!'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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
  display: block;
  margin: 0 10px;
}
a {
  color: #55b6cd;
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
