<template>
<v-app>
  <Toolbar :items ="items"/>
  <NavigationDrawer :items ="items"/>
  <v-main>
    <router-view></router-view>
  </v-main>
  <Footer/>
  <BottomNavigation :items="items"/>
</v-app>
</template>

<script>

  import NavigationDrawer from '@/components/NavigationDrawer'
  import BottomNavigation from '@/components/BottomNavigation'
  import Toolbar from '@/components/Toolbar'
  import Footer from '@/components/Footer'

  export default {
    components:{
      NavigationDrawer,
      BottomNavigation,
      Toolbar,
      Footer
      
    },
    data () { 
      
      return {
        items: [
      {
        title: "Home",
        address: "/",
      },
      {
        title: "My Account",
        address: "/account",
      },
      {
        title: "Photos",
        address: "/photos",
      },
      {
        title: "Friends",
        address: "/friends",
      },
    ],
       titleView:this.$store.state.cards
        
      }
    },
    computed:{
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
