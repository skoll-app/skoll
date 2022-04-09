<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div
      class="toast"
      :class="showOrHide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header bg-danger text-white">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close ms-2 mb-1"
          data-bs-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    showOrHide(): string {
      return this.$store.state.toast.show ? 'show' : 'hide'
    },
  },
})
</script>

<style scoped></style>
