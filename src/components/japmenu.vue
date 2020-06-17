<template>
  <div>
    <Appheader />
    <div class="container">
      <br />
      <br />
      <div class="container-sm"></div>

      <div class="text-center mt-4">
        <h2 class="display-4">Japanese</h2>
      </div>
      <br />

      <div class="cardsBox">
        <div class="cardJap" v-for="(item, index) in jpnRecipesList" v-bind:key="index">
          <Recipecard v-bind:recipiApi="item" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Appheader from "./app-header";
import Recipecard from "./app-recipecards";
import Footer from "./footer";
export default {
  name: "japanese",
  components: {
    Recipecard,
    Appheader,
    Footer
  },
  mounted() {
    this.$store.dispatch("loadJpnMenu");
  },
  computed: {
    ...mapState(["jpnRecipesList"])
  }
};
</script>

<style scoped>
.cardsBox {
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.cardJap {
  width: 350px;
  padding: 9px;
}

h1 {
  color: #fff;
  padding: 10px 0;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border: none;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
}

.card a {
  color: initial;
}

.card a:hover {
  text-decoration: initial;
}

.card .text-muted i {
  margin: 0 10px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .smallimg > img {
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
  }

  .container-sm {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .japbanner {
    height: 350px;
    width: 350px;
  }
}

@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

.display-4 {
  font-family: "Open Sans", sans-serif;
}
</style>