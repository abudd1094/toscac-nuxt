<template>
  <v-text-field :label="label" :placeholder="placeholder"></v-text-field>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CustomTextfield',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style></style>
