<template>
  <div class="delivery-informations">
    <h2 class="title uppercase my-30 text-center">
      Informations sur la livraison
    </h2>

    <div
      class="delivery-informations__content bg-white box-shadow flex flex-row p-20"
    >
      <div class="p-20">
        <p class="title uppercase text-light">Adresse de collecte</p>
        <div class="details pt-15">
          <p class="uppercase">{{ order.pickAPoint.name }}</p>
          <p>{{ order.pickAPoint.adress }}</p>
          <p class="uppercase">{{ order.pickAPoint.city }}</p>
          <p>{{ order.pickAPoint.postalCode }}</p>
          <p>{{ order.pickAPoint.country }}</p>
        </div>
      </div>

      <div class="p-20">
        <p class="title uppercase text-light">Vos coordonnées</p>
        <div class="details pt-15">
          <p>{{ fullName }}</p>
          <p>{{ order.contactDetails.phoneNumber }}</p>
        </div>
      </div>

      <div class="p-20">
        <p class="title uppercase text-light">Livraison estimée</p>
        <div class="details pt-15">
          <p>{{ getDate(order.estimatedDelivery) }}</p>
        </div>
      </div>

      <div class="p-20">
        <p class="title uppercase text-light">Mode de livraison</p>
        <div class="details pt-15">
          <p>{{ order.deliveryMethod }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryInformations',
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    fullName() {
      return (
        this.order.contactDetails.firstName +
        ' ' +
        this.order.contactDetails.lastName
      )
    },
  },
  methods: {
    getDate(date) {
      const newDate = new Date(date)

      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

      return newDate.toLocaleDateString('fr-FR', options)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/vars/variables';

.delivery-informations {
  &__content {
    & > div {
      @media screen and (min-width: $screen-sm-min) {
        flex-grow: 1;
        width: 25%;
        padding: 0 20px;
      }
    }

    div:not(:last-child) {
      border-bottom: #ccc 1px solid;

      @media screen and (min-width: $screen-sm-min) {
        border-bottom: 0;
        border-right: #ccc 1px solid;
      }
    }
  }
}
</style>
