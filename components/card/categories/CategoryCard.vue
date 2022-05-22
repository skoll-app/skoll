<template>
  <div
    class="card border-0 position-relative mx-3 mx-md-0"
    :style="{ backgroundColor: backgroundColor }"
    @click="goTo(to)"
  >
    <div class="card-body text-center pb-4">
      <h4 class="card-text">{{ title }}</h4>
      <ArrowRightDoubleIcon />
    </div>
    <div class="icon">
      <component :is="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArrowRightDoubleIcon from '~/static/assets/icons/arrow-right-double.svg'

export default Vue.extend({
  props: {
    title: { type: String, default: '' },
    backgroundColor: { type: String, default: '' },
    to: { type: String, default: '' },
    icon: { type: Object, default: '' },
  },
  components: {
    ArrowRightDoubleIcon,
  },
  methods: {
    goTo(to: string) {
      this.$router.push(to)
    },
  },
})
</script>

<style scoped lang="scss">
.card {
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  // max-width: 240px;

  @media (min-width: 992px) and (max-width: 1024px) {
    h4 {
      font-size: 1rem;
    }
  }

  .card-text {
    margin-top: 36px;
    margin-bottom: 18px;
  }

  .icon {
    position: absolute;
    left: -16px;
    top: -16px;
  }
}
</style>
