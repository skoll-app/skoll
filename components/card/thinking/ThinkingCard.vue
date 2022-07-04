<template>
  <div class="card card-thinking my-3">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img
          class="profile-img me-2"
          :data-src="user.logo"
          alt="profile"
          v-lazy-load
        />
        <TextInput
          size="sm"
          class="w-100"
          :placeholder="$t('feed.whatsToday')"
          v-model="description"
        />
      </div>
      <hr class="my-2" />
      <div class="d-flex flex-column">
        <div v-if="!imgSrc" class="thinking-btn" @click="openFile">
          <PicIcon class="me-2" />
          <p class="text-primary m-0">{{ $t('feed.photoVideo') }}</p>
        </div>
        <div>
          <input
            type="file"
            name=""
            id="input_file"
            accept="image/*"
            ref="file"
            @change="previewFile"
            hidden
          />
          <div class="img-cropper">
            <vue-cropper
              v-if="imgSrc"
              ref="cropper"
              :src="imgSrc"
              :aspect-ratio="1"
              drag-mode="move"
              :crop-box-resizable="false"
              :view-mode="1"
              :containerStyle="{ height: '300px', width: '100%' }"
            />
          </div>
        </div>
        <div class="mt-2 d-flex justify-content-end" v-if="imgSrc">
          <button type="button" class="btn btn-danger me-2" @click="reset">
            {{ $t('form.cancel') }}
          </button>
          <button type="button" class="btn btn-success" @click="crop">
            {{ $t('form.save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
import Toast from '~/interfaces/toast'
// Interfaces
import User from '~/interfaces/user'
// Icons
import BeerIcon from '~/static/assets/icons/beer.svg'
import PicIcon from '~/static/assets/icons/pic.svg'

export default Vue.extend({
  components: {
    TextInput,
    BeerIcon,
    PicIcon,
  },
  computed: {
    user(): User {
      return this.$store.state.user
    },
  },
  data: () => ({
    description: '',
    imgSrc: '',
    postImg: '',
  }),
  methods: {
    openFile() {
      document.getElementById('input_file')!.click()
    },
    previewFile() {
      // @ts-ignore
      this.postImg = this.$refs.file.files[0]
      // @ts-ignore
      const imgValue = this.$refs.file.value
      var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i
      if (!allowedExtensions.exec(imgValue)) {
        const toast: Toast = {
          title: 'error',
          message: 'configview.editProfile.invalidExt',
          type: 'danger',
          timer: 6000,
        }
        this.showToastWithProps(toast)
        this.postImg = ''
        return false
      } else {
        this.submitFileToCut()
      }
    },
    async submitFileToCut() {
      try {
        this.showLoading()
        const formData = new FormData()
        formData.append('file', this.postImg)
        const headers = { 'Content-Type': 'multipart/form-data' }
        const res = await this.$apiAuth.post(
          '/skoll-register-server-api/client/create/multimedia/cut',
          formData,
          {
            headers,
          }
        )
        this.imgSrc = res.data.data
        // @ts-ignore
        this.hideLoading()
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
    crop() {
      // @ts-ignore
      this.$refs.cropper
        // @ts-ignore
        .getCroppedCanvas({
          width: 500,
          height: 500,
        })
        .toBlob((blob: any) => {
          const formData = new FormData()
          formData.append('file', blob, `post-${Date.now()}.jpg`)
          formData.append('description', this.description)
          this.savePost(formData)
        })
    },
    reset() {
      this.postImg = ''
      this.imgSrc = ''
    },
    async savePost(formData: any) {
      try {
        this.showLoading()
        await this.$apiAuth.post(
          '/skoll-register-server-api/client/create/multimedia',
          formData
        )
        this.hideLoading()
        this.reset()
        const toast: Toast = {
          title: 'success',
          message: 'publicacion cargada',
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
.thinking-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--bs-gray-300);
  }
}
</style>
