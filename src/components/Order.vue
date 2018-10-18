<template>
  <div class="order">
    <h1>Order</h1>
    <h2>Essential Links</h2>
    <p> {{results}} </p>
    <p> {{errors}} </p>
   

  <form v-on:click.prevent="handleData">
  
  <button type="submit"> Submit
    </button>  
  </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      results: null,
      errors: []
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
</style>
