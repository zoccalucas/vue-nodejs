<template>
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

    <v-img
      height="250"
      v-bind:src="cardInfo.img"
      contain
    ></v-img>

    <v-card-title>{{cardInfo.info}}</v-card-title>

   
  </v-card>
</template>

<script>
  export default {
    props:['cardId','cardInfo'],
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>