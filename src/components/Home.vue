<template>
  <div class="tokyo_tm_home">
    <div class="home_content">
      <div class="avatar">
        <div
          class="image avatar_img"
          :style="{ backgroundImage: 'url(' + src1 + ')' }"
        ></div>
      </div>
      <div class="details">
        <h3 class="name">Agnesa Hajdari</h3>
        <p class="job">
          Front end Developer (HTML, CSS, VueJs)
        </p>

        <Social />
      </div>
    </div>
  </div>
</template>

<script>
  import Social from "./Social";
  export default {
    components: {
      Social,
    },
    data() {
      return {
        src1: require("../assets/img/slider/1.jpg"),
      };
    },
  };
</script>

<style lang="scss"></style>
