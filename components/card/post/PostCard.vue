<template>
  <div class="card mb-4">
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
    <img class="post-img" :src="post.imageUrl" :alt="post.id" />
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
            class="icon"
            data-bs-toggle="modal"
            :data-bs-target="`#card-${post.id}`"
          />
        </div>
        <div class="likes">{{ post.likes }} likes</div>
      </div>
      <p class="text-muted mb-1">
        <small>{{ post.text }}</small>
      </p>
      <u class="cursor-pointer" v-if="post.comments && post.comments.length"
        ><small>{{ $t('feed.posts.seeComments') }}</small></u
      >
    </div>
    <hr />
    <TextInput :placeholder="`${$t('feed.posts.addComment')}...`" size="sm" />
    <div
      class="modal fade"
      :id="`card-${post.id}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="container-fluid p-0 h-100">
              <div class="row h-100">
                <div class="col-md-8 h-100">
                  <div
                    class="bg-primary h-100 d-flex justify-content-center align-items-center"
                  >
                    <img
                      class="post-img post-img-modal"
                      :src="post.imageUrl"
                      :alt="post.id"
                    />
                  </div>
                </div>
                <div class="col-md-4 ps-0">
                  <div class="py-2 h-75">
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
                        <div class="likes">{{ post.likes }} likes</div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
// Icons
import HearthIcon from '~/static/assets/icons/hearth.svg'
import HearthFullIcon from '~/static/assets/icons/hearth-full.svg'
import ChatIcon from '~/static/assets/icons/chat.svg'
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
  methods: {
    update(type: string) {
      this.$emit('updateLikes', { type, id: this.post.id })
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

.modal-dialog {
  height: 90%;
}
.modal-content {
  height: 100%;
}
.modal-body {
  height: 100%;
  // overflow-y: none;
}
</style>
