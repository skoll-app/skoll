<template>
  <div class="card card-thinking my-3">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img
          class="profile-img me-2"
          :src="user.logo || 'assets/img/user.png'"
          alt="profile"
        />
        <TextInput
          size="sm"
          class="w-100"
          :placeholder="$t('feed.whatsToday')"
        />
      </div>
      <hr class="my-2" />
      <div>
        <div class="thinking-btn">
          <PicIcon class="me-2" />
          <p class="text-primary m-0">{{ $t('feed.photoVideo') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
// Interfaces
import User from '~/interfaces/user'
// Icons
import BeerIcon from '~/static/assets/icons/beer.svg'
import PicIcon from '~/static/assets/icons/pic.svg'

export default Vue.extend({
  components: {
    TextInput,
    BeerIcon,
    PicIcon,
  },
  computed: {
    user(): User {
      return this.$store.state.user
    },
  },
})
</script>

<style scoped lang="scss">
.thinking-btn {
  display: inline-flex;
  align-items: center;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--bs-gray-300);
  }
}
</style>
