<template>
  <div>
    <h1>Photos</h1>
    <h3>Dados consumidos da API externa</h3>
        <PhotosCard :cardInfo="api"></PhotosCard>
  </div>
</template>

<script>
  import PhotosCard from '../components/PhotosCard'

  export default {
    name: 'Home',
    data(){
      return{
        titleview:this.$store.state.title,
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      },
      api(){
          return this.$store.state.api
      }
    },
    components: {
      PhotosCard,
    },
    async created(){
        this.$store.dispatch('fetchPhotos')
    }
  }
</script>