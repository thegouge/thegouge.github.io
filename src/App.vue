<template>
  <div id="app">
    <NavMenu/>

    <router-view/>

    <footer>
      <div class="self">
        <img src="./assets/profile-pic.jpg" alt="profile pic">
        <span>Gouge-Schajer Websites &copy; 2018</span>
      </div>

      <div class="attribution">
        Icons made by:
        <ul>
          <li>
            <a
              class="credit"
              href="https://www.flaticon.com/authors/iconnice"
              title="Icon Ice"
            >Icon Ice</a>
          </li>
          <li>
            <a
              class="credit"
              href="https://www.flaticon.com/authors/popcorns-arts"
              title="Icon Pond"
            >Icon Pond</a>
          </li>
          <li>
            <a
              class="credit"
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >Smashicons</a>
          </li>
          <li>
            <a class="credit" href="http://www.freepik.com" title="Freepik">Freepik</a>
          </li>
          <li>
            <a
              class="credit"
              href="https://www.flaticon.com/authors/gregor-cresnar"
              title="Gregor Cresnar"
            >Gregor Cresnar</a>
          </li>
        </ul>from
        <a class="credit" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        which is licensed by
        <br>
        <a
          class="credit"
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >CC 3.0 BY</a>
        <div class="float-clear"></div>
      </div>
    </footer>
  </div>
</template>

<script>
import NavMenu from "./components/NavMenu";

export default {
  components: {
    NavMenu
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
  --open-nav-color: blue;

  --photo-clip: polygon(0 16%, 71% 10%, 93% 65%, 28% 83%);
}

body {
  /* padding: 50px; */
  background: red;
  text-align: center;
}

footer {
  display: grid;
  grid-template-areas: ". a b";
  grid-template-columns: 34% 34% 31%;
  background: #222;
  color: #777;
  padding: 10px;
  text-align: center;
}
footer img {
  display: block;
  border-radius: 5px;
  width: 80px;
  margin: 0 auto 5px;
}

.self {
  grid-area: a;
  width: 100%;
  text-align: center;
}

.attribution {
  margin-left: 50px;
  grid-area: b;
  text-align: left;
  overflow: hidden;
}
footer ul {
  padding: 0;
  text-align: center;
  display: block;
}
footer ul li {
  text-align: left;
}
.credit {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
.credit:hover {
  color: orange;
  transition: 0.5s;
}
</style>
