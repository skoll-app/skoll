<template>
  <div class="position-absolute p-4" style="right: 0; top: 0">
    <div
      class="btn-group"
      role="group"
      aria-label="Button group with nested dropdown"
    >
      <button type="button" class="btn btn-secondary">
        {{ selectedLang }}
      </button>
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
          <span class="dropdown-item" @click="changeLanguage('es')">{{
            $t('language.spanish')
          }}</span>
          <span class="dropdown-item" @click="changeLanguage('en')">{{
            $t('language.english')
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { localize } from 'vee-validate'

export default Vue.extend({
  computed: {
    selectedLang(): string {
      return this.$i18n.locale === 'es'
        ? this.$i18n.t('language.spanish').toString()
        : this.$i18n.t('language.english').toString()
    },
  },
  methods: {
    changeLanguage(lang: string) {
      this.$i18n.setLocale(lang)
      localize(lang)
    },
  },
})
</script>

<style scoped></style>
