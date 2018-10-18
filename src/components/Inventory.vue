<template>
  <div class="inventory">
    <h1>Welcome</h1>
    <h2>Essential Links</h2>
    <p> {{results}} </p>
    <p> {{errors}} </p>
    <router-link v-bind:to="{name: 'home'}"> Home </router-link>
    <router-link v-bind:to="{name: 'order'}"> Order </router-link>

  <ul id="results">
    <li v-for="item in results.items">
        {{ item.name}}
        {{item.price | currency}}
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Inventory',
  data () {
    return {
      results: null,
      errors: []
    }
  }, 
  filters: {
    currency: function (cost) {
      return `$${cost/100}`
    }
  },
  mounted: function () {
    axios
    .get("http://jst.edchavez.com/api/inventory/getInventory")
    .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
