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
        <button type="button" class="btn btn-success">
          {{ $t('configview.save') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CheckboxInput from '~/components/ux/checkbox/CheckboxInput.vue'

export default Vue.extend({
  components: { CheckboxInput },
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
