<template>
  <v-card>
    <template slot="progress">
      <v-progress-linear
        color="dark"
        height="15"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="255"
      v-bind:src="cardInfo.image"
      contain
  />

    <v-card-title class="justify-center">{{cardInfo.title}}</v-card-title>
    <v-card-subtitle>{{cardInfo.date}}<br/>{{cardInfo.workload}}</v-card-subtitle>
    <v-card-text>{{cardInfo.function}}</v-card-text>
  </v-card>
</template>
<script>
  export default {
    props:['cardid','cardInfo'],
  }
</script>