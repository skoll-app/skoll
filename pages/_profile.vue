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
                :data-src="user.logo || 'assets/img/user-3x.png'"
                alt="avatar"
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
              class="col-12 col-md-6 col-lg-3 mb-4 position-relative"
              v-for="(post, i) in posts"
              :key="i"
            >
              <div class="position-relative xx">
                <img
                  class="w-100 h-100"
                  :data-src="post.url"
                  alt="post.url"
                  @error="handleError($event, i)"
                  v-lazy-load
                />
                <div :id="`overlay-img-${i}`" class="overlay cursor-pointer">
                  <div
                    class="d-flex justify-content-center align-items-center h-100"
                  >
                    <EyeIcon
                      :id="`overlay-eye-${i}`"
                      class="icon text-white me-2"
                    />
                    <TrashIcon
                      class="icon text-white"
                      @click="showDeletePostModal(post.id)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import User from '~/interfaces/user'

import TrashIcon from '~/static/assets/icons/trash.svg'
import EyeIcon from '~/static/assets/icons/eye.svg'
import Toast from '~/interfaces/toast'

export default Vue.extend({
  components: {
    TrashIcon,
    EyeIcon,
  },
  async asyncData({ $apiAuth, $httpService }) {
    try {
      const userData = await $httpService.auth.userData()
      const posts = await $apiAuth.get(
        '/skoll-register-server-api/publication/'
      )
      return {
        user: userData.data.data,
        posts: posts.data.data.publicationAvailable,
      }
    } catch (error) {
      return {}
    }
  },
  head(): any {
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
  methods: {
    handleError(e: any, i: number) {
      this.$addErrorImg(e)
      const overlayDiv = document.getElementById(`overlay-img-${i}`)
      overlayDiv?.classList.remove('cursor-pointer')
      const overlayEye = document.getElementById(`overlay-eye-${i}`)
      overlayEye?.classList.add('d-none')
    },
    showDeletePostModal(id: number) {
      // @ts-ignore
      this.$modal.show('dialog', {
        title: this.$i18n.t('profileview.deleteModal.title'),
        text: this.$i18n.t('profileview.deleteModal.message'),
        buttons: [
          {
            title: this.$i18n.t('form.cancel'),
            handler: () => {
              // @ts-ignore
              this.$modal.hide('dialog')
            },
          },
          {
            title: this.$i18n.t('form.delete'),
            handler: () => {
              this.deletePost(id)
            },
          },
        ],
      })
    },
    async deletePost(id: number) {
      try {
        this.showLoading()
        // @ts-ignore
        this.$modal.hide('dialog')
        await this.$httpService.posts.deleteById(id.toString())
        this.hideLoading()
        await this.$nuxt.refresh()
        const toast: Toast = {
          title: 'success',
          message: 'profileview.deletedPost',
          type: 'success',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      } catch (error: any) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: error.response.data.message,
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    ...mapActions('toast', ['showToastWithProps']),
    ...mapActions('loading', ['showLoading', 'hideLoading']),
  },
})
</script>

<style scoped lang="scss">
.main-profile-img-container {
  margin-right: 80px;
  .main-profile-img {
    border-radius: 50%;
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

.overlay {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  transition: ease 0.3s;
}

.xx {
  &:hover .overlay {
    background-color: black;
    opacity: 0.75;
  }
}

::v-deep .vue-dialog-buttons {
  button:last-child {
    background: var(--bs-danger);
    color: var(--bs-white);
  }
}
</style>
