<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img
          class="profile-img me-2"
          :src="post.user.profileImg || 'assets/img/user.png'"
          alt="profile"
        />
        <div class="d-flex flex-column user-data">
          <p class="name">{{ post.user.username }}</p>
          <small class="text-muted">{{ post.location }}</small>
        </div>
      </div>
    </div>
    <img class="post-img" :src="post.imageUrl" alt="" />
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <div class="icons-actions">
          <HearthIcon class="icon" />
          <ChatIcon class="icon" />
        </div>
        <div class="likes">{{ post.likes }} likes</div>
      </div>
      <u class="cursor-pointer" v-if="post.comments && post.comments.length"
        >{{ $t('feed.posts.seeComments') }}</u
      >
    </div>
    <hr />
    <TextInput :placeholder="`${$t('feed.posts.addComment')}...`" size="sm" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// Icons
import HearthIcon from '~/static/assets/icons/hearth.svg'
import ChatIcon from '~/static/assets/icons/chat.svg'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
// Interfaces
import Post from '~/interfaces/post'

export default Vue.extend({
  components: { HearthIcon, ChatIcon, TextInput },
  props: {
    post: {
      type: Object as PropType<Post>,
      default: () => {},
      required: true,
    },
  },
})
</script>

<style scoped lang="scss">
.user-data {
  line-height: 1;
  .name {
    font-size: 14px;
    margin: 0;
    font-weight: bold;
  }
}
.post-img {
  max-width: 100%;
}
.icons-actions svg {
  margin-right: 8px;
}
</style>
