<template>
  <div class="padding-standard">
    <v-row justify="center" align="start">
      <h1>{{ headline }}</h1>
    </v-row>
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="12">
        <p>{{ topText }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import { PagesResponse, pageNames } from '../types/strapiTypes'

export default Vue.extend({
  // components: {
  //   CustomCarousel,
  // },
  data: (): PagesResponse => {
    return {
      bottomText: '',
      created_at: '',
      headline: '',
      id: 0,
      media: [],
      pageName: pageNames.home,
      published_at: '',
      topText: '',
      updated_at: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get('http://localhost:1337/pages?pageName=about')
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
