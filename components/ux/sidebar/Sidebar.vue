<template>
  <div id="mySidenav" class="sidenav" :style="sidebarStyle">
    <hr />
    <div class="d-flex justify-content-between align-items-center p-4 py-2">
      <LogoIcon />
      <IOIcon role="button" @click="closeSidebar" />
    </div>
    <hr />
    <div class="d-flex justify-content-between align-items-center p-4 py-3">
      <NuxtLink to="/auth" class="btn btn-warning text-white">Ingreso</NuxtLink
      ><NuxtLink to="/auth/register" class="btn btn-warning text-white"
        >Registro</NuxtLink
      >
    </div>
    <hr />
    <template v-for="(menu, k) in menuOptions">
      <div :key="k + '-menu'">
        <div class="py-3">
          <h5 class="px-3 pb-2">{{ menu.title }}</h5>
          <template v-for="(item, i) in menu.options">
            <div
              :key="k + i + '-anchor'"
              v-if="item.options && item.options.length"
            >
              <a
                :id="'anchor-' + k + i"
                ref="fields"
                class="dropdown-btn d-flex align-items-center justify-content-between item p-2 ps-3 py-2 mx-3"
                @click="openDropdown"
              >
                {{ item.label }}
                <ArrowRightIcon class="arrow" />
              </a>
              <div class="dropdown-container d-none">
                <div class="d-flex align-items-center item p-2 mx-3">
                  <DotIcon class="me-2" />
                  <a
                    class="w-100"
                    v-for="(subitem, j) in item.options"
                    :key="j + '-subitem'"
                    @click="goTo(subitem.to)"
                    >{{ subitem.label }}</a
                  >
                </div>
              </div>
            </div>
            <div v-else :key="i + '-anchor'">
              <a
                :id="'anchor-' + i"
                ref="fields"
                :key="i + '-anchor'"
                class="d-flex align-items-center justify-content-between item p-2 ps-3 py-2 mx-3"
                @click="openDropdown"
                >{{ item.label }}</a
              >
            </div>
          </template>
        </div>
        <hr />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
// Icons
import ArrowRightIcon from '~/static/assets/icons/arrow-right-short.svg'
import DotIcon from '~/static/assets/icons/dot.svg'
import IOIcon from '~/static/assets/icons/io.svg'
import LogoIcon from '~/static/assets/icons/logo.svg'

export default Vue.extend({
  components: {
    ArrowRightIcon,
    DotIcon,
    IOIcon,
    LogoIcon,
  },
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    menuOptions: [
      {
        title: 'Categorias',
        options: [
          {
            label: 'Discotecas',
            to: '',
            options: [
              {
                label: 'Inicio',
                to: '/',
              },
            ],
          },
          {
            label: 'Bares',
            to: '',
            options: [
              {
                label: 'Inicio',
                to: '/',
              },
            ],
          },
          {
            label: 'Restaurantes',
            to: '',
            options: [
              {
                label: 'Inicio',
                to: '/auth/register',
              },
            ],
          },
          {
            label: 'Tiendas',
            to: '/',
            options: [
              {
                label: 'Inicio',
                to: '/auth/register',
              },
            ],
          },
        ],
      },
      {
        title: 'Otros',
        options: [
          {
            label: 'Registrar comercio',
            to: '/',
          },
          {
            label: 'Preguntas frecuentes',
            to: '/',
          },
          {
            label: 'Planes',
            to: '/',
          },
        ],
      },
    ],

    pos: 0,
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
  destroyed() {
    document.body.style.backgroundColor = 'white'
  },
  methods: {
    openDropdown(element: any) {
      const anchors = this.$refs['fields'] as HTMLAnchorElement[]
      anchors.map((el) => {
        let dropdownContent = el.nextElementSibling
        if (el.id === element.target.id) {
          if (!dropdownContent) {
            el.classList.add('active')
          } else {
            el.classList.toggle('active')
            dropdownContent!.classList.toggle('d-block')
            dropdownContent!.classList.toggle('d-none')
          }
        } else {
          if (!dropdownContent) {
            el.classList.remove('active')
          } else {
            el.classList.remove('active')
            dropdownContent.classList.remove('d-block')
            dropdownContent.classList.add('d-none')
          }
        }
      })
    },
    goTo(to: string) {
      this.$router.push(to)
    },
    ...mapActions('sidebar', ['closeSidebar']),
  },
})
</script>

<style scoped lang="scss">
.sidenav {
  width: 0;
  position: fixed;
  z-index: 1;
  top: 76px;
  background-color: #fff;
  transition: 0.5s;
  // padding-top: 50px;
  bottom: 0;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: nowrap;

  a {
    text-decoration: none;
    // font-size: 15px;
    color: #000;
    display: block;
    transition: 0.3s;
  }

  .item:not(.active) {
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: var(--bs-warning);
      padding-left: 12px !important;
    }
  }

  .arrow {
    transition: 0.3s;
  }

  .active {
    border-radius: 4px;
    background-color: var(--bs-warning);
    color: var(--bs-white);

    .arrow {
      transform: rotate(90deg);
      color: var(--bs-white);
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
  padding-left: 8px;
  transition: 0.5s;
}

/* width */
::-webkit-scrollbar {
  scrollbar-width: 5px;
  width: 5px;
  border-radius: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
