<template>
    <div>
<section class="features-icons bg-light text-center">
      <div class="container">
        <h1>View by Category</h1>
        <div class="row">
          <div class="col-lg">
            <router-link to='/spanish'>
              <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div>
                <img src="data:image/png;base64,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" height="102" width="102">
              </div>
              <h3>Spanish Cuisine</h3>
              <p class="lead mb-0">Heavily influenced by historical processes that shaped local culture and society in
                some of Europe's Iberian Peninsula territories.</p>
            </div>
            </router-link>
          </div>
          <div class="col-lg">
            <router-link to='/japanese'>
            <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div>
                <img src="https://cdn1.iconfinder.com/data/icons/japanese-food-9/512/japan-japanese-food-1-17-512.png" height="102" width="102">
              </div>
              <h3>Japanese Cuisine</h3>
              <p class="lead mb-0">Japanese cuisine offers an abundance of gastronomical delights with a boundless
                variety of regional and seasonal dishes. </p>
            </div>
            </router-link>
          </div>
          
          <div class="col-lg">
            <router-link to='/indian'>
            <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div>
                <img src="https://cdn3.iconfinder.com/data/icons/indian-food-colored/48/Food___Beverages__Indian_Food_Artboard_17-512.png" height="102" width="102">
              </div>
              <h3>Indian Cuisine</h3>
              <p class="lead mb-0">Indian cuisine consists of a wide variety of regional and traditional cuisines native
                to the Indian subcontinent.</p>
            </div>
            </router-link>
          </div>
          
          <div class="col-lg">
            <router-link to='/italian'>
            <div class="mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div>
                <img src="https://i.etsystatic.com/16388871/r/il/04317a/1504341481/il_794xN.1504341481_h2li.jpg" height="102" width="102">
              </div>
              <h3>Italian Cuisine</h3>
              <p class="lead mb-0">Pasta, tomatoes, vegetables, cheese, fish, meat and olive oil are all central elements of Italian cuisine and the Mediterranean diet.</p>
            </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>
 export default{
  name:'cuisineType',
  data (){
   return{
    title:'cuisineType'
   }
  }
 }
</script>

<style>
</style>