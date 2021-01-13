<template>
  <v-carousel continuous cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="sourceUrl + item.url"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data: () => {
    return {
      sourceUrl: process.env.strapiDevUrl,
    }
  },
})
</script>

<style></style>
