<template>
  <div class="order-tracking">
    <h2 class="title uppercase mb-30 text-center">Suivi de commande</h2>

    <div class="flex gap-30">
      <div class="suivi">
        <div class="suivi__informations">
          <p class="text-sm">
            N° de commande: <span class="text-light">{{ order.idShip }}</span>
          </p>
          <p class="text-sm pt-15">
            Date de commande:
            <span class="text-light">{{ getDate(order.orderDate) }}</span>
          </p>
          <p class="text-sm pt-15">
            Date d'expédition:
            <span class="text-light">{{ getDate(order.expeditionDate) }}</span>
          </p>
        </div>

        <InputsDropdown :statusdelivery="order.status" />
      </div>

      <div class="articles">
        <p class="text-sm uppercase">
          Articles:
          <span>({{ products.length }})</span>
        </p>

        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white box-shadow flex flex--xs mb-20 p-10"
        >
          <img :src="product.image" alt="Tediber" />

          <div class="content pl-10 flex flex--col content-between">
            <p class="text-md uppercase text-light">{{ product.name }}</p>
            <p class="text-md uppercase text-light">
              {{ product.price.price }}{{ product.price.currency }}
            </p>
            <div>
              <span class="text-sm uppercase"
                >Taille: {{ product.quantity }}</span
              >
              <br />
              <span class="text-sm uppercase">Qté: {{ product.size }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderTracking',
  props: {
    order: {
      type: Object,
      default: () => {},
    },
    products: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      date: '',
    }
  },
  computed: {},
  methods: {
    getDate(date) {
      const newDate = new Date(date)

      const options = { year: 'numeric', month: 'long', day: 'numeric' }

      return newDate.toLocaleDateString('fr-FR', options)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars/variables';

.suivi {
  width: 100%;

  @media screen and (min-width: $screen-sm-min) {
    margin-right: 2%;
    padding-top: 0;
    width: 48%;
  }
}

.articles {
  padding-top: 20px;
  width: 100%;

  @media screen and (min-width: $screen-sm-min) {
    padding-top: 0;
    width: 50%;
  }

  img {
    width: 30%;
  }
}
</style>
