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
    <div :class="['middle-top', 'padding-standard']">
      <v-row justify="center" align="center">
        <h1>{{ headline }}</h1>
      </v-row>
      <v-row justify="center" align="center">
        <!-- <p>{{ topText }}</p> -->
        <p>
          We are a 501(c)(3) not-for-profit corporation dedicated to creating
          and sustaining cultural arts within the Town of Southeast and its
          surrounding region. We were established as the Town of Southeast
          Cultural Arts Coalition (CAC) in August 2010 with the purpose, as
          detailed in the incorporation papers, “... to promote and raise funds
          for the development and effective management of affordable, accessible
          performance space that will provide citizens of the Town of Southeast
          opportunities to participate in and appreciate cultural arts,
          including lectures, theater, dance, film, music, visual arts, and
          inclusive community events.”
        </p>
      </v-row>
    </div>
    <div :class="['middle', 'padding-standard']">
      <v-row justify="center" align="center">
        <h1>Our current endeavors include:</h1>
        <ol>
          <li>
            Spearheading the restoration of the Southeast Old Town Hall, a
            historic landmark within the Village of Brewster
          </li>
          <li>
            Operating the Studio Around the Corner, in which we present our own
            cultural events and host events by individual artists and other
            cultural organizations. We currently have a long term lease both in
            the basement of the Old Town Hall, which includes the Studio, and on
            the upper main floor, which houses a beautiful theater space, an
            ideal venue for music concerts, theater productions, dance
            performances, film screenings, lectures and meetings. When the
            restoration is complete, we will expand operations to encompass
            events in the theater as well as the Studio Around the Corner.
            Together with the Southeast Museum, the middle floor tenant, we aim
            to create a truly vibrant cultural hub that will certainly foster
            the revitalization of downtown Brewster and enrich the Town of
            Southeast and the surrounding communities.
          </li>
        </ol>
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
      </v-row>
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
p {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
li {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
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
.middle-top {
  background-color: rgba(255, 255, 255, 1);
}
.middle {
  background-color: rgb(245, 245, 245);
}
.padding-standard {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>
