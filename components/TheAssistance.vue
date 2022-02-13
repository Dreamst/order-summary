<template>
  <div class="assistance">
    <h2 class="title uppercase my-30 text-center">Besoin d'aide ?</h2>

    <InputsDropdown :values="assistances" :whichdropdown="1" />
  </div>
</template>

<script>
export default {
  name: 'TheAssistance',
  data() {
    return {}
  },
  async fetch() {
    console.log('[Assistance] 📡 Fetching help from store')
    await this.$store.dispatch('help/assistancesAction')
  },
  computed: {
    assistances() {
      return this.$store.getters['help/getAssistances']
    },
  },
  methods: {},
}
</script>
