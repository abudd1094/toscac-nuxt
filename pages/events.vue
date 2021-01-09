<template>
  <v-row>
    <v-col class="text-center">
      <div>Events</div>
      <CustomButton />
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import CustomButton from '../components/CustomButton'

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
