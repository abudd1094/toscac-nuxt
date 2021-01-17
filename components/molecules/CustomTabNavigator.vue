<template>
  <div>
    <v-tabs
      v-for="link in links"
      id="devOverride"
      :key="link.title"
      centered
      background-color="#F5F5F5"
    >
      <v-tab nuxt :to="`/${link.path}`">{{ link.title }}</v-tab>
    </v-tabs>
  </div>
</template>

<script lang="ts">
// extra height added to second v-tabs element on events tab... strange, overidden w id style below
import Vue from 'vue'

export default Vue.extend({
  props: {
    links: {
      type: Array,
      required: true,
      default: () => [{}],
    },
  },
})
</script>

<style>
#devOverride {
  flex: 0 1 auto;
}
</style>
