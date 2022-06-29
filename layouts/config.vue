<template>
  <div>
    <Header />
    <div class="pages-content">
      <div class="container pages-content__section">
        <div class="row">
          <div class="col-md-3">
            <div id="config-list-group" class="list-group">
              <NuxtLink
                to="/account/edit"
                class="list-group-item list-group-item-action"
                >{{ $t('configview.editProfile.title') }}
              </NuxtLink>
              <NuxtLink
                to="/account/change-password"
                class="list-group-item list-group-item-action"
                >{{ $t('configview.changePassword.title') }}</NuxtLink
              >
              <NuxtLink
                to="/account/network-linking"
                class="list-group-item list-group-item-action"
                >{{ $t('configview.networkLinking.title') }}</NuxtLink
              >
              <NuxtLink
                to="/account/help"
                class="list-group-item list-group-item-action"
                >{{ $t('configview.help') }}</NuxtLink
              >
              <NuxtLink
                to="/account/privacy"
                class="list-group-item list-group-item-action"
                >{{ $t('configview.privacy.title') }}</NuxtLink
              >
            </div>
          </div>
          <div class="col-md-9">
            <Nuxt />
          </div>
        </div>
      </div>
      <Loading />
      <Toast />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/header/Header.vue'
import Loading from '~/components/ux/loading/Loading.vue'
import Toast from '~/components/ux/toast/Toast.vue'

export default Vue.extend({
  components: { Loading, Header, Toast },
  middleware: ['auth'],
})
</script>

<style scoped lang="scss"></style>
