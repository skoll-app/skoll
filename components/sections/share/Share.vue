<template>
  <section class="pages-content__section">
    <div class="container bg-image">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex align-items-center">
          <img
            class="d-none d-lg-block"
            height="470"
            src="~/assets/img/music.png"
            alt="music"
          />
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column">
          <h4 class="text-center text-lg-end">
            {{ $t('home.sections.share.title') }}
          </h4>
          <div class="align-self-center align-self-lg-end">
            <img class="img-fluid" src="~/assets/img/chat.png" alt="" />
            <div class="text-center">
              <p v-html="$t('home.sections.share.match')"></p>
            </div>
            <div class="text-center mt-0 mt-md-3 mt-lg-5">
              <div class="d-inline-flex">
                <button type="button" class="btn btn-outline-primary">
                  google play
                </button>
                <button type="button" class="btn btn-primary">app store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.bg-image {
  background: url('~static/assets/img/bubbles.png') no-repeat;
  background-size: 55%;

  @media (max-width: 991px) {
    background: none;
  }
}
</style>
