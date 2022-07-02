<template>
  <div class="no-centered">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-2"></div>
        <div class="col-12 col-md-10 col-lg-5">
          <ThinkingCard />
          <PostsList :posts="posts" />
        </div>
        <div class="col-lg-3">
          <div class="sticky-top">
            <div class="card mt-3">
              <img
                src="assets/img/mock/ad.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Poker</h5>
                <p class="card-text">
                  <small>Compra hoy y disfruta con tus amigos!</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostsList from '~/components/card/post/PostsList.vue'
import ThinkingCard from '~/components/card/thinking/ThinkingCard.vue'
import Post from '~/interfaces/post'

export default Vue.extend({
  layout: 'blue',
  middleware: ['auth'],
  components: { ThinkingCard, PostsList },
  async asyncData({ $apiAuth }) {
    try {
      const res = await $apiAuth.post('/publication/all', {
        page: 0,
        size: 10,
      })
      const posts = res.data.data.publication
      return {
        posts,
      }
    } catch (error) {
      console.error(error)
      return {}
    }
  },
  data: () => ({
    posts: [] as Post[],
    perPage: 10,
    page: 0,
    isLoading: false,
  }),
  mounted() {
    this.scroll()
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight

        if (bottomOfWindow && !this.isLoading) {
          this.getPosts()
        }
      }
    },
    async getPosts() {
      try {
        this.page += 1
        this.isLoading = true
        const res = await this.$apiAuth.post('/publication/all', {
          page: this.page,
          size: this.perPage,
        })
        const postsAdd = res.data.data.publication
        this.isLoading = false
        this.posts = [ ...this.posts, ...postsAdd ]
      } catch (error) {
        console.error(error)
        return {}
      }
    },
  },
})
</script>

<style scoped lang="scss">
.sticky-top {
  top: 92px !important;
  z-index: 1;
}
</style>
