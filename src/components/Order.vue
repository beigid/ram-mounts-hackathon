<template>
  <div class="order">


<div class="container">

  <h1 class=" display-4">Order Form</h1>
  <div class="box boxFix">

    <form id="merchant-form">
      <!-- name -->
      <div class="field" v-if="!isHidden">
        <label class="label">Item Name</label>
        <input type="text" class="input" name="name" v-model="name">
      </div>

      <!-- quantity -->
      <div class="field" v-if="!isHidden">
        <label class="label">Quantity </label>
        <input type="number" class="input" name="email" v-model="quantity">
      </div>

         <!-- description -->
      <div class="field" v-if="!isHidden">
        <label class="label">Description of Item Specifics <br><i>(Leave blank if not applicable)</i></label>
        <input type="email" class="input" name="email" v-model="description">
      </div>

    <div class="shippingOption" v-if="!isHidden">
       <label class="label">Shipment Method</label>
      <select v-model="selected">
  <option>US Standard</option>
  <option>International Standard</option>
  </select>
  </div>


      <!-- submit button -->
<div>
  <button v-on:click.prevent="handleData" v-on:click="isHidden = true"  v-if="!isHidden" type="submit" class="btn btn-success"> Submit
    </button>  
          <div v-if="submitted">
        <br><b> {{results.status = "Congratulations! Your order has been submitted"}} </b> 
        <br> Quantity {{quantity}} of {{name}} has been processed.
        <p><br><b> Transaction ID:</b> {{results.transactionId}} </p>
        <p><b> Merchant ID:</b> {{results.submittedOrder.merchantId}} </p>
        
         <p><b> Tax total:</b> {{results.submittedOrder.taxTotal | currency}} </p>
          <hr/>
          <p><b> Price:</b> {{results.submittedOrder.orderItems[0].price | currency}} </p>

      </div> 
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
      submitted: false,
      name: '',
      quantity: '',
      description: '',
      isHidden: false
    };
  },
  filters: {
    currency: function(cost) {
      return `$${cost}.00`;
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
  padding-top:40px;
  padding-bottom:50px  
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

button.btn  {
  text-align:center;
  margin-top:40px;
}

hr {
  background-color: #7385aa
}

.order {
  height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom left, #81dfff 0%, #1c6e98 100%);
  }

  form p {
    text-align: left
  }

  .shippingOption {
    text-align:left;
  }
</style>
