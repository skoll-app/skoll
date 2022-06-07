<template>
  <section class="pages-content__section_gray">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex align-items-center">
          <div class="text-center text-md-start">
            <h2
              class="mb-3 mb-md-2"
              v-html="$t('home.sections.register.title')"
            ></h2>
            <p class="lead">
              {{ $t('home.sections.register.description') }}
            </p>
            <NuxtLink type="button" to="/auth/register" class="btn btn-warning mt-0 mt-md-4">
              {{ $t('home.sections.register.button') }}
            </NuxtLink>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center d-none d-md-flex">
          <img class="img-fluid" src="assets/img/datafono.png" alt="datafono" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
