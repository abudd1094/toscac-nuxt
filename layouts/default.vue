<template>
  <v-app>
    <v-app-bar app>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <CustomAppbar />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import CustomAppbar from '../components/molecules/CustomAppbar'

export default {
  components: {
    CustomAppbar,
  },
}
</script>
