<template>
  <v-row>
    <v-col class="text-center">
      <div>Hello</div>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  mounted() {
    this.$nextTick(function () {
      axios
        .get('http://localhost:1337/posts')
        .then((res) => console.log(res.data))
    })
  },
}
</script>
