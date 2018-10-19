<template>
  <div class="home">
    <div class="container">
          <div class="col-md-12 col-md-offset-3">
            <div class="lead-form">
              <h1 class="text-center display-4">Hackathon!</h1>
              <hr />
              <div class="text">
              <p> {{msg}} </p>
              <p> Please navigate to the various areas to check inventory, shipping costs, promotions, and submit an order! </p>
              </div>
            </div><!-- end of .lead-form -->
          </div> <!-- end of .col-md-6.col-md-offset-3 -->
      </div> <!-- end of .container -->
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
<style scoped>

div.home {
  padding-top:30px;
}
h1, h2 {
  font-weight: normal;
   padding-top:40px;
   padding-bottom:50px  
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

.home {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom left, #81dfff 0%, #1c6e98 100%);
  }

  #submit-form {
    margin-top: 40px;
  }
  
  .lead-form {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 10px 50px 30px 50px;
  
  }
  
  span.city-span {
    color: (#444);
    text-transform: uppercase;
    margin-left: 5px;
    margin-top: 10px;
  }
  
 .text {
   font-size: 30px;
 }

 .text p {
    padding-bottom:3%;
 }


</style>
