<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand">Skoll</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <form class="d-flex mx-auto">
          <div class="form-group search">
            <div class="input-group">
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
                B
              </button>
            </div>
          </div>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              >C
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item me-0">
            <NuxtLink class="nav-link" to="/auth">Ingresar</NuxtLink>
            <!-- <a class="nav-link" href="#">Ingresar</a> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
@media (min-width: 768px) {
  .search {
    min-width: 500px;
  }
}
</style>
