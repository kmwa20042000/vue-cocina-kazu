<template>
  <div>
      <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5">Register to receive the lates recipes created by the best chefs around the World!</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <!-- <form>
              <div class="form-row">
                  <div class="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="name" class="form-control form-control-lg" v-model="userName" placeholder="Enter your name...">
                </div>
                <div class="col-12 col-md-9 mb-2 mt-5 mb-md-0">
                  <input type="email" id="email" class="form-control form-control-lg" v-model="emailAdd" placeholder="Enter your email...">
                </div>
                <div class="col-12 ">
                  <button v-on:click="saveEmail()" type="submit" class="btn btn-block btn-lg btn-primary">Register</button>
                </div>
              </div>
            </form> -->
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder="Put your email here..." v-model="emailAdd" required>
              </div>
              <div class="form-group">
                <label>User Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Put your name here..." v-model="userName" required>
              </div>
              <button type="submit" class="btn btn-primary" v-on:click="saveEmail()">Submit</button>
            </form>
          </div>
        </div>
        </div>
        </header>
        </div>
        </template>

<script>
import router from '../router'

export default {
    data(){
        return{
            emailAdd: null,
            userName: null,
        }
    },
    methods: {
        saveEmail(){
            window.db.collection('emailAddress').add({
                emailAdd: this.emailAdd,
                userName: this.userName,
                createdAt: new Date(),
            })
           alert("thank you for signing up")
           router.push('thankyou')
        },
    },
}
</script>

<style>

</style>