<template>
  <div>
    <Languages />
    <div class="login d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 center-hv d-none d-md-flex">
          <img src="assets/img/dance.png" height="400" alt="dance" />
        </div>
        <div class="col-md-6 center-hv mt-n5">
          <div class="d-flex flex-column">
            <h2 class="mb-3 mx-4 text-center">Iniciar sesión</h2>
            <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-facebook btn-icon mb-3">
                <FacebookIcon />
              </button>
              <button
                type="button"
                class="btn btn-info btn-icon mx-2 mb-3 text-white"
              >
                <GoogleIcon />
              </button>
              <button type="button" class="btn btn-primary btn-icon mb-2">
                <AppleIcon />
              </button>
            </div>
            <div class="divider d-flex align-items-center my-2">
              <p class="text-center fw-bold mx-3 mb-0">o</p>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text px-0">
                <UserIcon />
              </span>
              <input
                type="tel"
                class="form-control"
                placeholder="3161234567"
                v-model="phone"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text px-0">
                <LockIcon />
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                v-model="password"
              />
            </div>
            <button type="button" class="btn btn-primary mb-2 text-warning">
              ingresar
            </button>

            <p class="text-primary">
              ¿Olvidaste tu contraseña?
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                class="text-warning"
                >Recuperala aquí</a
              >
            </p>
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

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('/assets/img/bg-login.png') no-repeat;
  background-size: cover;
}
</style>
