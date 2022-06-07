<template>
  <div class="no-centered">
    <div class="container pages-content__section-secondary">
      <div class="row justify-content-center">
        <div class="col-9">
          <div class="d-flex justify-content-center">
            <div class="main-profile-img-container">
              <img
                src="/assets/img/user-3x.png"
                alt=""
                class="main-profile-img"
              />
            </div>
            <div class="user-info">
              <h3 class="uppercase">
                {{ user.firstName }} {{ user.lastName }}
              </h3>
              <p>{{ user.userName }}</p>
              <p>{{ user.totalpublications }} <span class="text-muted">publicaciones</span></p>
              <p>{{ user.about }}</p>
              <NuxtLink class="btn btn-warning btn-sm" to="/account/edit"
                >Editar perfil</NuxtLink
              >
            </div>
          </div>
          <hr class="mt-5 mb-3" />
          <div class="row posts-images">
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/1.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/2.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/3.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/4.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/5.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/6.jpg"
                alt=""
                v-lazy-load
              />
            </div>
            <div class="col-4">
              <img
                class="img-fluid"
                src="/assets/img/mock/7.jpg"
                alt=""
                v-lazy-load
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
    return {
      user: userData.data.data,
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
}
.user-info {
  p {
    margin-bottom: 0.5rem !important;
  }
}

.posts-images {
  .col-4 {
    margin-bottom: 1rem;
  }
}
</style>
