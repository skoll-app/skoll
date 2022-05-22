<template>
  <div class="d-inline-flex align-items-center my-2">
    <img class="profile-img me-2" :src="'assets/img/user.png'" alt="profile" />
    <div class="comment">
      <p class="text-muted m-0 lh-1">
        <span class="text-primary">@{{ comment.user.firstName }}</span>
        {{ comment.text | truncate }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Comments from '~/interfaces/comments'

export default Vue.extend({
  props: {
    comment: {
      type: Object as PropType<Comments>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.comment {
  font-size: 12px;
}
</style>
