<template>
<div>
  <Header/>
  <div class="container">
      <div class="div1">
  <h1>Thank you for signing up to our newsletter!</h1>
   </div>
   <div class="div2">
  <router-link to="/">
  <button class="btn btn-sm btn-info text-uppercase">Return to Home</button>
  </router-link>
   </div>
  </div>
  </div>
</template>

<script>
import Header from './app-header'
export default {
    components:{
        Header,
    }

}
</script>

<style scoped>
.container {
    display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}
.div1 { grid-area: 1 / 1 / 2 / 4; }
.div2 { grid-area: 2 / 2 / 2 / 2; }
</style>