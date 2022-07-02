<template>
  <div class="no-centered">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-2"></div>
        <div class="col-12 col-md-10 col-lg-5">
          <ThinkingCard />
          <PostsList />
        </div>
        <div class="col-lg-3">
          <div class="sticky-top">
            <div class="card mt-3">
              <img
                src="assets/img/mock/ad.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Poker</h5>
                <p class="card-text">
                  <small>Compra hoy y disfruta con tus amigos!</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-2"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostsList from '~/components/card/post/PostsList.vue'
import ThinkingCard from '~/components/card/thinking/ThinkingCard.vue'

export default Vue.extend({
  layout: 'blue',
  middleware: ['auth'],
  components: { ThinkingCard, PostsList },
})
</script>

<style scoped lang="scss">
.sticky-top {
  top: 92px !important;
  z-index: 1;
}
</style>
