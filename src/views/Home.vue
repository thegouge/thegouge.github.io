<template>
  <div class="home">
    <main>
      <div class="hero">
        <div id="hero-content" v-on:click="randomColor()" :style="`color: ${textColors}`">
          <h1 id="hero-title">Alex Gouge-Schajer's Website!</h1>
          <p>(Pronounced gooj shay-jer)</p>
        </div>
      </div>

      <div class="site-section" id="services">
        <div class="section-header">
          <h2>Key Services</h2>
        </div>

        <div class="site-section-inside">
          <div class="service-box" id="box1">
            <div class="background" style="background: rgb(228, 143, 32);">
              <img class="altImg" src="../assets/html.png" alt />
            </div>

            <h4>Responsive Web Design</h4>
            <p>
              I'm experienced in building responsive front-end sites that look
              good at any aspect ratio. Don't just take my word for it, go ahead
              and mess with the dimensions of your browser window!
            </p>
          </div>
          <div class="service-box" id="box2">
            <div class="background" style="background: rgb(55, 162, 224);">
              <img class="altImg" id="vue" src="../assets/Vue_logo.png" alt />
            </div>

            <h4>Front End Frameworks</h4>
            <p>
              I'm proficient in Vue.js/Vuex and React/Redux and have built a
              full web applications with both! Just check out
              <a
                href="https://thegouge.github.io/king-trivia-score-card/"
              >this one</a>
              I made for King Trivia with Vue, and
              <a
                href="https://thegouge.github.io/fcc-javascript-calculator"
              >this one</a>
              I made for Free Code Camp with React!
            </p>
          </div>
          <div class="service-box" id="box3">
            <img class="image" src="../assets/professional.png" alt />
            <h4>Professional Demeanor</h4>
            <p>
              I have 3 years experience in customer service, so I can
              communicate my ideas clearly, and maintain a professional and
              friendly demeanor even in times of crisis
            </p>
          </div>
          <div class="float-clear"></div>
        </div>
      </div>

      <!-- ABOUT -->
      <div class="section-header about" id="about">
        <h2>About me</h2>
        <p id="about-text">
          I'm a young man who hails from the magical land of Los Angeles, I
          moved up to Vancouver for a while (because of my dad), and now I've
          moved to Washington to pursue my passions of web development, video
          game production,, and not being unemployed! I'm an eager, young man
          looking to make a difference in this world and I'm still figuring out
          exactly how or where I'll do that. I have so many skills and
          interests, I don't know what to do with myself! The least of which
          are: Coding, Guitar, Drums, Video Games, Film-Making, Improv Comedy,
          Close-Up Magic, American Sign Language, and oh so many more. I'm a
          jack of many-a-trade with various degrees of proficiency. But I'm
          quick to learn. I love learning and picking things apart to find out
          how they work!
        </p>
      </div>

      <section class="site-section" id="next">
        <div class="section-header">
          <h2>What's Next?</h2>
        </div>

        <div class="site-section-inside">
          <div class="next-box">
            <h4 class="next-header">Finish Free Code Camp</h4>
            <p>
              I want to finish all of Free Code Camp's certifications. They're
              an excellent learning tool.
            </p>
          </div>
          <div class="next-box">
            <h4 class="next-header">Back End Development</h4>
            <p>
              I would love to become a full stack web developer! I'll definitely
              start with Node and probably pick up Rust/web assembly (mostly
              because Rust just interests me)
            </p>
          </div>

          <div class="next-box">
            <h4 class="next-header">Video Game Programming</h4>
            <p>
              I'm a developer, of course I'm a nerd. Video games are what got me
              into coding in the first place, but I'd learn how to make games
              as a hobby
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => {
    return { textColors: "white" };
  },
  methods: {
    randomColor() {
      this.textColors = `rgb(${this.randomColorNumber()}, ${this.randomColorNumber()}, ${this.randomColorNumber()})`;
    },
    randomColorNumber() {
      return Math.round(Math.random() * 255);
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}

main {
  padding-top: 0;
}

/* HERO */

.hero {
  min-height: 500px;
  text-align: center;
  background: #555;
  background-image: url("../assets/hero.jpg");
  -webkit-filter: contrast(150%);
  filter: contrast(150%);
  text-shadow: 0px 0px 20px black;
  background-size: cover;
}

#hero-content {
  padding-top: 130px;
  line-height: 1;
}

#hero-title {
  margin: 0;
  margin-top: 20px;
  font-size: 100px;
  cursor: pointer;
  user-select: none;
}

#hero-content p {
  font-size: 32px;
  margin-bottom: 60px;
  cursor: pointer;
  user-select: none;
  text-shadow: inherit;
}

/* SERVICES */

.site-section-inside {
  margin: auto;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: space-around;
}

.site-section-secondary {
  background: white;
}

.service-box {
  text-align: center;
  display: inline-block;
  width: 80%;
  padding: 20px 30px;
  line-height: 1;
  border-radius: 5px;
}

.service-box p {
  cursor: default;
  user-select: none;
}

#box1 {
  grid-area: a;
}

#box2 {
  grid-area: b;
}

#box3 {
  grid-area: c;
}

.service-box:hover {
  background: #bed6ca;
  transition: 0.5s ease all;
}

.service-box .image {
  width: 80px;
  margin-bottom: 15px;
}

.altImg {
  width: 60px;
  margin-top: 10px;
}

#vue {
  width: 110px;
  margin-top: -10px;
  margin-left: -17px;
  margin-bottom: -9px;
}

.service-box .background {
  display: inline-block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
}

h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 20px;
  color: #999;
  text-transform: uppercase;
  font-weight: 300px;
  letter-spacing: 2px;
  text-align: left;
}

.service-box p {
  text-align: left;
}

.about {
  padding: 50px 0;
  background: #ecf0f1;
  width: 100%;
}

.about p {
  padding: 30px 120px 30px 120px;
}

/* NEXT */

.next-box {
  text-align: center;
  display: inline-block;
  width: 80%;
  padding: 20px 30px;
  border-radius: 5px;
  box-sizing: border-box;
}

.next-header {
  margin: auto;
  text-align: center;
  color: rgb(105, 105, 105);
}

.next-box p {
  color: rgb(66, 66, 66);
}

/* MOBILE RESPONSIVENESS */
@media all and (max-width: 1035px) {
  .site-section-inside {
    display: block;
  }

  /* FEATURE BOXES   */
  .service-box {
    width: 90%;
  }

  h4 {
    text-align: center;
  }

  .service-box p {
    width: 50%;
    margin: auto;
  }

  /* TESTIMONIAL BOXES   */
  .testimonial-box {
    width: 50%;
  }

  .testimonial-author {
    text-align: left;
  }
}
</style>
