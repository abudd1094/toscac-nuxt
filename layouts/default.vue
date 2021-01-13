<template>
  <v-app>
    <custom-appbar></custom-appbar>
    <v-main class="user-margin-page">
      <nuxt></nuxt>
    </v-main>
    <custom-footer></custom-footer>
  </v-app>
</template>

<script>
import CustomAppbar from '../components/molecules/CustomAppbar.vue'
import CustomFooter from '../components/molecules/CustomFooter.vue'

export default {
  components: {
    CustomAppbar,
    CustomFooter,
  },
}
</script>
