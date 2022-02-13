<template>
  <div class="container">
    <OrderTracking :order="order" :products="products" />
    <DeliveryInformations :order="order" />
    <PaymentInformations :order="order" />
    <OrderAmount :products="products" :order="order" />
    <TheAssistance />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  async fetch() {
    console.log('[Index] 📡 Fetching order and product from store')
    await this.$store.dispatch('summary/orderSummaryAction')
  },
  computed: {
    order() {
      return this.$store.getters['summary/getOrder']
    },
    products() {
      return this.$store.getters['summary/getProducts']
    },
  },
}
</script>
