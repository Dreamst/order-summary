<template>
  <div class="total-order">
      <h2 class="title uppercase my-30 text-center">Total commande</h2>

      <div class="bg-white box-shadow flex content-center ">
          <div class="total-amount">
              <p>Sous-totale <span>XX</span></p>
              <p>Livraison <span>XX</span></p>
              <p class="text-light uppercase">Total <span>XX</span></p>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "TotalOrder",
    props: {
        products: {
            type: Array,
            default: () => {}
        }
    },
    data() {
        return {
            total: ''
        }
    },
    methods: {
        calculate(data) {
            this.total = data;
        }
    },
    computed: {
        totalPaymentAmount() {
            return this.calculate(this.total);
        }
    },
}
</script>

<style>

</style>