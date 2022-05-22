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
      {
        id: '3',
        location: 'Villavo',
        imageUrl: 'assets/img/mock/3.jpg',
        user: {
          username: 'El otro cachon',
          profileImg: '',
        },
        likes: 3,
        text: 'Este es el texto',
        comments: [
          {
            id: '31',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'primero',
            },
          },
          {
            id: '32',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'segundo',
            },
          },
          {
            id: '33',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'tercero',
            },
          },
          {
            id: '34',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'cuarto',
            },
          },
          {
            id: '35',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'quinto',
            },
          },
          {
            id: '36',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'sexto',
            },
          },
          {
            id: '37',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'septimo',
            },
          },
          {
            id: '38',
            text: 'Este es un comentario mas o menos largo para ver que pasa si quiero truncar el testo a los ochenta caracteres',
            user: {
              username: 'octavo',
            },
          },
        ],
        liked: true,
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
