<template>
  <div class="mb-3">
    <PostCard :key="i" v-for="(post, i) in posts" :post="post" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Components
import PostCard from './PostCard.vue'
// Interfaces
import Post from '~/interfaces/post'

export default Vue.extend({
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostCard,
  },
  methods: {
    // updateLikes(e: any) {
    //   let post = this.posts.find((post) => post.id === e.id)
    //   if (e.type === 'add') {
    //     post!.liked = true
    //     post!.likes += 1
    //   } else {
    //     post!.liked = false
    //     post!.likes -= 1
    //   }
    // },
  },
})
</script>

<style scoped></style>
