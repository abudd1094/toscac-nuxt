<template>
  <v-btn elevation="2">{{ title }}</v-btn>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style></style>
