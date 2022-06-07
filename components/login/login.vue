<template>
  <div>
    <!-- <Languages /> -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 center-hv d-none d-md-flex">
          <img src="/assets/img/dance.png" height="400" alt="dance" />
        </div>
        <div class="col-md-6 center-hv">
          <div class="d-flex flex-column w-75 px-0 px-md-2">
            <h2 class="mb-3 mx-4 text-center">{{ $t('loginview.title') }}</h2>
            <ValidationObserver tag="form" v-slot="{ invalid }">
              <!-- TODO: dynamic name instead white space -->
              <ValidationProvider
                name=" "
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="input-group has-validation mb-3">
                  <span class="input-group-text">
                    <UserIcon class="icon icon-no-hover" />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    :class="classes"
                    :placeholder="$t('loginview.user')"
                    v-model="phone"
                  />
                  <div v-if="errors && errors[0]" class="invalid-feedback">
                    {{ errors[0] }}
                  </div>
                </div>
              </ValidationProvider>

              <!-- TODO: dynamic name instead white space -->
              <ValidationProvider
                name=" "
                rules="required"
                v-slot="{ errors, classes }"
              >
                <div class="input-group has-validation mb-3">
                  <span class="input-group-text">
                    <LockIcon class="icon icon-no-hover" />
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    :class="classes"
                    :placeholder="$t('loginview.password')"
                    v-model="password"
                  />
                  <div class="invalid-feedback">{{ errors[0] }}</div>
                </div>
              </ValidationProvider>
              <p class="text-primary text-center">
                <small
                  >{{ $t('loginview.forgotPassword') }}
                  <NuxtLink to="/auth/recover" class="text-warning">{{
                    $t('loginview.retrieve')
                  }}</NuxtLink></small
                >
              </p>
              <div class="d-grid gap-2">
                <button
                  type="button"
                  class="btn btn-primary mb-2 text-warning"
                  @click="verifyUser"
                  :disabled="invalid"
                >
                  {{ $t('loginview.enter') }}
                </button>
              </div>
              <p class="text-primary text-center my-2">
                <small
                  >{{ $t('loginview.noAccount') }}
                  <NuxtLink class="text-warning" to="/auth/register">{{
                    $t('loginview.register')
                  }}</NuxtLink></small
                >
              </p>
            </ValidationObserver>
            <div class="divider d-flex align-items-center my-2">
              <p class="text-center fw-bold mx-3 mb-0">
                {{ $t('loginview.or') }}
              </p>
            </div>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-facebook btn-icon">
                <FacebookIcon />
              </button>
              <button
                type="button"
                class="btn btn-info btn-icon mx-2 text-white"
              >
                <GoogleIcon />
              </button>
              <button type="button" class="btn btn-primary btn-icon">
                <AppleIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Vuex
import { mapActions } from 'vuex'
// Icons
import GoogleIcon from '@/static/assets/icons/google.svg'
import AppleIcon from '@/static/assets/icons/apple.svg'
import FacebookIcon from '@/static/assets/icons/facebook.svg'
import UserIcon from '@/static/assets/icons/user.svg'
import LockIcon from '@/static/assets/icons/lock.svg'
// Components
// import Languages from '@/components/ux/i18n/Languages.vue'
import Toast from '~/interfaces/toast'

export default Vue.extend({
  name: 'Login',
  components: {
    GoogleIcon,
    AppleIcon,
    FacebookIcon,
    UserIcon,
    LockIcon,
    // Languages,
  },
  data: () => ({
    phone: '',
    password: '',
  }),
  methods: {
    async verifyUser(): Promise<void> {
      try {
        this.showLoading()
        const res = await this.$api.post('/security/exist/user', {
          username: this.phone,
        })
        const userExists = res.data.data.info.exists
        if (!userExists) {
          const toast: Toast = {
            title: 'Error',
            message: 'loginview.userNotExist',
            type: 'danger',
            closable: true,
          }
          this.showToastWithProps(toast)
        } else {
          const { data } = await this.$api.post('/oauth/login', {
            username: this.phone,
            password: this.password,
          })
          this.$cookies.set('token', data.token)
          const userData = await this.$apiAuth.get('/client/')
          this.setUser(userData.data.data)
          this.$router.push('/feed')
        }
        this.hideLoading()
      } catch (error: any) {
        this.hideLoading()
        if (error.response.status === 401) {
          this.showToastWithProps({
            title: 'Error',
            message: 'loginview.wrongPassword',
            type: 'danger',
            closable: true,
          })
        }
      }
    },
    ...mapActions('loading', ['showLoading', 'hideLoading']),
    ...mapActions('toast', ['showToast', 'hideToast', 'showToastWithProps']),
    ...mapActions('user', ['setUser']),
  },
})
</script>
