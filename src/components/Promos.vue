<template>
  <div class="promos">
    <h1 class="display-4">Promotions</h1>
<table id="invTable">
  <thead>
    <tr>
       <th>Promotion Name</th>
       <th> Duration (Start to End)</th>
       <th> Minimum Order Value</th>
      <th> Promo Amounts</th>
      <th> Promo ID</th>
      <th> Promotion Type</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in results">
      <td> {{item.promotionName}} </td>
      <td> {{item.start}}  - {{item.end}}</td>
      <td> {{item.minimumOrderValue}} </td>
      <td> {{item.promoAmt}} </td>
      <td> {{item.promoId}} </td>
      <td> {{item.promotionType}} </td>
    </tr>
  </tbody>
</table>

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
    .get("http://jst.edchavez.com/api/promo")
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

#myFooter {
  bottom:0 imporant!;
}

#invTable {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#invTable td, #invTable th {
    border: 1px solid #ddd;
    padding: 8px;
}

#invTable tr:nth-child(even){background-color: #f2f2f2;}

#invTable tr:hover {background-color: #ddd;}

#invTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #204448;
    color: white;

}
</style>
