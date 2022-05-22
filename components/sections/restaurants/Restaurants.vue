<template>
  <section id="restaurants" class="pages-content__section">
    <div class="container">
      <h3 class="mb-3" v-html="$t('home.sections.restaurants.title')"></h3>
      <VueSlickCarousel ref="carousel" class="slider" v-bind="slickOptions">
        <Card
          :key="i"
          v-for="(restaurant, i) in restaurants"
          :name="restaurant.name"
        />
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/card/restaurants/RestaurantCard.vue'

export default Vue.extend({
  components: { Card },
  data: () => ({
    slickOptions: {
      dots: true,
      arrows: false,
      centerPadding: '20px',
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: 'linear',
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    restaurants: [
      {
        name: "Papa John's",
        to: '/',
        image: '',
      },
      {
        name: 'Paisa Wings',
        to: '/',
        image: '',
      },
      {
        name: 'Mr Bross',
        to: '/',
        image: '',
      },
      {
        name: 'El corral',
        to: '/',
        image: '',
      },
      {
        name: 'Subway',
        to: '/',
        image: '',
      },
    ],
  }),
})
</script>

<style lang="scss">
#restaurants {
  .slick-slider .slick-slide {
    padding: 0 15px;
  }
}
</style>
