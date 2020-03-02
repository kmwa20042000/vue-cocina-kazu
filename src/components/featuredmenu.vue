<template>
    <div>
        <div class="container-fluid">
            <div class="py-5 text-center">
                <h2>Feature Recipes of the Day</h2>
            </div>
        </div>
        <section class="showcase">
            <div class="container p-3 my-3 border">       
                <div class="row no-gutters">
                    <div class="col-lg-6 order-lg-2 text-white showcase-img"
                        :style="{ 'background-image': 'url('+ recipe.image +')'}">
                   </div>
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{{recipe.title}}</h2>
                        <p v-if="recipe.instruction < 50" class="lead mb-0">{{recipe.instructions}}</p>
                        <p v-else class="lead mb-0">{{recipe.instructions.substring(0,370)+"..."}}</p>
                        <br>
                        <hr>
                        <h5>Prep time: {{recipe.readyInMinutes}} mins</h5>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
export default {
  name:'featuredMenu',
  data (){
   return{
    title:'featuredMenu'
   }
  },
props:["recipe"]
}
</script>

<style scoped>
  body {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
  }

  header.masthead {
    position: relative;
    background-color: #343a40;
    background: url("../assets/philosophy_hero@2x.jpg") no-repeat center center;
    background-size: cover;
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  header.masthead .overlay {
    position: absolute;
    background-color: #212529;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  header.masthead h1 {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    header.masthead {
      padding-top: 12rem;
      padding-bottom: 12rem;
    }

    header.masthead h1 {
      font-size: 3rem;
    }
  }

  .showcase .showcase-text {
    padding: 3rem;
  }

  .showcase .showcase-img {
    min-height: 30rem;
    background-size: cover;
  }

  @media (min-width: 768px) {
    .showcase .showcase-text {
      padding: 7rem;
    }
  }

  .features-icons {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .features-icons .features-icons-item {
    max-width: 20rem;
  }

  .features-icons .features-icons-item .features-icons-icon {
    height: 7rem;
  }

  .features-icons .features-icons-item .features-icons-icon i {
    font-size: 4.5rem;
  }

  .features-icons .features-icons-item:hover .features-icons-icon i {
    font-size: 5rem;
  }

  .testimonials {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .testimonials .testimonial-item {
    max-width: 18rem;
  }

  .testimonials .testimonial-item img {
    max-width: 12rem;
    box-shadow: 0px 5px 5px 0px #adb5bd;
  }

  .call-to-action {
    position: relative;
    background-color: #343a40;
    background: url("../assets/home_hero_slide_3@2x.jpg") no-repeat center center;
    background-size: cover;
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .call-to-action .overlay {
    position: absolute;
    background-color: #212529;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.3;
  }

  footer.footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
</style>