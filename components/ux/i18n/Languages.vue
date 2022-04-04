<template>
  <div class="position-absolute p-4" style="right: 0; top: 0">
    <div
      class="btn-group"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <button type="button" class="btn btn-secondary">{{ $t('language.spanish') }}</button>
      <div class="btn-group" role="group">
        <button
          id="language-btn"
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        ></button>
        <div class="dropdown-menu" aria-labelledby="language-btn" style="">
          <span class="dropdown-item" @click="changeLanguage('es')">{{ $t('language.spanish') }}</span>
          <span class="dropdown-item" @click="changeLanguage('en')">{{ $t('language.english') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    changeLanguage(lang: string) {
      this.$i18n.setLocale(lang)
    }
  }
})
</script>

<style scoped></style>
