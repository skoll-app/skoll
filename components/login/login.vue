<template>
  <div>
    <Languages />
    <div class="container">
      <div class="row">
        <div class="col-md-6 center-hv d-none d-md-flex">
          <img src="assets/img/dance.png" height="400" alt="dance" />
        </div>
        <div class="col-md-6 center-hv">
          <div class="d-flex flex-column w-75 px-4">
            <h2 class="mb-3 mx-4 text-center">{{ $t('loginview.title') }}</h2>
            <ValidationObserver>
              <form>
                <ValidationProvider
                  :name="$t('loginview.user')"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <div class="input-group has-validation mb-3">
                    <span class="input-group-text px-0">
                      <UserIcon />
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      :class="classes"
                      :placeholder="$t('loginview.user')"
                      v-model="phone"
                    />
                    <div class="invalid-feedback">{{ errors[0] }}</div>
                  </div>
                </ValidationProvider>

                <ValidationProvider
                  :name="$t('loginview.password')"
                  rules="required"
                  v-slot="{ errors, classes }"
                >
                  <div class="input-group has-validation mb-3">
                    <span class="input-group-text px-0">
                      <LockIcon />
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
                <p class="text-primary">
                  <small
                    >{{ $t('loginview.forgot-password') }}
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-warning"
                      >{{ $t('loginview.retrieve') }}</a
                    ></small
                  >
                </p>
                <div class="d-grid gap-2">
                  <button
                    type="button"
                    class="btn btn-primary mb-2 text-warning"
                  >
                    {{ $t('loginview.enter') }}
                  </button>
                </div>
              </form>
            </ValidationObserver>
            <div class="divider d-flex align-items-center my-3">
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

import GoogleIcon from '@/static/assets/icons/google.svg'
import AppleIcon from '@/static/assets/icons/apple.svg'
import FacebookIcon from '@/static/assets/icons/facebook.svg'
import UserIcon from '@/static/assets/icons/user.svg'
import LockIcon from '@/static/assets/icons/lock.svg'
import Languages from '@/components/ux/i18n/Languages.vue'

export default Vue.extend({
  name: 'Login',
  components: {
    GoogleIcon,
    AppleIcon,
    FacebookIcon,
    UserIcon,
    LockIcon,
    Languages,
  },
  data: () => ({
    phone: '',
    password: '',
    loading: false,
    userExists: false,
  }),
  methods: {
    async verifyUser(): Promise<void> {
      try {
        this.userExists = false
        this.loading = true
        const res = await this.$axios.post('/security/exist/user', {
          username: this.phone,
        })
        this.userExists = res.data.data.isExist
        this.loading = false
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
