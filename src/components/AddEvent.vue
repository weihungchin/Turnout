<template>

<div>
    <h4>Add an Event</h4> <input type="checkbox" v-model = "showForm">
    <div class="form" v-if = "showForm">
        <div class="form-group">
            <label for="">Title</label>
            <input type="text" class="form-control" v-model = "event.title">
        </div>

        <div class="form-group">
            <label for="">Location</label>
            <input type="text" class="form-control" v-model = "event.location">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <input type="text" class="form-control" v-model = "event.description">
        </div>

        <div class="form-group">
            <label for="">Date</label>
            <input type="date" class="form-control" v-model = "event.date">
        </div>
    </div>
    <button class="btn btn-primary" @click = "addEvent">Submit</button>
</div>
  
</template>


<script>
import { eventsRef } from '../firebaseApp';

    export default {
        data(){
            return{
                event:{
                    title:'',
                    description:'',
                    date:'',
                    location:'',
                    email:''
                },
                showForm:false,
            }
        },
        methods:{
            addEvent(){

                this.event.email = this.$store.state.user.email;
                eventsRef.push(this.event);
            }
        }
    }
</script>