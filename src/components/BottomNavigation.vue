<template>
    <v-bottom-navigation dense dark app>
        <v-btn   v-for="(item, i) in items" 
        :key="i" 
        text 
        class="mx-1"
        @click="$router.push(item.address)"
        >
         <span >{{item.title}}</span>
        </v-btn>
  </v-bottom-navigation>
</template>
<script>
    
    export default{
        props: ["items"],
            }
    
</script>