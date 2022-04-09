<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div
      class="toast"
      :class="showOrHide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div v-if="toast.title" class="toast-header" :class="toastType">
        <strong v-if="toast.title" class="me-auto">{{ toast.title }}</strong>
        <small v-if="toast.helpTitle">{{ toast.helpTitle }}</small>
        <button
          v-if="toast.closable"
          type="button"
          class="btn-close ms-2 mb-1"
          data-bs-dismiss="toast"
          aria-label="Close"
          @click="close"
        >
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="toast-body">{{ toast.message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import Toast from '@/interfaces/toast'

export default Vue.extend({
  computed: {
    toast(): Toast {
      return this.$store.state.toast
    },
    showOrHide(): string {
      return this.toast.show ? 'show' : 'hide'
    },
    toastType(): string {
      if (this.toast.type === 'danger') {
        return 'bg-danger text-white'
      } else if (this.toast.type === 'primary') {
        return 'bg-primary text-white'
      } else if (this.toast.type === 'success') {
        return 'bg-success text-white'
      } else if (this.toast.type === 'info') {
        return 'bg-info text-white'
      }
      return 'bg-primary'
    },
  },
  methods: {
    close() {
      this.hideToast()
    },
    ...mapActions('toast', ['hideToast']),
  },
})
</script>

<style scoped></style>
