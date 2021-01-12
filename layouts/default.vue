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
    <CustomFooter />
  </v-app>
</template>

<script>
import CustomAppbar from '../components/molecules/CustomAppbar'
import CustomFooter from '../components/molecules/CustomFooter'

export default {
  components: {
    CustomAppbar,
    CustomFooter,
  },
}
</script>
