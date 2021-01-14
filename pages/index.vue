<template>
  <div>
    <img
      src="../assets/media/images/oth_goodhart.jpg"
      alt="oth"
      class="bg-top"
    />
    <div class="top">
      <v-row justify="center" align="center" class="logo-container">
        <img
          class="logo-lg"
          src="../assets/media/images/toscac_logo.png"
          alt="toscac logo"
        />
      </v-row>
    </div>
    <div class="middle">
      <v-row justify="center" align="center">
        <h1>{{ headline }}</h1>
      </v-row>
      <!-- <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="12">
          <p>{{ topText }}</p>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="6">
          <custom-carousel :items="media"></custom-carousel>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="bottom-text">
        <v-col cols="12" sm="12" md="12">
          <p class="testClass">{{ bottomText }}</p>
        </v-col>
      </v-row> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import { PagesResponse, pageNames } from '../types/strapiTypes'
// import CustomCarousel from '../components/molecules/CustomCarousel.vue'

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
        .get('http://localhost:1337/pages?pageName=home')
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

<style>
.theme--light.v-application {
  background: transparent;
}
.bg-top {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -10;
}
.top {
  background-image: linear-gradient(
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  height: 100vh;
  padding-top: 100px;
}
.middle {
  background-color: rgba(255, 255, 255, 1);
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
