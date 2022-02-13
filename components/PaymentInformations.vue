<template>
  <div class="payment-informations">
    <h2 class="title uppercase my-30 text-center">Informations de paiement</h2>

    <div class="bg-white box-shadow p-10 flex flex--xs items-center">
      <div class="figure">
        <img :src="order.paymentMethod.image" alt="Tediber" />
      </div>

      <p class="pl-10 uppercase">{{ order.paymentMethod.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentInformations',
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
