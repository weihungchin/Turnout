
<template>

  <div class = "from-inline mx-3">
    <h3 class = "text-center mt-5 mb-3">Sign In</h3>
    <div class="clearfix"></div>
    <div class="border border-primary mx-auto col-md-6 offset-md-3 py-3" >
         <div class="">
        <div class="form-group">
        <input type="text"
        placeholder="email"
        class ="form-control mb-3"
        v-model = "email"
        >
        <input type="password" 
        class="form-control"
        placeholder="password"
        v-model = "password"
        >
        </div>
    </div>
    
    <div class="text-center mt-10">
         <button class="btn btn-primary btn-lg" @click = "signIn">Sign In</button>
    </div>

    </div>
   
   
    <br>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>