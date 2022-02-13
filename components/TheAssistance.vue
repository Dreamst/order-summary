<template>
  <div class="assistance">
      <h2 class="title uppercase my-30 text-center">Besoin d'aide ?</h2>
      
      <div v-for="toto in assistances" :key="toto.id">
        {{toto.title}} {{toto.text}}
      </div>
      <!-- <Dropdown :value="assistances" /> -->
    </div>
</template>

<script>
export default {
    name: "TheAssistance",
    data() {
        return {

        }
    },
    async fetch() {
      console.log("[Assistance] 📡 Fetching help from store");
      await this.$store.dispatch("help/assistancesAction");
    },
    computed: {
      assistances() {
        return this.$store.getters["help/getAssistances"];
      }
    },
    methods: {}
}
</script>

<style>

</style>