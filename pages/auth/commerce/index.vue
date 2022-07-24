<template>
  <div class="row g-0 commerce-register">
    <div class="col-5 commerce-register__left">
      <img src="assets/img/bartender.jpg" alt="bartender" />
    </div>
    <div class="col-7">
      <div class="p-4 px-5">
        <Form />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Form from '~/components/register/commerce/Form.vue'

export default Vue.extend({
  components: { Form },})
</script>

<style scoped lang="scss">
@media (min-width: 992px) {
  .commerce-register {
    &__left {
      > img {
        width: 100%;
        max-height: calc(100vh - 76px);
        object-fit: cover;
        object-position: left top;
      }
    }

    &__right {
      width: 50%;
    }
  }
}
</style>
