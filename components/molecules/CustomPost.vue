<template>
  <v-container>
    <v-row justify="center" align="start">
      <h1>{{ title }}</h1>
    </v-row>
    <v-row justify="center" align="start">
      <img :src="'http://localhost:1337' + image.url" alt="" />
    </v-row>
    <v-row>
      <p>{{ description }}</p>
    </v-row>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
// TO DO: RESOLVE BASE URL AND ENVIRONMENTS
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    description: {
      type: String,
      required: true,
      default: '',
    },
    image: {
      type: Object,
      required: true,
      default: null,
    },
    type: {
      type: String,
      required: true,
      default: '',
    },
  },
})
</script>

<style></style>
