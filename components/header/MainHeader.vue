<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid px-4">
      <div>
        <MenuIcon @click="toggleSidebar" class="me-2" role="button" />
      </div>

      <div class="collapse navbar-collapse">
        <NuxtLink to="/" class="navbar-brand">Skoll</NuxtLink>

        <form class="d-flex mx-auto">
          <div class="form-group search">
            <div class="input-group input-group-sm">
              <input
                type="text"
                class="form-control"
                placeholder="Buscar..."
                aria-label="Buscar..."
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-secondary bg-white"
                type="button"
                id="button-addon2"
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item d-flex">
            <CartIcon role="button" class="align-self-center" />
          </li>
          <li class="nav-item me-0">
            <NuxtLink
              type="button"
              class="btn btn-outline-warning btn-sm"
              to="/auth"
              >Ingresar</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Icons
import CartIcon from '~/static/assets/icons/cart.svg'
import MenuIcon from '~/static/assets/icons/menu.svg'
import SearchIcon from '~/static/assets/icons/search.svg'
// Components
import Sidebar from '../ux/sidebar/Sidebar.vue'

export default Vue.extend({
  components: {
    CartIcon,
    MenuIcon,
    SearchIcon,
    Sidebar,
  },
  methods: {
    toggleSidebar() {
      this.open ? this.closeSidebar() : this.openSidebar()
    },
    ...mapActions('sidebar', ['openSidebar', 'closeSidebar']),
  },
  computed: {
    open(): boolean {
      return this.$store.state.sidebar.open
    },
  },
})
</script>

<style scoped>
nav {
  min-height: 76px;
}
@media (min-width: 768px) {
  .search {
    min-width: 500px;
  }
}
</style>
