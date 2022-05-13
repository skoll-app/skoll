<template>
  <div class="card-story-list">
    <VueSlickCarousel class="slider" v-bind="slickOptions">
      <Card :key="i" v-for="(story, i) in stories" :story="story" />
    </VueSlickCarousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card/story/Card.vue'
import CardStory from '~/interfaces/card-story'

export default Vue.extend({
  components: { Card },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      infinite: false,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: true,
    },
    stories: [
      {
        story: '',
        profileImg: '',
        username: 'pepito',
      },
      {
        story: '',
        profileImg: '',
        username: 'juanito',
      },
      {
        story: '',
        profileImg: '',
        username: 'fulanito',
      },
      {
        story: '',
        profileImg: '',
        username: 'sutanito',
      },
      {
        story: '',
        profileImg: '',
        username: 'perencejito',
      },
      {
        story: '',
        profileImg: '',
        username: 'xxxx',
      },
      {
        story: '',
        profileImg: '',
        username: 'rrrrr',
      },
      {
        story: '',
        profileImg: '',
        username: 'ggggg',
      },
      {
        story: '',
        profileImg: '',
        username: 'ttttt',
      },
      {
        story: '',
        profileImg: '',
        username: 'yyyyy',
      },
      {
        story: '',
        profileImg: '',
        username: 'uuuuuu',
      },
      {
        story: '',
        profileImg: '',
        username: 'iiiiiii',
      },
    ] as CardStory[],
  }),
})
</script>

<style lang="scss">
.card-story-list {
  margin-top: 12px;
  margin-bottom: 12px;

  .slick-prev::before,
  .slick-next::before {
    color: black;
  }
}
</style>
