<template>
  <div class="order-tracking">
      <h2 class="title uppercase mb-30 text-center">Suivi de commande</h2>

      <div class="flex">
        <div class="suivi w-50">
          <div class="suivi__informations">
            <p class="text-sm">N° de commande: <span class="text-light">{{ order.idShip }}</span></p>
            <p class="text-sm pt-15">Date de commande: <span class="text-light">{{ getDate(order.orderDate )}}</span></p>
            <p class="text-sm pt-15">Date d'expédition: <span class="text-light">{{ getDate(order.expeditionDate) }}</span></p>
          </div>

          <div class="dropdown">
            <!-- <Dropdown /> -->
          </div>
        </div>

        <div class="articles w-50">
          <p class="text-sm uppercase">
            Articles: 
            <span>({{ products.length }})</span>
          </p>

          <div v-for="product in products" :key="product.id" class="bg-white box-shadow flex flex-row mb-30 p-10">
            <img :src="product.image" alt="Tediber" />

            <div class="content pl-10">
              <p class="text-md uppercase text-light">{{ product.name }}</p>
              <p class="text-md uppercase text-light">{{ product.price.price }}{{ product.price.currency }}</p>
              <div>
                <span class="text-sm uppercase">Taille: {{ product.quantity }}</span> <br>
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
      date: ''
    }
  },
  computed: {},
  methods: {
    getDate(date) {
      const newDate = new Date(date)

      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return newDate.toLocaleDateString("fr-FR", options)
    }
  },
}
</script>

<style lang="scss" scoped>
.articles {
  img {
    width: 30%;
  }
}
</style>