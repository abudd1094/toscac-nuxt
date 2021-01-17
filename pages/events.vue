<template>
  <div>
    <custom-tab-navigator
      :links="[{ path: 'programs', title: 'Programs' }]"
    ></custom-tab-navigator>
    <div class="padding-standard">
      <v-row justify="center" align="start">
        <h1>{{ headline }}</h1>
      </v-row>
      <v-row justify="center" align="start">
        <v-col cols="12" sm="12" md="12">
          <p>{{ topText }}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div v-if="posts">
        <div v-for="post in posts" :key="post.id">
          <custom-post
            :title="post.Title"
            :description="post.Description"
            :image="post.Image"
            :type="post.Type"
          ></custom-post>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import {
  PagesResponse,
  pageNames,
  PostsResponse,
  PostsData,
} from '../types/strapiTypes'
import CustomTabNavigator from '../components/molecules/CustomTabNavigator.vue'

export default Vue.extend({
  components: {
    CustomTabNavigator,
  },
  data: (): PostsData => {
    return {
      bottomText: '',
      created_at: '',
      headline: '',
      id: 0,
      media: null,
      pageName: pageNames.events,
      posts: [],
      published_at: '',
      topText: '',
      updated_at: '',
    }
  },
  mounted() {
    this.$nextTick(() => {
      axios
        .get('http://localhost:1337/pages?pageName=events')
        .then((res: AxiosResponse) => {
          this.renderPageData(res.data[0])
        })
      axios
        .get('http://localhost:1337/posts?Type=event')
        .then((res: AxiosResponse) => {
          this.renderPosts(res.data)
        })
    })
  },
  methods: {
    renderPageData(res: PagesResponse): void {
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
    renderPosts(posts: PostsResponse[] | []) {
      this.posts = posts
    },
  },
})
</script>
