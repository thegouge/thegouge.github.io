<template>
  <section class="app-selector">
    <iframe class="selected-app" src="https://thegouge.github.io/character-sheet" frameborder="0"></iframe>
  </section>
</template>

<script>
export default {
  name: "app-landing"
};
</script>

<style>
.selected-app {
  width: 1000px;
  height: 1000px;
}
</style>
