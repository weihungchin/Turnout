<template>
  <div>
    <h3>Events Dashboard</h3>
     <button class = "btn btn-danger signout-btn" @click = "signOut">Sign Out</button>
     <hr>
     <AddEvent />
     <hr>
      {{$store.state}}

  </div>
</template>

<script>
  import { firebaseApp, eventsRef} from '../firebaseApp'
  import AddEvent from './AddEvent.vue'


  export default {
    methods:{
      signOut(){
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },

    components:{
      AddEvent
    },
    mounted(){
      eventsRef.on('value', snap => {
        let events = [];
        snap.forEach(
          event => {
            events.push(event.val());
          }
        )
        console.log(events);
      })
    }
  }

</script>