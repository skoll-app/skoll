<template>
  <div class="my-3">
    <PostCard
      :key="i"
      v-for="(post, i) in posts"
      :post="post"
      @updateLikes="updateLikes"
    />
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
        comments: [],
        liked: true,
      },
      {
        id: '2',
        location: 'Villavo',
        imageUrl: 'assets/img/mock/6.jpg',
        user: {
          username: 'Sebastion cachon',
          profileImg: '',
        },
        likes: 3,
        text: 'Este es el texto',
        comments: [],
        liked: false,
      },
    ] as Post[],
  }),
  methods: {
    updateLikes(e: any) {
      let post = this.posts.find((post) => post.id === e.id)
      if (e.type === 'add') {
        post!.liked = true
        post!.likes += 1
      } else {
        post!.liked = false
        post!.likes -= 1
      }
    },
  },
})
</script>

<style scoped></style>
