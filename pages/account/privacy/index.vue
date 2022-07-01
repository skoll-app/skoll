<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.privacy.title')"></h4>
      <p class="text-muted">{{ $t('configview.privacy.subtitle') }}</p>
      <CheckboxInput
        inputValue="profile"
        v-model="checkedOpt"
        :checked="profileChecked"
        label="configview.privacy.profile"
      />
      <CheckboxInput
        inputValue="notifications"
        v-model="checkedOpt"
        :checked="notificationsChecked"
        label="configview.privacy.notifications"
      />
      <CheckboxInput
        inputValue="invitations"
        v-model="checkedOpt"
        :checked="invitationsChecked"
        label="configview.privacy.invitations"
      />
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-success" @click="savePrivacy">
          {{ $t('form.save') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import CheckboxInput from '~/components/ux/checkbox/CheckboxInput.vue'
import Toast from '~/interfaces/toast'

export default Vue.extend({
  components: { CheckboxInput },
  layout: 'config',
  async asyncData(context) {
    try {
      const params = await context.$apiAuth.get(
        '/skoll-parameter-server-api/support/security/policy/all'
      )
      return {
        params: params.data.data,
      }
    } catch (error) {
      return {}
    }
  },
  beforeMount() {
    this.initOpts()
  },
  data: () => ({
    checkedOpt: [] as string[],
    params: {} as any,
  }),
  computed: {
    profileChecked(): boolean {
      return this.checkedOpt.includes('profile')
    },
    notificationsChecked(): boolean {
      return this.checkedOpt.includes('notifications')
    },
    invitationsChecked(): boolean {
      return this.checkedOpt.includes('invitations')
    },
  },
  methods: {
    initOpts() {
      if (this.params.profileViewable) {
        this.checkedOpt.push('profile')
      }
      if (this.params.notifications) {
        this.checkedOpt.push('notifications')
      }
      if (this.params.receiveInvitations) {
        this.checkedOpt.push('invitations')
      }
    },
    async savePrivacy() {
      try {
        this.showLoading()
        await this.$apiAuth.put(
          '/skoll-parameter-server-api/support/security/policy',
          {
            notifications: this.notificationsChecked,
            profileViewable: this.profileChecked,
            receiveInvitations: this.invitationsChecked,
          }
        )
        this.hideLoading()
        const toast: Toast = {
          title: 'success',
          message: 'configview.privacy.updated',
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

<style scoped lang="scss"></style>
