<template>
  <div class="mh-100 overflow-auto">
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

<style scoped></style>
