<template>
<div>
<appHeader/>
<div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="getUser">
    <div class="card-image" style="margin-top:25px;margin-left:10px;"> <img :src="getUser.photoURL"
            style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> </div>
    <div class="card-stacked">
        <div class="card-content">
         <p> name: <strong>{{getUser.displayName}}</strong><br />email:<strong>{{getUser.email}}</strong><br/>uid:
                <strong>{{getUser.uid}}</strong> <br />provider: <strong
                    class="teal-text">{{getUser.providerData[0].providerId}}</strong> </p>
        </div>
    </div>
</div>
</div>
</template>

<script>

import appHeader from "./app-header"
export default {
    data() {
       return {
           user: null
     };
 },
    components: {
      appHeader,
    },
 computed: {
        getUser(){
            return this.$store.getters.getUser
        }
    },
}
</script>