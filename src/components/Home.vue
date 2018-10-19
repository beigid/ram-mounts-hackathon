<template>
  <div class="home">
    <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-3">
            <div class="lead-form">
              <h1 class="text-center">Hackathon!</h1>
              <hr />
              <div class="row">
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
                  <span class="city-span">{{startingCity}}</span>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Ending Zip" v-model="endingZip">
                  <span class="city-span">{{endingCity}}</span>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <button class="btn btn-primary btn-block" id="submit-form">Submit</button>
                </div>
              </div>
            </div><!-- end of .lead-form -->
          </div> <!-- end of .col-md-6.col-md-offset-3 -->
        </div> <!-- end of .row -->
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
    background-color: red;
    background: url("https://c7.alamy.com/comp/BHAB5J/an-adult-dall-sheep-ram-standing-on-mount-margrett-with-the-alaska-BHAB5J.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
  
  .form-control {
    margin-bottom: 3px;
  }
</style>
