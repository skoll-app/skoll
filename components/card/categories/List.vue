<template>
  <section class="pages-content__section_gray">
    <div class="container">
      <div class="row">
        <div
          v-for="(card, i) in cardsOptions"
          :key="i"
          class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0"
        >
          <CardCategory
            :backgroundColor="card.color"
            :title="card.title"
            :icon="card.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardCategory from './CategoryCard.vue'
import DiscountsIcon from '~/static/assets/icons/discounts.svg'
import BottleIcon from '~/static/assets/icons/bottle.svg'
import MedalIcon from '~/static/assets/icons/medal.svg'
import ChickenIcon from '~/static/assets/icons/chicken.svg'

export default {
  components: {
    CardCategory,
    DiscountsIcon,
    BottleIcon,
    MedalIcon,
    ChickenIcon,
  },
  data: () => ({
    cardsOptions: [
      {
        title: 'Descuentos',
        color: '#E9D7FF',
        to: '/',
        icon: DiscountsIcon,
      },
      {
        title: 'Discotecas',
        color: '#D9EEFF',
        to: '/',
        icon: BottleIcon,
      },
      {
        title: 'Top 10',
        color: '#FFE28B',
        to: '/',
        icon: MedalIcon,
      },
      {
        title: 'Restaurantes',
        color: '#FFD9D3',
        to: '/',
        icon: ChickenIcon,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
