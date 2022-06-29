<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.changePassword.title')"></h4>
      <ValidationObserver
        v-slot="{ invalid }"
        tag="form"
        ref="updatePasswordForm"
      >
        <div class="row">
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('form.currentPassword')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('form.currentPassword')"
                  v-model="currentPassword"
                  type="password"
                  addVeeClasses
                  rules="required"
                  inputGroup
                  isPasswordType
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('form.newPassword')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  vid="newPassword"
                  :name="$t('form.newPassword')"
                  v-model="newPassword"
                  type="password"
                  addVeeClasses
                  rules="required|password"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('form.confirmPassword')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('form.confirmPassword')"
                  v-model="confirmPassword"
                  type="password"
                  addVeeClasses
                  rules="required|confirmed:newPassword"
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
            @click="updatePassword"
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

export default Vue.extend({
  components: { TextInput },
  layout: 'config',
  data: () => ({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  }),
  methods: {
    async updatePassword() {
      try {
        this.showLoading()
        await this.$apiAuth.put('/client/change/password', {
          newPassword: this.newPassword,
          password: this.currentPassword,
        })
        this.hideLoading()
        this.resetFields()
        const toast: Toast = {
          title: 'success',
          message: 'configview.editProfile.passwordUpdated',
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
    resetFields() {
      this.currentPassword = ''
      this.newPassword = ''
      this.confirmPassword = ''
      // @ts-ignore
      this.$refs.updatePasswordForm.reset()
    },
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToast', 'hideToast', 'showToastWithProps']),
  },
})
</script>

<style scoped></style>
