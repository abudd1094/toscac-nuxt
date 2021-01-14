<template v-slot:extension>
  <v-footer>
    <v-container>
      <v-row align="start" justify="space-between">
        <v-col>
          <img
            class="logo-md"
            src="../../assets/media/images/toscac_logo.png"
            alt="toscac logo"
          />
        </v-col>
        <v-col>
          <h4>Contact Us</h4>
          <contact-block></contact-block>
        </v-col>
        <v-col align-self="center" class="alignRight">
          <img
            id="badge"
            src="../../assets/media/images/bcoc_badge.jpg"
            alt="brewster chamber of commerce logo"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <span class="imprint"
          >© 2018 - 2021 culturalartsco.com - All Rights Reserved.</span
        >
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
@import '../../assets/scss/main.scss';
.imprint {
  color: $toscac-color-primary;
}
</style>
