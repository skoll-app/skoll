<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.privacy.title')"></h4>
      <p class="text-muted">{{ $t('configview.privacy.subtitle') }}</p>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          value="profile"
          v-model="checkedOpt"
          :checked="profileChecked"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >{{$t('configview.privacy.profile')}}</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          value="notifications"
          v-model="checkedOpt"
          :checked="notificationsChecked"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >{{ $t('configview.privacy.notifications') }}</label
        >
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          value="invitations"
          v-model="checkedOpt"
          :checked="invitationsChecked"
        />
        <label class="form-check-label" for="flexSwitchCheckDefault"
          >{{ $t('configview.privacy.invitations') }}</label
        >
      </div>
      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-success">
          {{ $t('configview.save') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'config',
  data: () => ({
    checkedOpt: ['profile', 'notifications', 'invitations'] as string[],
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
})
</script>

<style scoped lang="scss"></style>
