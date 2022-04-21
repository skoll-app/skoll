<template>
  <div class="row g-0 vh-100">
    <div
      class="position-relative col-12 col-lg-6 h-100 d-flex flex-column justify-content-center"
    >
      <div class="px-5">
        <Form />
      </div>
    </div>
    <div class="col-lg-6 bg-image d-none d-lg-block">
      <div class="d-flex flex-column justify-content-center h-100">
        <div class="mx-auto">
          <h4 class="text-end pb-4" v-html="$t('registerview.share')"></h4>
          <img class="img-fluid" src="assets/img/cook.png" alt="cooking" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '~/components/recover/Form.vue'

export default Vue.extend({
  components: { Form },})
</script>

<style scoped lang="scss">
.bg-image {
  background: url('~static/assets/img/bg-register.png') no-repeat var(--bs-blue);
  background-size: cover;

  img {
    max-height: 500px;
  }
}
</style>
