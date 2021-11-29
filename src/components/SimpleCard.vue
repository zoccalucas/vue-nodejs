<template>
  <v-card
    height="350"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      v-bind:src="cardInfo.image"
      contain
  />

    <v-card-title class="justify-center">{{cardInfo.title}}</v-card-title>
  </v-card>
</template>
<script>
  export default {
    props:['cardid','cardInfo'],
  }
</script>