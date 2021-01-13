<template v-slot:extension>
  <v-footer app>
    <v-container>
      <v-row align="start" justify="space-between">
        <v-col justify="end">
          <img
            id="logo"
            src="../../assets/media/images/toscac_logo.png"
            alt="toscac logo"
          />
        </v-col>
        <v-col justify="center" align-self="center" class="alignRight">
          <img
            id="badge"
            src="../../assets/media/images/bcoc_badge.jpg"
            alt="brewster chamber of commerce logo"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <span>© 2018 - 2021 culturalartsco.com - All Rights Reserved.</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.alignRight {
  text-align: right;
}
#logo {
  width: 20rem;
}
</style>
