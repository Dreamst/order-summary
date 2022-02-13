<template>
  <div class="container">
    <OrderTracking :order="order" :products="products"/>
    <DeliveryInformations :order="order"/>
    <PaymentInformations :order="order"/>
    <TotalOrder :products="products"/>
    <TheAssistance />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      // products: [
      //   {
      //       "id": "1",
      //       "name": "L'incroyable matelas tediber",
      //       "price": {
      //           "price": "750",
      //           "currency": "€" 
      //       },
      //       "quantity": 1,
      //       "size": "160 x 200 cm",
      //       "image": "/assets/img/5.jpg"
      //   },
      //   {
      //       "id": "2",
      //       "name": "L'incroyable oreiller tediber",
      //       "price": {
      //           "price": "85",
      //           "currency": "€" 
      //       },
      //       "quantity": 2,
      //       "size": "60 x 60 cm",
      //       "image": "/assets/img/Tediber 0307-retouche.jpg"
      //   },
      //   {
      //       "id": "3",
      //       "name": "L'incroyable couette tediber",
      //       "price": {
      //           "price": "210",
      //           "currency": "€" 
      //       },
      //       "quantity": 1,
      //       "size": "240 x 220 cm",
      //       "image": "/assets/img/5886_600*600px.jpg"
      //   }
      // ],
      // order: {
      //   "idShip" : "405560003",
      //   "orderDate": "Wed May 01 2019 00:00:00 GMT+0200",
      //   "expeditionDate": "Fri May 03 2019 00:00:00 GMT+0200",
      //   "status": "2",
      //   "pickAPoint": {
      //       "name" :"POINT RELAIS",
      //       "adress": "57 rue Jean Pierre Timbaud PARIS",
      //       "postalCode": "75011",
      //       "country": "France"
      //   },
      //   "contactDetails": {
      //       "firstName": "Shannon",
      //       "lastName": "Honniball",
      //       "phoneNumber": "0664262272"
      //   },
      //   "estimatedDelivery": "Thu May 09 2019 00:00:00 GMT+0200",
      //   "deliveryMethod": "livraison standard en point relais",
      //   "deliveryPrice": "Gratuite",
      //   "paymentMethod": {
      //       "label": "visa",
      //       "image": "/assets/img/Logo_CB-1-1024x503.jpg"
      //   }
      //  } 
    }
  },
  async fetch() {
    console.log("[Index] 📡 Fetching order and product from store");
    await this.$store.dispatch("summary/orderSummaryAction");
  },
  computed: {
    order() {
      console.log(">>>>>", this.$store.getters["summary/getOrder"])
      return this.$store.getters["summary/getOrder"];
    },
    products() {
      console.log(">>>>>", this.$store.getters["summary/getProducts"])
      return this.$store.getters["summary/getProducts"];
    },
  },
}
</script>
