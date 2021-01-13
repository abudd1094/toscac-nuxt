<template>
  <v-tabs
    id="devOverride"
    centered
    background-color="#F5F5F5"
    class="user-margin-bottom"
  >
    <v-tab nuxt to="/">Home</v-tab>
    <v-tab nuxt to="/events">Events</v-tab>
  </v-tabs>
</template>

<script lang="ts">
// extra height added to second v-tabs element on events tab... strange, overidden w id style below
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
#devOverride {
  flex: 0 1 auto;
}
</style>
