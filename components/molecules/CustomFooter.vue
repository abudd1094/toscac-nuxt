<template v-slot:extension>
  <v-footer app>
    <v-row align="start" justify="space-between">
      <v-col justify="end">
        <img
          id="logo"
          src="../../assets/media/images/toscac_logo.png"
          alt="toscac logo"
        />
      </v-col>
      <v-col align-self="end" class="alignRight">
        <span>© 2018 - 2021 culturalartsco.com - All Rights Reserved.</span>
      </v-col>
    </v-row>
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
