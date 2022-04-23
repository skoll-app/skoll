<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div class="container-fluid px-4">
        <div class="d-flex">
          <div
            class="d-flex"
            :class="{ 'rotate-left': open, 'rotate-right': !open }"
          >
            <MenuIcon
              @click="toggleSidebar"
              class="m-0 align-self-center"
              role="button"
            />
          </div>
          <NuxtLink to="/" class="navbar-brand mx-2">Skoll</NuxtLink>
        </div>
        <div class="d-block d-md-none mobile-btns">
          <SearchIcon />
          <PinIcon />
          <CartIcon role="button" class="align-self-center" />
          <UserIcon v-if="loggedIn" />
          <LoginIcon v-else />
        </div>

        <div class="collapse navbar-collapse">
          <div class="d-flex align-items-center me-auto">
            <div
              role="button"
              class="text-white d-flex border-start border-1 ms-2 ps-2 py-1 btn-location"
            >
              <PinIcon />
              <p class="m-0 ms-1 align-self-center text-capitalize">
                <small>Ubicación</small>
              </p>
            </div>
          </div>

          <form class="d-flex">
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
            <li class="mx-3 d-flex">
              <CartIcon role="button" class="align-self-center text-white" />
            </li>
            <li>
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
    <Sidebar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Icons
import CartIcon from '~/static/assets/icons/cart.svg'
import MenuIcon from '~/static/assets/icons/menu.svg'
import SearchIcon from '~/static/assets/icons/search.svg'
import PinIcon from '~/static/assets/icons/pin.svg'
import UserIcon from '~/static/assets/icons/user.svg'
import LoginIcon from '~/static/assets/icons/login.svg'
// Components
import Sidebar from '../ux/sidebar/Sidebar.vue'

export default Vue.extend({
  components: {
    CartIcon,
    MenuIcon,
    SearchIcon,
    PinIcon,
    UserIcon,
    LoginIcon,
    Sidebar,
  },
  methods: {
    toggleSidebar() {
      this.open ? this.closeSidebar() : this.openSidebar()
    },
    ...mapActions('sidebar', ['openSidebar', 'closeSidebar']),
  },
  computed: {
    open(): Boolean {
      return this.$store.state.sidebar.open
    },
    loggedIn() {
      return false
    },
  },
})
</script>

<style scoped lang="scss">
nav {
  min-height: 76px;

  .search {
    width: 300px;
  }

  .rotate-left {
    transition: 0.3s;
    transform: rotate(-180deg);
  }
  .rotate-right {
    transition: 0.3s;
    transform: rotate(0deg);
  }

  svg, .btn-location {
    transition: 0.3s;
    &:hover {
      color: var(--bs-warning) !important;
    }
  }
  .mobile-btns {
    svg {
      margin-right: 4px;
      margin-left: 4px;
      color: var(--bs-white);
      cursor: pointer;
    }
  }
}
</style>
