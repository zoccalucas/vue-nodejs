<template>
      <v-system-bar
      app
      dark
      color="indigo darken-4"
    >
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span>{{ new Date().getDate() }}/{{ new Date().getMonth()}}/{{ new Date().getFullYear()}}</span>
    </v-system-bar>
</template>