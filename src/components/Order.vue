<template>
  <div class="order">


<div class="container">

  <h1 class="title has-text-centered">Vue.js Form Processing</h1>
  <div class="box boxFix">

    <form id="merchant-form">
      <!-- name -->
      <div class="field">
        <label class="label">Name</label>
        <input type="text" class="input" name="name">
      </div>

      <!-- quantity -->
      <div class="field">
        <label class="label">Quantity (available {{obj.orderItems[0].stock}} )</label>
        <input type="text" class="input" name="email">
      </div>

         <!-- quantity -->
      <div class="field">
        <label class="label">Quantity</label>
        <input type="email" class="input" name="email">
      </div>

      <!-- submit button -->

  <button v-on:click.prevent="handleData" type="submit" class="btn btn-success"> Submit
    </button>  
          <div v-if="submitted">
        <p><br> {{results.status = "Congratulations! Your order has been submitted"}}  </p>
        <p><br> {{results.message}} </p>
      </div> 
  </form>

  </div>
</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      results: null,
      errors: [],
      submitted: false
    };
  },
  filters: {
    currency: function(cost) {
      return `$${cost / 100}`;
    }
  },
  methods: {
    handleData: function() {
      const obj = {
        merchantId: "sample string 1",
        orderItems: [
          {
            qtyOrdered: 1,
            name: "sample string 2",
            description: "sample string 3",
            price: 4,
            itemId: "sample string 5",
            inStock: true,
            stock: 1
          }
        ],
        taxTotal: 2,
        shippingTotal: 3,
        merchantOrderReference: "sample string 5",
        orderId: "sample string 6x",
        orderDate: 1,
        signature: "sample string 7"
      };
      axios.post("http://jst.edchavez.com/api/order", obj)
      .then( response => {
        this.results = response.data;
        this.submitted = true;
      })
      .catch( error => {
        this.errors = push(error)
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

.label {
  text-align:left;
}

.boxFix {
  width:40%;
  margin: 0 auto;
}
</style>
