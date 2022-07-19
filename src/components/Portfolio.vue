<template>
  <div class="tokyo_tm_portfolio">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>Portfolio</span>
          <h3>Projektet</h3>
        </div>
        <!-- End Left -->
        <div class="portfolio_filter">
          <ul>
            <li>
              <a
                v-on:click="activetab = 1"
                :class="[activetab === 1 ? 'active' : '']"
                >Të gjitha</a
              >
            </li>
            <li>
              <a
                v-on:click="activetab = 3"
                :class="[activetab === 3 ? 'active' : '']"
                >Youtube</a
              >
            </li>
            <li>
              <a
                v-on:click="activetab = 5"
                :class="[activetab === 5 ? 'active' : '']"
                >Gallery</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="activetab === 1" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="allItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in allItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="activetab === 2" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="vimeoItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in vimeoItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="activetab === 3" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox
          :items="youtubeItems"
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in youtubeItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="activetab === 4" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox :items="mixItems" :index="index" @close="index = null">
        </CoolLightBox>
        <li
          v-for="(image, imageIndex) in mixItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="activetab === 5" class="tabcontent">
      <ul class="portfolio_list">
        <CoolLightBox
          :items="galleryItems"
          :index="index"
          @close="index = null"
        >
        </CoolLightBox>

        <li
          v-for="(image, imageIndex) in galleryItems"
          :key="imageIndex"
          @click="index = imageIndex"
        >
          <div class="inner">
            <div class="entry tokyo_tm_portfolio_animation_wrap">
              <img class="image" :src="image.thumb" alt="Portfolio" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activetab: 1,
        allItems: [
          {
            src: require("../assets/img/portfolio/img1.jpg"),
            thumb: require("../assets/img/portfolio/img1.jpg"),
          },
          {
            src: "https://www.youtube.com/embed/owQWAiAgnV0",
            thumb: require("../assets/img/portfolio/img3.jpg"),
          },
          {
            src: require("../assets/img/portfolio/img2.jpg"),
            thumb: require("../assets/img/portfolio/img2.jpg"),
          },
        ],
        youtubeItems: [
          {
            src: "https://youtu.be/ZOoVOfieAF8",
            thumb: require("../assets/img/portfolio/img4.jpg"),
          },
          {
            src: "https://youtu.be/ZOoVOfieAF8",
            thumb: require("../assets/img/portfolio/img5.jpg"),
          },
        ],
        galleryItems: [
          {
            src: require("../assets/img/portfolio/img7.jpg"),
            thumb: require("../assets/img/portfolio/img7.jpg"),
          },
          {
            src: require("../assets/img/portfolio/img1.jpg"),
            thumb: require("../assets/img/portfolio/img1.jpg"),
          },
          {
            src: require("../assets/img/portfolio/img2.jpg"),
            thumb: require("../assets/img/portfolio/img2.jpg"),
          },
          {
            src: require("../assets/img/portfolio/img3.jpg"),
            thumb: require("../assets/img/portfolio/img3.jpg"),
          },
        ],
        index: null,
      };
    },
  };
</script>

<style lang="scss" scoped></style>
