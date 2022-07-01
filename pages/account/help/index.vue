<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.help.title')"></h4>
      <ValidationObserver tag="form" v-slot="{ invalid }">
        <TextInput
          class="mb-3"
          :placeholder="$t('form.subject')"
          :name="$t('form.subject')"
          addVeeClasses
          rules="required"
          v-model="subject"
        />
        <TextAreaInput
          class="mb-3"
          rules="required"
          addVeeClasses
          :name="$t('form.message')"
          :placeholder="$t('form.message')"
          v-model="message"
        />
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-success" :disabled="invalid">
            {{ $t('form.save') }}
          </button>
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TextAreaInput from '~/components/ux/input/TextAreaInput.vue'
import TextInput from '~/components/ux/input/TextInput.vue'

export default Vue.extend({
  components: { TextInput, TextAreaInput },
  layout: 'config',
  data: () => ({
    subject: '',
    message: '',
  }),
})
</script>

<style scoped></style>
