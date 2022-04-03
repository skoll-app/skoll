<template>
  <div class="login d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 center-hv">
          <img src="assets/img/dance.png" height="400" alt="dance" />
        </div>
        <div class="col-md-6 center-hv mt-n5">
          <div class="d-flex flex-column">
            <h1 class="mb-5 mx-4">Iniciar sesión</h1>
            <button type="button" class="btn btn-facebook mb-3">
              Continuar con Facebook
            </button>
            <button type="button" class="btn btn-info mb-3">
              Continuar con Google
            </button>
            <button type="button" class="btn btn-primary mb-2">
              Continuar con Apple
            </button>
            <div class="divider d-flex align-items-center my-2">
              <p class="text-center fw-bold mx-3 mb-0">o</p>
            </div>
            <div class="input-group mb-3">
              <input type="tel" class="form-control" placeholder="3161234567" />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                ->
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

export default Vue.extend({})
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('/assets/img/bg-login.png') no-repeat;
  background-size: cover;
}

.center-hv {
  display: flex;
  align-items: center !important;
  justify-content: center !important;
}

.divider::after,
.divider::before {
  content: '';
  flex: 1;
  height: 1px;
  background: #000;
}
</style>
