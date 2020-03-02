<template>
<div>
    <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo-cocina.png" height="80" width="85">
        </a>
      <div class="containerBtn">
      <router-link to='/chats'>
      <button  v-show="user" class="btn btn-primary ">Chat Room</button>  
        </router-link>
        <router-link to='/login'>
      <button v-show="!user" class="btn btn-primary ">Login</button>  
        </router-link>
   <button v-show="user" class="btn btn-primary" @click="logout()">Logout</button>

      </div>

      </div>
    </nav>
    
    </div>
</template>

<script>
import firebase from "firebase";

 export default{
  name:'app-header',
  data (){
   return{
    title:'app-header',
    user: '',
   }
  },
  methods: {
 logout() {
    firebase.auth().signOut()
  },
    },
  created() {
      firebase.auth().onAuthStateChanged( user => {
        this.user = user
      });
    }
  }

 
</script>

<style>

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

.container.Btn {
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: distribute;
    align-content: space-around;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    }

.btn btn-primary {
    -ms-flex-order: 0;
    margin: 30px;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    
    }


</style>