<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <CustomAppbar />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import CustomAppbar from '../components/CustomAppbar'

export default {
  components: [CustomAppbar],
}
</script>
