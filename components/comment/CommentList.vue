<template>
  <div class="mh-100 overflow-auto comments-container">
    <Comment :key="i" v-for="(comment, i) in comments" :comment="comment" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Comments from '~/interfaces/comments'
import Comment from './Comment.vue'

export default Vue.extend({
  components: { Comment },
  props: {
    comments: {
      type: Array as PropType<Comments[]>,
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
.comments-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.comments-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
