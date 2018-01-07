
<template>

  <div class = "from-inline">
    <h3>Sign In</h3>
    <div class="clearfix"></div>
    <div class="form-group">
        <input type="text"
        placeholder="email"
        class ="form-control"
        v-model = "email"
        >
        <input type="password" 
        class="form-control"
        placeholder="password"
        v-model = "password"
        >
    </div>
    <button class="btn btn-primary" @click = "signIn">Sign In</button>
    <br>
    <p>{{error.message}}</p>
    <br>
  </div>
</template>

<script>
    import { firebaseApp } from '../firebaseApp'

    export default{
        data(){
            return {
                email:'',
                password:'',
                error:{
                    message:''
                }
            }
        },
        methods:{
            signIn(){
                firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(
                    error => {
                        this.error = error
                    }
                )
            }
        }
    }

</script>