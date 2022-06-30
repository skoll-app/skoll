<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.networkLinking.title')"></h4>
      <ValidationObserver v-slot="{ invalid }" tag="form" ref="socialMediaForm">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.facebook')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.facebook')"
                  v-model="facebook"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.instagram')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.instagram')"
                  v-model="instagram"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.tiktok')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.tiktok')"
                  v-model="tiktok"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.onlyfans')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.onlyfans')"
                  v-model="onlyfans"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-success"
            :disabled="invalid"
            @click="saveSocialMedia"
          >
            {{ $t('form.save') }}
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

import TextInput from '~/components/ux/input/TextInput.vue'
import Toast from '~/interfaces/toast'
import User from '~/interfaces/user'

export default Vue.extend({
  layout: 'config',
  components: { TextInput },
  data: () => ({
    facebook: '',
    instagram: '',
    tiktok: '',
    onlyfans: '',
  }),
  computed: {
    user(): User {
      return this.$store.state.user
    },
  },
  mounted() {
    this.initSocialMedia()
  },
  methods: {
    initSocialMedia() {
      this.facebook = this.user.urlFacebook || ''
      this.instagram = this.user.urlInstagram || ''
      this.tiktok = this.user.urlTikTok || ''
      this.onlyfans = this.user.urlOnlyfans || ''
    },
    async saveSocialMedia() {
      try {
        this.showLoading()
        await this.$apiAuth.put('/client/update/social/network', {
          urlFacebook: this.facebook,
          urlInstagram: this.instagram,
          urlOnlyfans: this.onlyfans,
          urlTikTok: this.tiktok,
        })
        this.setSocialMedias({
          facebook: this.facebook,
          instagram: this.instagram,
          tiktok: this.tiktok,
          onlyfans: this.onlyfans,
        })
        this.hideLoading()
        const toast: Toast = {
          title: 'success',
          message: 'configview.networkLinking.updated',
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
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
    ...mapActions('user', ['setSocialMedias']),
  },
})
</script>

<style scoped></style>
