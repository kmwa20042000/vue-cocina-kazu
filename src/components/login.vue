<template>
  <div>
    <appHeader />
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <form class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <div class="form-signin">
                <div class="form-label-group">
                  <input type="email" id="inputEmail" v-model="logEmail" class="form-control"
                    placeholder="Email address" required autofocus>
                  <label for="inputEmail">Email address</label>
                </div>
                <div class="form-label-group">
                  <input type="password" v-model="logPwd" id="inputPassword" class="form-control" placeholder="Password"
                    required>
                  <label for="inputPassword">Password</label>
                </div>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" @click="signInEmail" type="submit">Sign
                  in</button>
                <hr class="my-4">
                <button class="btn btn-lg btn-google btn-block text-uppercase" @click="signInGoogle" type="submit"> Sign
                  in with Google</button>
                <br>
                <router-link to="./registration">
                  <button class="btn btn-sm btn-dark btn-block text-uppercase" type="submit"><i
                      class="fab fa-google mr-2"></i> Register</button>
                </router-link>
                <section id="firebaseui-auth-container"></section>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>

</template>

<script>
import appHeader from "./app-header";

// import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
    name: 'login',
    data: function(){
        return{
          logEmail:'',
          logPwd:'',
          toekn: '',
          user:null,
          status: null,
          error: null,
        }
    },
    components: {
      appHeader,
    },
    methods: {
      signInGoogle: function(){
        this.$store.dispatch(`signInGoogle`)

      },
      signInEmail: function(){
        this.$store.dispatch('signInEmail', {email:this.logEmail, password:this.logPwd})
      },
    },

    // mounted() {
    //     var ui = new firebaseui.auth.AuthUI(firebase.auth());
    //     if (!ui) {ui = new firebaseui.auth.AuthUI(firebase.auth());}
    //     var uiConfig = {
    //         signInFlow: 'popup',
    //         signInSuccessUrl: "/chats",
    //     };
    //     ui.start("#firebaseui-auth-container", uiConfig);
    // },
  }
</script>

<style scoped>
:root {
  --input-padding-x: 2rem;
  --input-padding-y: 2.75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 8);
  padding-bottom: calc(var(--input-padding-y) / 8);
  font-size: 5px;
  color: grey;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>