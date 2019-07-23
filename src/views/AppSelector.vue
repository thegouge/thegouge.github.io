<template>
  <section class="app-selector">
    <div id="back-button"></div>
    <iframe class="selected-app" :src="url" frameborder="0"></iframe>
  </section>
</template>

<script>
export default {
  name: "app-landing",
  computed: {
    url() {
      return "https://thegouge.github.io/character-sheet";
    }
  }
};
</script>

<style>
.selected-app {
  width: calc(100vw - 2.5em);
  height: calc(100vh - 1em);
}
</style>
