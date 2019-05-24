<template>
  <div id="app">
    <header id="head" class="inactive">
      <div id="nav-tool" class="nav-element">
        <router-link to="/" id="img-container" title="home">
          <img id="profile-pic" src="./assets/me.jpg" alt="my face!">
        </router-link>

        <button v-on:click="rotateNav">Menu</button>
      </div>

      <nav>
        <router-link to="/about" class="nav-element link">
          <div>About</div>
        </router-link>
        <router-link to="/" class="nav-element link">
          <div>Nav Element</div>
        </router-link>
        <router-link to="/" class="nav-element link">
          <div>Nav Element</div>
        </router-link>
        <router-link to="/" class="nav-element link">
          <div>Nav Element</div>
        </router-link>
        <router-link to="/" class="nav-element link">
          <div>Nav Element</div>
        </router-link>
        <router-link to="/" class="nav-element link">
          <div>Nav Element</div>
        </router-link>
      </nav>
    </header>

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
let navDisplay = false;

export default {
  properties: { navDisplay: false, profilePic: "" },
  methods: {
    rotateNav() {
      if (navDisplay) {
        document.documentElement.style.setProperty("--rotate-angle", "-60deg");
        document.documentElement.style.setProperty(
          "--background-color",
          "black"
        );
      } else {
        document.documentElement.style.setProperty("--rotate-angle", "96deg");
        document.documentElement.style.setProperty(
          "--background-color",
          "blue"
        );
      }

      navDisplay = !navDisplay;
    }
  }
};
</script>


<style>
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
  z-index: 100;
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
  position: relative;
  left: 30px;
  top: 9px;
  width: 100%;
  display: flex;
  align-content: space-between;
  /* transform: rotate(calc(-1 * var(--rotate-angle) - 96)); */
}

router-link {
  color: inherit;
}
router-link-visited {
  color: inherit;
}

.nav-element {
  display: block;
  margin: auto;
  color: white;
  text-decoration: none;
  transform: rotate(calc(-1 * var(--rotate-angle)));
  transition: var(--transition-time);
}

.link {
  padding: 10px;
  background: green;
}

#nav-tool {
  position: relative;
  top: 35px;
  left: 21px;
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
  background: red;
}

#profile-pic {
  margin-top: 5px;
  width: 100px;
  -webkit-clip-path: var(--photo-clip);
  clip-path: var(--photo-clip);
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
