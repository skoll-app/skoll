<template>
  <div id="mySidenav" class="sidenav" :style="sidebarStyle">
    <template v-for="(item, i) in options">
      <div v-if="item.options && item.options.length" :key="i" class="">
        <a
          class="dropdown-btn d-flex align-items-center justify-content-between item p-2 mx-3"
        >
          {{ item.label }}
          <ArrowRightIcon />
        </a>
        <div class="dropdown-container">
          <NuxtLink
            class="dropdown-btn d-flex align-items-center justify-content-between item p-2 mx-3"
            v-for="(subitem, j) in item.options"
            :key="j"
            :to="subitem.to"
            >{{ subitem.label }}</NuxtLink
          >
        </div>
      </div>
      <div v-else :key="i">
        <NuxtLink
          class="dropdown-btn d-flex align-items-center justify-content-between item p-2 mx-3"
          :to="item.to"
          >{{ item.label }}</NuxtLink
        >
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// Icons
import ArrowRightIcon from '~/static/assets/icons/arrow-right-short.svg'

export default Vue.extend({
  components: {
    ArrowRightIcon,
  },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    options: [
      {
        label: 'Discotecas',
        to: '',
        options: [
          {
            label: 'Inicio',
            to: '/auth/register',
          },
        ],
      },
      {
        label: 'Restaurantes',
        to: '/auth',
      },
      {
        label: 'Bares',
        to: '',
        options: [
          {
            label: 'Presea',
            to: '/',
          },
        ],
      },
    ],
  }),
  computed: {
    sidebarStyle() {
      let left = null
      let right = null
      if (this.right) right = 0
      else left = 0
      return { left: left, right: right }
    },
  },
  methods: {
    openNav() {
      document.getElementById('mySidenav')!.style.width = '250px'
      document.body.style.backgroundColor = 'rgba(196,196,196,0.5)'
    },
    closeNav() {
      document.getElementById('mySidenav')!.style.width = '0'
      document.body.style.backgroundColor = 'white'
    },
    initSidebar() {
      var dropdown = document.getElementsByClassName('dropdown-btn')
      var i

      for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener('click', function () {
          // @ts-ignore
          this.classList.toggle('active')
          // @ts-ignore
          var dropdownContent = this.nextElementSibling
          if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none'
          } else {
            dropdownContent.style.display = 'block'
          }
        })
      }
    },
  },
  mounted() {
    this.openNav()
    this.initSidebar()
  },
})
</script>

<style scoped lang="scss">
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 76px;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 40px;

  a {
    text-decoration: none;
    font-size: 15px;
    color: #000;
    display: block;
    transition: 0.3s;
  }

  .item {
    transition: 0.3s;

    cursor: pointer;
    &:hover {
      border-radius: 4px;
      color: var(--bs-white);
      background-color: var(--bs-warning);
      a {
        color: rgb(88, 88, 88);
      }
    }
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 24px;
    cursor: pointer;
  }
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;

    a {
      font-size: 18px;
    }
  }
}

.dropdown-btn {
  display: block;
  border: none;
  background: none;
  max-width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
  transition: 0.5s;
}
/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  padding-left: 8px;
  transition: 0.5s;
}
</style>
