<template>
  <div class="my-3">
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
  data: () => ({
    posts: [
      {
        id: '1',
        location: 'Barranquilla',
        imageUrl: 'assets/img/mock/1.jpg',
        user: {
          username: 'Adan F',
          profileImg: '',
        },
        likes: 9,
        text: 'Este es el texto',
        comments: []
      },
    ] as Post[],
  }),
})
</script>

<style scoped></style>
