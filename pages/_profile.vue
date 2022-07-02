<template>
  <div class="no-centered">
    <div class="container pages-content__section-secondary">
      <div class="row justify-content-center">
        <div class="col-9">
          <div
            class="d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start"
          >
            <div class="main-profile-img-container">
              <img
                data-src="assets/img/user-3x.png"
                alt=""
                class="main-profile-img"
                v-lazy-load
              />
            </div>
            <div class="user-info">
              <h3 class="uppercase">
                {{ user.firstName }} {{ user.lastName }}
              </h3>
              <p>{{ user.userName }}</p>
              <p>
                {{ user.totalpublications }}
                <span class="text-muted">publicaciones</span>
              </p>
              <p>{{ user.about }}</p>
              <NuxtLink class="btn btn-warning btn-sm" to="/account/edit"
                >Editar perfil</NuxtLink
              >
            </div>
          </div>
          <hr class="mt-3 mt-md-5 mb-3" />
          <div class="row posts-images">
            <div
              class="col-12 col-md-6 col-lg-4 mb-4"
              v-for="(post, i) in posts"
              :key="i"
            >
              <img
                class="img-fluid post-img"
                :data-src="post.url"
                alt="post.url"
                v-lazy-load
                @error="$addErrorImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import User from '~/interfaces/user'

export default Vue.extend({
  async asyncData({ $apiAuth }) {
    const userData = await $apiAuth.get('/client/')
    const posts = await $apiAuth.get('/publication/')
    return {
      user: userData.data.data,
      posts: posts.data.data.publicationAvailable,
    }
  },
  head() {
    return {
      title: this.user.firstName || 'nada',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: this.user.userName || 'username',
          name: `${this.user.firstName} ${this.user.lastName}` || 'name-xx',
          content: this.user.about || 'about-xx',
          ogImage: this.user.logo || 'logo-xx',
        },
      ],
    }
  },
  data: () => ({
    user: {} as User,
    posts: [],
  }),
})
</script>

<style scoped lang="scss">
.main-profile-img-container {
  margin-right: 80px;
  .main-profile-img {
    height: 150px;
    width: 150px;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 12px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-right: 40px;
  }
}
.user-info {
  p {
    margin-bottom: 0.5rem !important;
  }
}

.posts-images {
  .post-img {
    width: 100%;
    height: 100%;
  }
}
</style>
