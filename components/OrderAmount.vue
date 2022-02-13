<template>
  <div class="total-order">
    <h2 class="title uppercase my-30 text-center">Total commande</h2>

    <div class="bg-white box-shadow flex content-center">
      <ul class="total-amount">
        <li class="flex flex--xs content-between mb-10">
          <p>Sous-totale</p>
          <p>{{ totalPaymentAmount }}</p>
        </li>
        <li class="flex flex--xs content-between mb-10">
          <p class="uppercase">Livraison</p>
          <p>{{ order.deliveryPrice }}</p>
        </li>
        <li class="flex flex--xs content-between mb-10">
          <p class="uppercase text-light">Total</p>
          <p class="text-light">{{ totalPaymentAmount }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderAmount',
  props: {
    products: {
      type: Array,
      default: () => {},
    },
    order: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      total: [],
    }
  },
  methods: {
    calculate(tab) {
      tab.forEach((item) => {
        this.total.push(Number(item.price.price))
      })

      return this.total.reduce((a, b) => a + b)
    },
  },
  computed: {
    totalPaymentAmount() {
      return this.calculate(this.products)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars/variables';

.total-amount {
  padding: 10px 30px;

  @media screen and (min-width: $screen-sm-min) {
    width: 25%;
  }
}
</style>
