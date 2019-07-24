<template>
  <header id="head" class="inactive">
    <div id="nav-tool" class="nav-element">
      <router-link to="/" id="img-container" title="home">
        <img id="profile-pic" src="../assets/me.jpg" alt="my face!" />
      </router-link>

      <div class="nav-button-box" :style="`background: ${navButtonText}`">
        <div
          class="nav-button"
          @click="rotateNav"
          :style="`background: ${navButtonBackground}; color: ${navButtonText}`"
        >Nav Menu</div>
      </div>
    </div>

    <nav>
      <router-link to="/about" class="nav-element link">
        <div>About</div>
      </router-link>
      <router-link to="/spa-landing" class="nav-element link">
        <div>Single Page Apps</div>
      </router-link>
      <router-link to="/early-landing" class="nav-element link">
        <div>Early Websites</div>
      </router-link>
      <a href="https://linkedin.com/in/thegouge/" class="nav-element link">
        <div>Linkedin</div>
      </a>
      <a href="https://github.com/thegouge" class="nav-element link">
        <div>Github</div>
      </a>
      <router-link to="/contact" class="nav-element link">
        <div>Contact Info</div>
      </router-link>
    </nav>
  </header>
</template>

<script>
// let navDisplay = false;

export default {
  data() {
    return {
      navDisplay: false,
      buttonPosition: 0,
      navColor: "black",
      navButtonBackground: "black",
      navButtonText: "white"
    };
  },
  methods: {
    rotateNav() {
      if (this.navDisplay) {
        document.documentElement.style.setProperty("--rotate-angle", "-60deg");
        document.documentElement.style.setProperty("--nav-color", "black");
        this.navButtonBackground = "black";
        this.navButtonText = "white";
        document
          .getElementsByClassName("nav-button-box")[0]
          .style.setProperty("left", "15px");
      } else {
        document.documentElement.style.setProperty("--rotate-angle", "96deg");
        document.documentElement.style.setProperty(
          "--nav-color",
          "var(--open-nav-color)"
        );
        document
          .getElementsByClassName("nav-button-box")[0]
          .style.setProperty("left", "5px");
        this.navButtonBackground = "white";
        this.navButtonText = "black";
      }

      this.navDisplay = !this.navDisplay;
    }
  }
};
</script>

<style>
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
  width: 700px;
  height: 200px;
  transition: var(--transition-time);
  transform-origin: 80px 150px;
  overflow: visible;
}
header:before {
  content: "";
  position: fixed;
  background: var(--nav-color);
  width: 750px;
  height: 200px;
  -webkit-clip-path: polygon(0 20%, 100% 78%, 100% 100%, 0% 100%);
  clip-path: polygon(0 20%, 100% 78%, 100% 100%, 0% 100%);
  transition: var(--transition-time);
}

nav {
  position: relative;
  left: 45px;
  top: 9px;
  width: 100%;
  display: flex;
  align-content: space-around;
}

router-link {
  color: inherit;
}
router-link-visited {
  color: inherit;
}

.nav-button-box {
  position: relative;
  left: 15px;
  top: -4px;
  transition: var(--transition-time);
  padding: 5px;
  user-select: none;
  cursor: pointer;
  clip-path: polygon(27% 0, 100% 8%, 71% 100%, 0 81%);
}
.nav-button {
  margin: auto;
  padding: 7px 20px;
  transition: var(--transition-time);
  width: fit-content;
  clip-path: polygon(27% 0, 100% 8%, 71% 100%, 0 81%);
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
  padding: 5px;
  background: black;
  width: 15%;
  text-align: center;
}
.link:hover {
  color: black;
  background: white;
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
  position: relative;
  left: 15px;
  top: 9px;
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
</style>
