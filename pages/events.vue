<template>
  <v-row>
    <v-col class="text-center">
      <h1>{{ headline }}</h1>
      <p>{{ topText }}</p>
      <p v-if="bottomText">{{ bottomText }}</p>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import { PagesResponse, pageNames } from '../types/strapiTypes'

export default Vue.extend({
  data: (): PagesResponse => {
    return {
      bottomText: '',
      created_at: '',
      headline: '',
      id: 0,
      media: null,
      pageName: pageNames.events,
      published_at: '',
      topText: '',
      updated_at: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get('http://localhost:1337/pages?pageName=events')
        .then((res: AxiosResponse) => {
          this.renderData(res.data[0])
        })
    })
  },
  methods: {
    renderData(res: PagesResponse): void {
      this.bottomText = res.bottomText
      this.created_at = res.created_at
      this.headline = res.headline
      this.id = res.id
      this.media = res.media
      this.pageName = res.pageName
      this.published_at = res.published_at
      this.topText = res.topText
      this.updated_at = res.updated_at
    },
  },
})
</script>
