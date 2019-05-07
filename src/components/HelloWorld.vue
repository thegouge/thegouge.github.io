<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
}

:root {
  --rotate-angle: -60deg;
  --background-color: black;
  --transition-time: 0.5s;

  --photo-clip: polygon(0 16%, 71% 10%, 93% 65%, 28% 83%);
}

header {
  position: fixed;
  display: flex;
  align-content: space-around;
  left: -1px;
  top: -76px;
  transform: rotate(var(--rotate-angle));
  background: transparent;
  color: white;
  text-align: right;
  width: 750px;
  height: 200px;
  transition: var(--transition-time);
  transform-origin: 80px 150px;
  overflow: visible;
}
header:before {
  content: "";
  position: fixed;
  background: var(--background-color);
  width: 750px;
  height: 200px;
  -webkit-clip-path: polygon(0 20%, 100% 78%, 100% 100%, 0% 100%);
  clip-path: polygon(0 20%, 100% 78%, 100% 100%, 0% 100%);
  transition: var(--transition-time);
}

nav {
  width: 100%;
  display: flex;
  align-content: space-between;
}

.nav-element {
  margin: auto;
  transform: rotate(calc(-1 * var(--rotate-angle)));
  transition: var(--transition-time);
}

#nav-tool {
  position: relative;
  left: 23px;
  top: 34px;
  text-align: center;
}

#img-container {
  display: block;
  width: 110px;
  height: 110px;
  background: white;
  -webkit-clip-path: var(--photo-clip);
  clip-path: var(--photo-clip);
  transition: var(--transition-time);
}
#img-container:hover {
  background: blue;
}

img {
  margin-top: 5px;
  width: 100px;
  -webkit-clip-path: var(--photo-clip);
  clip-path: var(--photo-clip);
}

body {
  padding: 50px;
  background: red;
  height: 3000px;
  text-align: center;
}
</style>
