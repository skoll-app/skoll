<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mb-3" v-html="$t('configview.networkLinking.title')"></h4>
      <ValidationObserver v-slot="{ invalid }" tag="form" ref="socialMediaForm">
        <div class="row">
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.facebook')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.facebook')"
                  v-model="facebook"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.instagram')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.instagram')"
                  v-model="instagram"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.tiktok')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.tiktok')"
                  v-model="tiktok"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
          <div class="col-12 mb-3">
            <div class="form-group row">
              <label class="col-sm-3 col-form-label">{{
                $t('configview.networkLinking.onlyfans')
              }}</label>
              <div class="col-sm-9">
                <TextInput
                  :name="$t('configview.networkLinking.onlyfans')"
                  v-model="onlyfans"
                  addVeeClasses
                  rules="url"
                />
              </div>
            </div>
          </div>
        </div>
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

import TextInput from '~/components/ux/input/TextInput.vue'

export default Vue.extend({
  layout: 'config',
  components: { TextInput },
  data: () => ({
    facebook: '',
    instagram: '',
    tiktok: '',
    onlyfans: ''
  }),
})
</script>

<style scoped></style>
