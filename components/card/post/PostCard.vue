<template>
  <div class="card mb-4">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <img
          class="profile-img me-2"
          :src="post.user.logo || 'assets/img/user.png'"
          alt="profile"
        />
        <div class="d-flex flex-column user-data">
          <p class="name text-capitalize">
            {{ post.user.firstName }} {{ post.user.lastName }}
          </p>
          <small class="text-muted">{{ post.location }}</small>
        </div>
      </div>
    </div>
    <img
      class="post-img"
      :class="{ 'cursor-pointer': clickable }"
      :data-src="post.url"
      :alt="post.id"
      @click="clickable ? $modal.show(`card-${post.id}`) : null"
      @error="addErrorImg"
      v-lazy-load
    />
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <div class="icons-actions">
          <HearthIcon v-if="!post.liked" class="icon" @click="update('add')" />
          <HearthFullIcon
            v-else
            class="icon text-danger icon-no-hover"
            @click="update('remove')"
          />
          <ChatIcon
            v-if="false"
            class="icon"
            @click="$modal.show(`card-${post.id}`)"
          />
        </div>
        <div v-if="post.accountLike" class="likes">
          {{ post.accountLike }} likes
        </div>
      </div>
      <p class="text-muted mb-1">
        <small>{{ post.description }}</small>
      </p>
      <u
        class="cursor-pointer"
        v-if="post.comments && post.comments.length && false"
        @click="$modal.show(`card-${post.id}`)"
        ><small>{{ $t('feed.posts.seeComments') }}</small></u
      >
    </div>
    <hr />
    <TextInput
      v-if="false"
      :placeholder="`${$t('feed.posts.addComment')}...`"
      size="sm"
      inputGroup
      :icon="icon"
      v-model="comment"
    />
    <modal :name="`card-${post.id}`" height="500px" width="500px">
      <div class="container-fluid px-0 h-100">
        <div class="row h-100">
          <div class="col-md-12 h-100">
            <div
              class="bg-primary h-100 d-flex justify-content-center align-items-center"
            >
              <img
                class="post-img post-img-modal"
                :src="post.url"
                :alt="post.id"
              />
            </div>
          </div>
          <div v-if="false" class="col-md-4">
            <h6 class="mt-3 mb-1">{{ post.user.firstName }}</h6>
            <div class="py-2 h-75" v-if="false">
              <ListComments :comments="post.comments" />
            </div>
            <div class="py-2 h-25 d-flex w-100">
              <div class="w-100">
                <div class="d-flex justify-content-between mb-2">
                  <div class="icons-actions">
                    <HearthIcon
                      v-if="!post.liked"
                      class="icon"
                      @click="update('add')"
                    />
                    <HearthFullIcon
                      v-else
                      class="icon text-danger icon-no-hover"
                      @click="update('remove')"
                    />
                  </div>
                  <div v-if="post.accountLike" class="likes">
                    {{ post.accountLike }} likes
                  </div>
                </div>
                <TextInput
                  :placeholder="`${$t('feed.posts.addComment')}...`"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// Icons
import HearthIcon from '~/static/assets/icons/hearth.svg'
import HearthFullIcon from '~/static/assets/icons/hearth-full.svg'
import ChatIcon from '~/static/assets/icons/chat.svg'
import SendIcon from '~/static/assets/icons/send.svg'
// Components
import TextInput from '~/components/ux/input/TextInput.vue'
import Comment from '~/components/comment/Comment.vue'
import ListComments from '~/components/comment/CommentList.vue'
// Interfaces
import Post from '~/interfaces/post'

export default Vue.extend({
  components: {
    HearthIcon,
    ChatIcon,
    HearthFullIcon,
    SendIcon,
    TextInput,
    Comment,
    ListComments,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  data: () => ({
    icon: SendIcon,
    comment: '',
    clickable: true,
  }),
  methods: {
    update(type: string) {
      this.$emit('updateLikes', { type, id: this.post.id })
    },
    addErrorImg(e: any) {
      e.target.src = 'assets/img/error-placeholder.png'
      this.clickable = false
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
  &-modal {
    max-height: 100%;
  }
}
.icons-actions svg {
  margin-right: 8px;
}
</style>
