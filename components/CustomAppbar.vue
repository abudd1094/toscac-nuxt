<template v-slot:extension>
  <v-tabs align-with-title>
    <v-tab><nuxt-link to="/">Home</nuxt-link></v-tab>
    <v-tab><nuxt-link to="/events">Events</nuxt-link></v-tab>
    <v-tab>Tab 3</v-tab>
  </v-tabs>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style></style>
