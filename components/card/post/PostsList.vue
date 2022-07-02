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
  components: {
    PostCard,
  },
  mounted() {
    this.getPosts()
  },
  data: () => ({
    posts: [] as Post[],
  }),
  methods: {
    async getPosts() {
      try {
        const headers = { 'Content-Type': 'application/json' }
        const res = await this.$apiAuth.post(
          '/publication/all',
          {
            page: 0,
            size: 50,
          },
          { headers }
        )
        console.log(res.data.data.publication)
        this.posts = res.data.data.publication
      } catch (error) {}
    },
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
