<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.help.title')"></h4>
      <ValidationObserver tag="form" v-slot="{ invalid }" ref="helpForm">
        <TextInput
          class="mb-3"
          :placeholder="$t('form.subject')"
          :name="$t('form.subject')"
          addVeeClasses
          rules="required"
          v-model="subject"
        />
        <TextAreaInput
          class="mb-3"
          rules="required"
          addVeeClasses
          :name="$t('form.message')"
          :placeholder="$t('form.message')"
          v-model="message"
        />
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-success"
            :disabled="invalid"
            @click="saveMessage"
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
// Components
import TextAreaInput from '~/components/ux/input/TextAreaInput.vue'
import TextInput from '~/components/ux/input/TextInput.vue'
import Toast from '~/interfaces/toast'

export default Vue.extend({
  components: { TextInput, TextAreaInput },
  layout: 'config',
  data: () => ({
    subject: '',
    message: '',
  }),
  methods: {
    async saveMessage() {
      try {
        this.showLoading()
        await this.$httpService.utils.help({
          subject: this.subject,
          description: this.message,
        })
        this.hideLoading()
        this.resetForm()
        const toast: Toast = {
          title: 'success',
          message: 'configview.help.successMessage',
          type: 'success',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      } catch (error) {
        this.hideLoading()
        const toast: Toast = {
          title: 'error',
          message: 'configview.help.errorMessage',
          type: 'danger',
          timer: 5000,
        }
        this.showToastWithProps(toast)
      }
    },
    resetForm() {
      this.message = ''
      this.subject = ''
      // @ts-ignore
      this.$refs.helpForm.reset()
    },
    ...mapActions('user', ['setUser']),
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToastWithProps']),
  },
})
</script>

<style scoped></style>
