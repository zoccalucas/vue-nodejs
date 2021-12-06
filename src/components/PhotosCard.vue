<template>
  <v-card
    :loading="loading"
    max-width="500"
  >
    <template slot="progress">
      <v-progress-linear
        color="dark"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      v-bind:src="cardInfo.url"
      contain
    ></v-img>


   
  </v-card>
</template>

<script>
  export default {
    props:['cardInfo'],
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 1000)
      },
    },
  }
</script>