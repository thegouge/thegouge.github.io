<template>
  <section class="app-selector">
    <div id="back-button"></div>
    <iframe class="selected-app" :src="url" frameborder="10"></iframe>
  </section>
</template>

<script>
export default {
  name: "app-landing",
  data() {
    return {
      url: "https://thegouge.github.io/character-sheet"
    };
  }
};
</script>

<style>
.selected-app {
  width: calc(100vw - 2.5em);
  height: calc(100vh - 1em);
}
</style>
