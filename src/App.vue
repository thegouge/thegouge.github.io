<template>
  <div id="app">
    <NavMenu />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import NavMenu from "./ui-components/NavMenu";
import Footer from "./ui-components/Footer";

export default {
  components: {
    NavMenu,
    Footer
  },
  properties: {}
};
</script>


<style>
* {
  margin: 0;
}

:root {
  --rotate-angle: -60deg;
  --nav-color: black;
  --transition-time: 0.5s;
  --open-nav-color: red;

  --photo-clip: polygon(0 16%, 71% 10%, 93% 65%, 28% 83%);
}

body {
  /* padding: 50px; */
  background: black;
  text-align: center;
}
</style>
