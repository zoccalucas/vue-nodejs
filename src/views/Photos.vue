<template>
  <div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="dark"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-card-title>Photos</v-card-title>
  </v-card>

  </div>
</template>
<script>
  export default {
    data () { 
      return {
       titleView:this.$store.state.photos
        
      }
    },
    computed:{
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>